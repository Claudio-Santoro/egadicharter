export type Foto = { src: string; alt: string }

export const fleet = {
  modello: 'Breva 800',
  quantita: 2,
  descrizione:
    "Due gommoni identici, così anche un gruppo numeroso può dividersi o viaggiare insieme. Tubolari alti a prua e ampio pozzetto: comodi per le soste bagno e con il bagno a bordo per le giornate lunghe.",
  specifiche: [
    { valore: '2', label: 'gommoni' },
    { valore: '8,5 m', label: 'lunghezza' },
    { valore: '3 m', label: 'larghezza' },
    { valore: '10', label: 'persone a bordo' },
    { valore: 'Cat. B', label: 'omologazione CE' },
    { valore: 'Bagno', label: 'a bordo' },
  ],
  foto: [
    { src: '/images/flotta-1.jpg', alt: 'Gommone Breva 800 con tendalino, visto di lato' },
    { src: '/images/flotta-2.jpg', alt: 'Gommone Breva 800 visto dall’alto, con prendisole di prua e pozzetto' },
    { src: '/images/flotta-3.jpg', alt: 'Gommone Breva 800 in navigazione' },
    { src: '/images/flotta-4.jpg', alt: 'Gommone Breva 800 in navigazione al tramonto' },
    { src: '/images/flotta-5.jpg', alt: 'I due gommoni Breva 800 in navigazione' },
    { src: '/images/flotta-6.jpg', alt: 'Accesso al bagno di bordo dal ponte di poppa' },
    { src: '/images/flotta-7.jpg', alt: 'Bagno di bordo con specchio e lavabo' },
    { src: '/images/flotta-8.jpg', alt: 'Lavabo del bagno di bordo' },
    { src: '/images/flotta-9.jpg', alt: 'WC del bagno di bordo' },
  ] as Foto[],
}
