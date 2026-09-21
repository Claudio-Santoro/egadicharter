export type UnitaPrezzo = 'a persona' | 'a gommone'
export type TipoTour = 'condiviso' | 'privato'

export type Tour = {
  id: string
  slug: string
  titolo: string
  descrizioneBreve: string
  descrizioneLunga: string
  prezzoDa: number
  unitaPrezzo: UnitaPrezzo
  durata: string
  maxPersone: number
  tipo: TipoTour
  immagine: string
  galleria: string[]
  incluso: string[]
  nonIncluso: string[]
  itinerario: string[]
  orarioPartenza: string
}

export const inclusoStandard = [
  'Carburante',
  'Skipper',
  'Pranzo a bordo',
  'Acqua e bibite',
  'Maschere e boccagli',
  'Ombreggiatura',
  'Assicurazione',
]

export const nonInclusoStandard = [
  'Tasse di sbarco a Favignana',
  'Ingresso alla Grotta del Genovese',
]
