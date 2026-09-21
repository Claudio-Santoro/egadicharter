# syntax=docker/dockerfile:1

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS build
ARG VITE_FORM_ENDPOINT
ENV VITE_FORM_ENDPOINT=$VITE_FORM_ENDPOINT
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:alpine AS final
RUN apk add --no-cache libcap \
  && setcap 'cap_net_bind_service=+ep' /usr/sbin/nginx \
  && addgroup -S webapp && adduser -S webapp -G webapp \
  && chown -R webapp:webapp /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
USER webapp
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:80/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
