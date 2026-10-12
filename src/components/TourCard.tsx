import { Tour } from '../data/tours'
import { lp, useLang, useT } from '../i18n'
import Button from './Button'
import styles from './TourCard.module.css'

type Props = {
  tour: Tour
}

export default function TourCard({ tour }: Props) {
  const isPrivato = tour.tipo === 'privato'
  const { comune, tourCard } = useT()
  const lang = useLang()

  return (
    <article className={styles.tour}>
      <div className={styles.foto}>
        <img
          src={tour.immagine}
          alt={tourCard.alt(tour.titolo)}
          loading="lazy"
          width="400"
          height="300"
        />
        <span className={`${styles.tag} ${isPrivato ? styles.tagPrivato : ''}`}>
          {isPrivato ? comune.tourPrivato : comune.tourCondiviso}
        </span>
        <div className={styles.prezzo}>
          <small>{comune.da}</small>
          <b>€{tour.prezzoDa}</b>
          <small>{comune.unita[tour.unitaPrezzo]}</small>
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
            {tourCard.max(tour.maxPersone)}
          </span>
        </div>
        <div className={styles.azione}>
          <Button href={lp(`/escursioni/${tour.slug}`, lang)} className={styles.btn}>
            {isPrivato ? tourCard.richiediPreventivo : tourCard.prenota}
          </Button>
        </div>
      </div>
    </article>
  )
}
