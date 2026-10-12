// Dati che non cambiano con la lingua. I testi sono in src/i18n/<lingua>.tsx.
export const site = {
  nome: 'Bellavia',
  claim: 'Egadi Charter',
  telefono: '+39 342 364 1941',
  telefonoHref: 'tel:+393423641941',
  email: 'bellavia.egadicharter@gmail.com',
  whatsappNumero: '393423641941',
  social: {
    instagram: 'https://www.instagram.com/bellaviaegadicharter',
    tiktok: 'https://vm.tiktok.com/ZN8MF5s9y/',
  },
  indirizzo: {
    riga1: 'Nautica Cordaro',
    riga2: 'Porticciolo',
    riga3: '91031 Salinagrande (TP)',
  },
  ragioneSociale: 'Marco Bellavia Charter Egadi',
  partitaIva: 'P. IVA 02976580817',
  mappaSrc: 'https://www.google.com/maps?q=Nautica+Cordaro+Porticciolo+Salinagrande+TP&output=embed',
  mappaLink: 'https://maps.app.goo.gl/imVeZpXmcvMM6P3Q6',
  chiSiamoImmagine: '/images/chi-siamo.jpg',

  // le etichette sono in t.nav[key]
  nav: [
    { href: '/#escursioni', key: 'escursioni' },
    { href: '/#flotta', key: 'flotta' },
    { href: '/#isole', key: 'isole' },
    { href: '/#noi', key: 'noi' },
    { href: '/contatti', key: 'contatti' },
  ],

  footer: {
    // le etichette sono i titoli brevi in t.footer.tour[slug]
    escursioni: [
      'favignana-levanzo-giornata-intera',
      'favignana-mezza-giornata',
      'aperitivo-al-tramonto',
      'charter-privato-egadi',
    ],
    // le etichette sono in t.footer.info[key]
    info: [
      { href: '/#noi', key: 'noi' },
      { href: '/#flotta', key: 'flotta' },
      { href: '/#faq', key: 'faq' },
      { href: '/contatti', key: 'condizioni' },
      { href: '/privacy', key: 'privacy' },
    ],
  },
} as const

/** link wa.me con messaggio precompilato */
export const waLink = (testo?: string) =>
  `https://wa.me/${site.whatsappNumero}${testo ? `?text=${encodeURIComponent(testo)}` : ''}`
