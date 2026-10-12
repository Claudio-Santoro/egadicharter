// Dopo `vite build` e `vite build --ssr`: scrive un file HTML per ogni pagina e lingua,
// più 404.html, sitemap.xml e robots.txt. Uso: node scripts/prerender.js
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { loadEnv } from 'vite'

const dist = resolve('dist')
const env = { ...loadEnv('production', process.cwd(), ''), ...process.env }

// URL assoluto per canonical, hreflang e sitemap
let siteUrl = env.SITE_URL
if (!siteUrl && env.CF_PAGES_URL) {
  siteUrl = env.CF_PAGES_URL
  console.warn(`! SITE_URL non impostato: uso ${siteUrl} (anteprima Cloudflare). In produzione impostalo al dominio vero.`)
}
if (!siteUrl) {
  console.error('SITE_URL mancante: impostalo (es. SITE_URL=https://www.esempio.it) nel file .env o nelle variabili di build.')
  process.exit(1)
}
siteUrl = siteUrl.replace(/\/+$/, '')

const { render, headHtml, urls, sitemap } = await import(resolve('dist-ssr/entry-server.js'))
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

function scrivi(url, file) {
  const { lang, html } = headHtml(url, siteUrl)
  const pagina = template
    .replace('<html lang="it">', `<html lang="${lang}">`)
    .replace('<!--head-->', html)
    .replace('<!--app-->', render(url))
  const out = resolve(dist, file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, pagina)
}

// "/" → index.html, "/en/contatti" → en/contatti.html: niente barra finale negli URL, sia su Cloudflare Pages sia su nginx
for (const url of urls) scrivi(url, url === '/' ? 'index.html' : `${url.slice(1)}.html`)
scrivi('/404', '404.html')

writeFileSync(resolve(dist, 'sitemap.xml'), sitemap(siteUrl))
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
rmSync(resolve('dist-ssr'), { recursive: true, force: true })

console.log(`prerender: ${urls.length} pagine + 404 per ${siteUrl}`)
