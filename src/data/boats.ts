export type Boat = {
  id: string
  nome: string
  descrizione: string
  immagine: string
  specifiche: { label: string; valore: string }[]
}

export const boats: Boat[] = [
  {
    id: 'b1',
    nome: 'Gommone Lomac 750',
    descrizione: "Veloce e stabile, la scelta giusta quando c'è un po' di onda e si vuole arrivare comodi a Levanzo.",
    immagine: '/images/barca-gommone.jpg',
    specifiche: [
      { label: 'lunghezza', valore: '7,5 m' },
      { label: 'posti', valore: '10' },
      { label: '', valore: '250 cv' },
    ],
  },
  {
    id: 'b3',
    nome: 'Motobarca Cantieri Trapani 10 m',
    descrizione: 'Cabina, bagno interno e prendisole di prua. La usiamo per i charter privati e le giornate lunghe.',
    immagine: '/images/barca-motobarca.jpg',
    specifiche: [
      { label: 'lunghezza', valore: '10 m' },
      { label: 'posti', valore: '10' },
      { label: '', valore: 'bagno a bordo' },
    ],
  },
]
