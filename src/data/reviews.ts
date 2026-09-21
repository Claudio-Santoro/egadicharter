export type Review = {
  id: string
  testo: string
  autore: string
  provenienza: string
}

export const reviews: Review[] = [
  {
    id: 'r1',
    testo: "Marco ci ha portati in una cala dove non c'era nessun altro e ha cucinato la pasta a bordo. Mio figlio di sei anni non voleva più scendere.",
    autore: 'Chiara M.',
    provenienza: 'Milano · agosto 2025',
  },
  {
    id: 'r2',
    testo: 'Avevamo prenotato con vento previsto. Ci hanno chiamati la sera prima e spostato di un giorno senza chiedere nulla. Professionisti veri.',
    autore: 'Thomas K.',
    provenienza: 'Monaco di Baviera · luglio 2025',
  },
  {
    id: 'r3',
    testo: 'Gommone pulito, equipaggio simpatico, soste nei posti giusti al momento giusto per evitare la folla. Rifaremmo tutto.',
    autore: 'Alessia e Marco',
    provenienza: 'Roma · settembre 2025',
  },
]

export const riepilogoRecensioni = {
  voto: 4.9,
  totale: 312,
}
