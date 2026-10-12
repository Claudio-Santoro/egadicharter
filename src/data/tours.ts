import { toursCondivisi } from './tours.condivisi'
import { toursPrivati } from './tours.privati'
import { dicts, useLang, type Lang } from '../i18n'
import type { Tour } from './tour-types'

export type { Tour, UnitaPrezzo, TipoTour } from './tour-types'

export const toursBase = [...toursCondivisi, ...toursPrivati]

export function getTours(lang: Lang): Tour[] {
  return toursBase.map((t) => {
    const testi = dicts[lang].tours[t.slug as keyof typeof dicts.it.tours]
    // fa fallire il prerender: un'escursione senza testi non arriva in produzione
    if (!testi) throw new Error(`Testi mancanti per l'escursione "${t.slug}" in src/i18n/${lang}.tsx`)
    return { ...t, ...testi }
  })
}

export function useTours(): Tour[] {
  return getTours(useLang())
}
