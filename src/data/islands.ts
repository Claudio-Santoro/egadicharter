// Testi (descrizione, alt) in src/i18n/<lingua>.tsx → islands[id]
export type Island = {
  id: 'favignana' | 'levanzo'
  nome: string
  immagine: string
  /** facoltativo: video in loop al posto della foto (la foto resta per chi riduce le animazioni) */
  video?: string
  poster?: string
  cale: string[]
}

export const islands: Island[] = [
  {
    id: 'favignana',
    nome: 'Favignana',
    immagine: '/images/isola-favignana.jpg',
    video: '/videos/favignana.mp4',
    poster: '/videos/favignana.jpg',
    cale: ['Cala Rossa', 'Cala Azzurra', 'Bue Marino', 'Lido Burrone'],
  },
  {
    id: 'levanzo',
    nome: 'Levanzo',
    immagine: '/images/isola-levanzo.jpg',
    video: '/videos/hero-mobile.mp4',
    poster: '/videos/hero-mobile.jpg',
    cale: ['Cala Minnola', 'Faraglione', 'Cala Fredda'],
  },
]
