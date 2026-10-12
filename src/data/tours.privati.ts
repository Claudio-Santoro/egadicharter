import type { TourBase } from './tour-types'

export const toursPrivati: TourBase[] = [
  {
    id: 't5',
    slug: 'charter-privato-egadi',
    prezzoDa: 900,
    unitaPrezzo: 'gommone',
    maxPersone: 10,
    tipo: 'privato',
    immagine: '/images/tour-charter-privato.jpg',
    galleria: ['/images/tour-charter-privato.jpg'],
    orarioPartenza: null,
  },
  {
    id: 't6',
    slug: 'mezza-giornata-privata',
    prezzoDa: 450,
    unitaPrezzo: 'gommone',
    maxPersone: 10,
    tipo: 'privato',
    immagine: '/images/tour-mezza-giornata-privata.jpg',
    galleria: ['/images/tour-mezza-giornata-privata.jpg', '/images/flotta-4.jpg'],
    orarioPartenza: null,
  },
]
