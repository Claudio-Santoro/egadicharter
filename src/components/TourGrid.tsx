import { useTours } from '../data/tours'
import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import TourCard from './TourCard'
import styles from './TourGrid.module.css'

export default function TourGrid() {
  const { tourGrid } = useT()
  return (
    <Section id="escursioni">
      <SectionIntro titolo={tourGrid.titolo} testo={tourGrid.testo} />
      <div className={styles.griglia}>
        {useTours().map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </Section>
  )
}
