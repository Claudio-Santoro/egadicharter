import { toursCondivisi } from './tours.condivisi'
import { toursPrivati } from './tours.privati'

export type { Tour, UnitaPrezzo, TipoTour } from './tour-types'
import type { Tour } from './tour-types'

export const tours: Tour[] = [...toursCondivisi, ...toursPrivati]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}
