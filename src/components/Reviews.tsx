import { Review } from '../data/reviews'
import Section, { SectionIntro } from './Section'
import styles from './Reviews.module.css'

type Props = {
  reviews: Review[]
  voto: number
  totale: number
}

export default function Reviews({ reviews, voto, totale }: Props) {
  return (
    <Section sabbia>
      <SectionIntro
        titolo="Chi è già salito a bordo"
        testo={`${voto.toString().replace('.', ',')} su 5 su ${totale} recensioni fra Google e TripAdvisor.`}
      />
      <div className={styles.recensioni}>
        {reviews.map((r) => (
          <blockquote className={styles.recensione} key={r.id}>
            <div className={styles.stelle} aria-label="5 stelle su 5">★★★★★</div>
            <p>{r.testo}</p>
            <footer>
              {r.autore}
              <small>{r.provenienza}</small>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
