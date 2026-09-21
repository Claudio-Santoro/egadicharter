import { Tour } from '../data/tours'
import Button from './Button'
import styles from './TourCard.module.css'

type Props = {
  tour: Tour
}

export default function TourCard({ tour }: Props) {
  const isPrivato = tour.tipo === 'privato'

  return (
    <article className={styles.tour}>
      <div className={styles.foto}>
        <img
          src={tour.immagine}
          alt={`${tour.titolo} — escursione in gommone alle Egadi`}
          loading="lazy"
          width="400"
          height="300"
        />
        <span className={`${styles.tag} ${isPrivato ? styles.tagPrivato : ''}`}>
          {isPrivato ? 'Tour privato' : 'Tour condiviso'}
        </span>
        <div className={styles.prezzo}>
          <small>da</small>
          <b>€{tour.prezzoDa}</b>
          <small>{tour.unitaPrezzo}</small>
        </div>
      </div>
      <div className={styles.corpo}>
        <h3>{tour.titolo}</h3>
        <p>{tour.descrizioneBreve}</p>
        <div className={styles.meta}>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            {tour.durata}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /></svg>
            max {tour.maxPersone}
          </span>
        </div>
        <div className={styles.azione}>
          <Button href={`/escursioni/${tour.slug}`} className={styles.btn}>
            {isPrivato ? 'Richiedi preventivo' : 'Prenota'}
          </Button>
        </div>
      </div>
    </article>
  )
}
