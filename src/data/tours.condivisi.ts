import type { TourBase } from './tour-types'

export const toursCondivisi: TourBase[] = [
  {
    id: 't1',
    slug: 'favignana-levanzo-giornata-intera',
    prezzoDa: 80,
    unitaPrezzo: 'persona',
    maxPersone: 10,
    tipo: 'condiviso',
    immagine: '/images/tour-favignana-levanzo.jpg',
    galleria: ['/images/tour-favignana-levanzo.jpg', '/images/isola-favignana.jpg', '/images/isola-levanzo.jpg'],
    orarioPartenza: '10:00',
  },
  {
    id: 't2',
    slug: 'favignana-mezza-giornata',
    prezzoDa: 50,
    unitaPrezzo: 'persona',
    maxPersone: 10,
    tipo: 'condiviso',
    immagine: '/images/tour-favignana-mezza-giornata.jpg',
    galleria: ['/images/tour-favignana-mezza-giornata.jpg', '/images/isola-favignana.jpg'],
    orarioPartenza: '10:00',
  },
  {
    id: 't4',
    slug: 'aperitivo-al-tramonto',
    prezzoDa: 45,
    unitaPrezzo: 'persona',
    maxPersone: 10,
    tipo: 'condiviso',
    immagine: '/images/tour-aperitivo-tramonto.jpg',
    galleria: ['/images/tour-aperitivo-tramonto.jpg'],
    orarioPartenza: '18:00',
  },
]
