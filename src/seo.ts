import { site } from './data/site'
import { getTours } from './data/tours'
import { HREFLANG, LANGS, LANG_DEFAULT, OG_LOCALE, dicts, lp, splitPath } from './i18n'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** tag del <head> che cambiano per pagina e lingua; tutti con data-head, così il client li sostituisce */
export function headHtml(pathname: string, siteUrl: string): { lang: string; html: string } {
  const { lang, path } = splitPath(pathname)
  const t = dicts[lang]
  const slug = path.match(/^\/escursioni\/([^/]+)$/)?.[1]
  const tour = slug ? getTours(lang).find((x) => x.slug === slug) : undefined

  const pagina =
    path === '/' ? t.meta.home
    : path === '/contatti' ? t.meta.contatti
    : path === '/privacy' ? t.meta.privacy
    : tour ? { title: `${tour.titolo} — Bellavia Egadi Charter`, description: tour.descrizioneBreve }
    : null

  const tag: string[] = []
  if (!pagina) {
    tag.push(`<title>${esc(t.meta.notFound.title)}</title>`, '<meta name="robots" content="noindex">')
  } else {
    const url = (l: typeof lang) => siteUrl + lp(path, l)
    const immagine = `${siteUrl}/images/hero.jpg`
    tag.push(
      `<title>${esc(pagina.title)}</title>`,
      `<meta name="description" content="${esc(pagina.description)}">`,
      `<link rel="canonical" href="${url(lang)}">`,
      ...LANGS.map((l) => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${url(l)}">`),
      `<link rel="alternate" hreflang="x-default" href="${url(LANG_DEFAULT)}">`,
      '<meta property="og:type" content="website">',
      `<meta property="og:title" content="${esc(pagina.title)}">`,
      `<meta property="og:description" content="${esc(pagina.description)}">`,
      `<meta property="og:url" content="${url(lang)}">`,
      `<meta property="og:image" content="${immagine}">`,
      `<meta property="og:locale" content="${OG_LOCALE[lang]}">`,
      ...LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`),
    )
    if (path === '/') {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Bellavia Egadi Charter',
        url: url(lang),
        image: immagine,
        description: t.meta.jsonLd,
        inLanguage: HREFLANG[lang],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Porticciolo, Nautica Cordaro',
          addressLocality: 'Salinagrande',
          postalCode: '91031',
          addressRegion: 'TP',
          addressCountry: 'IT',
        },
        telephone: site.telefono,
        email: site.email,
        sameAs: [site.social.instagram, site.social.tiktok],
        priceRange: '€45-€900',
        openingHours: 'Mo-Su 08:00-20:00',
      }
      tag.push(`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`)
    }
  }

  return { lang: HREFLANG[lang], html: tag.map((x) => x.replace(/^<(\w+)/, '<$1 data-head')).join('\n  ') }
}
