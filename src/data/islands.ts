export type Island = {
  id: string
  nome: string
  descrizione: string
  immagine: string
  cale: string[]
}

export const islands: Island[] = [
  {
    id: 'i1',
    nome: 'Favignana',
    descrizione: "L'isola a forma di farfalla, con le cave di tufo che scendono dritte nell'acqua e il fondale che si vede a sei metri.",
    immagine: '/images/isola-favignana.jpg',
    cale: ['Cala Rossa', 'Cala Azzurra', 'Bue Marino', 'Lido Burrone'],
  },
  {
    id: 'i2',
    nome: 'Levanzo',
    descrizione: 'Trenta case bianche intorno a un porticciolo, una strada sola e la Grotta del Genovese con i disegni preistorici.',
    immagine: '/images/isola-levanzo.jpg',
    cale: ['Cala Minnola', 'Faraglione', 'Cala Fredda'],
  },
]
