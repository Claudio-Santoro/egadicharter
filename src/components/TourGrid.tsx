import { Tour } from '../data/tours'
import Section, { SectionIntro } from './Section'
import TourCard from './TourCard'
import styles from './TourGrid.module.css'

type Props = {
  tours: Tour[]
}

export default function TourGrid({ tours }: Props) {
  return (
    <Section id="escursioni">
      <SectionIntro
        titolo="Le nostre giornate in mare"
        testo="Cinque modi di vedere le Egadi. Tutte le escursioni partono dalla Marina di Trapani e rientrano prima del tramonto, tranne l'aperitivo."
      />
      <div className={styles.griglia}>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </Section>
  )
}
