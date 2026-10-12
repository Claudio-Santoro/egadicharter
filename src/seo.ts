import { isValidElement, type ReactNode } from 'react'
import { site } from './data/site'
import { getTours } from './data/tours'
import { HREFLANG, LANGS, LANG_DEFAULT, OG_LOCALE, dicts, lp, splitPath } from './i18n'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** testo semplice di una risposta FAQ, che può contenere link JSX */
const testo = (n: ReactNode): string =>
  typeof n === 'string' || typeof n === 'number' ? String(n)
  : Array.isArray(n) ? n.map(testo).join('')
  : isValidElement<{ children?: ReactNode }>(n) ? testo(n.props.children)
  : ''

const jsonLdTag = (dati: object) =>
  `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', ...dati }).replace(/</g, '\\u003c')}</script>`

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
    const azienda = {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#azienda`,
      name: 'Bellavia Egadi Charter',
      url: url(lang),
      image: immagine,
      description: t.meta.jsonLd,
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
    if (path === '/') {
      tag.push(jsonLdTag({
        '@graph': [
          { ...azienda, inLanguage: HREFLANG[lang] },
          {
            '@type': 'FAQPage',
            inLanguage: HREFLANG[lang],
            mainEntity: t.faq.lista.map((f) => ({
              '@type': 'Question',
              name: f.domanda,
              acceptedAnswer: { '@type': 'Answer', text: testo(f.risposta) },
            })),
          },
        ],
      }))
    } else if (tour) {
      tag.push(jsonLdTag({
        '@type': 'TouristTrip',
        name: tour.titolo,
        description: tour.descrizioneBreve,
        url: url(lang),
        image: siteUrl + tour.immagine,
        inLanguage: HREFLANG[lang],
        itinerary: { '@type': 'ItemList', itemListElement: tour.itinerario.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x })) },
        provider: { '@id': azienda['@id'], '@type': 'LocalBusiness', name: azienda.name, url: siteUrl + lp('/', lang) },
        offers: {
          '@type': 'Offer',
          price: tour.prezzoDa,
          priceCurrency: 'EUR',
          url: url(lang),
          // prezzo a persona per i condivisi, per gommone per i privati
          eligibleQuantity: { '@type': 'QuantitativeValue', maxValue: tour.maxPersone, unitText: tour.unitaPrezzo === 'persona' ? 'person' : 'boat' },
        },
      }))
    }
  }

  return { lang: HREFLANG[lang], html: tag.map((x) => x.replace(/^<(\w+)/, '<$1 data-head')).join('\n  ') }
}
