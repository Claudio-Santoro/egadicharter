export type UnitaPrezzo = 'persona' | 'gommone'
export type TipoTour = 'condiviso' | 'privato'

/** parte che non cambia con la lingua; i testi sono in src/i18n/<lingua>.tsx → tours[slug] */
export type TourBase = {
  id: string
  slug: string
  prezzoDa: number
  unitaPrezzo: UnitaPrezzo
  maxPersone: number
  tipo: TipoTour
  immagine: string
  galleria: string[]
  /** null = orario a scelta */
  orarioPartenza: string | null
}

export type TourTesti = {
  titolo: string
  /** titolo breve per il footer */
  breve: string
  descrizioneBreve: string
  descrizioneLunga: string
  durata: string
  incluso: string[]
  nonIncluso: string[]
  itinerario: string[]
}

export type Tour = TourBase & TourTesti
