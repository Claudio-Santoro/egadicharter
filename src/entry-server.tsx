// Entry per il prerender (vite build --ssr): usato solo da scripts/prerender.js, non finisce nel bundle client.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { toursBase } from './data/tours'
import { HREFLANG, LANGS, LANG_DEFAULT, lp } from './i18n'

export { headHtml } from './seo'

export const render = (url: string) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

const paths = ['/', '/contatti', '/privacy', ...toursBase.map((t) => `/escursioni/${t.slug}`)]

/** tutti gli URL da prerenderizzare */
export const urls = paths.flatMap((p) => LANGS.map((l) => lp(p, l)))

export function sitemap(siteUrl: string): string {
  const voci = paths.flatMap((p) => LANGS.map((l) => {
    const alt = [...LANGS.map((a) => [HREFLANG[a], lp(p, a)]), ['x-default', lp(p, LANG_DEFAULT)]]
      .map(([h, u]) => `    <xhtml:link rel="alternate" hreflang="${h}" href="${siteUrl}${u}"/>`)
      .join('\n')
    return `  <url>\n    <loc>${siteUrl}${lp(p, l)}</loc>\n${alt}\n  </url>`
  }))
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${voci.join('\n')}
</urlset>
`
}
