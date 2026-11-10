import { useTours } from '../data/tours'
import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import TourCard from './TourCard'
import styles from './TourGrid.module.css'

export default function TourGrid() {
  const { tourGrid } = useT()
  const tours = useTours()
  const gruppi = [
    { titolo: tourGrid.condivisi, tours: tours.filter((t) => t.tipo === 'condiviso') },
    { titolo: tourGrid.privati, tours: tours.filter((t) => t.tipo === 'privato') },
  ]
  return (
    <Section id="escursioni">
      <SectionIntro titolo={tourGrid.titolo} testo={tourGrid.testo} />
      {gruppi.map((g) => (
        <div key={g.titolo} className={styles.gruppo}>
          <h3 className={styles.sottotitolo}>{g.titolo}</h3>
          <div className={styles.carosello}>
            {g.tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
