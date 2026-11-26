import { flushSync } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { Tour } from '../data/tours'
import { lp, useLang, useT } from '../i18n'
import styles from './TourCard.module.css'

type Props = {
  tour: Tour
  /** da 900px foto a sinistra e testo a destra: per i privati, che nel carosello hanno mezza riga */
  largo?: boolean
}

/** nome condiviso con la prima foto della galleria in TourDetail: la foto "vola" dalla card alla pagina */
export const VT_FOTO = 'foto-tour'

export default function TourCard({ tour, largo }: Props) {
  const isPrivato = tour.tipo === 'privato'
  const { comune, tourCard } = useT()
  const lang = useLang()
  const navigate = useNavigate()
  const to = lp(`/escursioni/${tour.slug}`, lang)

  // View Transitions dove ci sono (Chrome, Safari 18+, Firefox 144+); altrove il link normale
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    e.preventDefault()
    const foto = e.currentTarget.closest('article')?.querySelector('img')
    if (foto) foto.style.viewTransitionName = VT_FOTO
    document.startViewTransition(() => {
      if (foto) foto.style.viewTransitionName = ''
      flushSync(() => navigate(to))
      window.scrollTo(0, 0)
    })
  }

  return (
    <article className={`${styles.tour} ${largo ? styles.largo : ''}`}>
      <div className={styles.foto}>
        <img
          src={tour.immagine}
          alt={tourCard.alt(tour.titolo)}
          loading="lazy"
          width="400"
          height="300"
        />
        {isPrivato && <span className={styles.tag}>{comune.tourPrivato}</span>}
      </div>
      <div className={styles.corpo}>
        <h3>
          {/* ponytail: link "stirato" con ::after, rende cliccabile tutta la card senza annidare <a> */}
          <Link to={to} className={styles.link} onClick={onClick}>{tour.titolo}</Link>
        </h3>
        <p>{tour.descrizioneBreve}</p>
        <div className={styles.meta}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            {tour.durata}
          </span>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /></svg>
            {tourCard.max(tour.maxPersone)}
          </span>
        </div>
        <div className={styles.piede}>
          <span className={styles.prezzo}>
            <small>{comune.da}</small>
            <b>€{tour.prezzoDa}</b>
            <small>{comune.unita[tour.unitaPrezzo]}</small>
          </span>
          <span className={styles.vai} aria-hidden="true">
            {isPrivato ? tourCard.richiediPreventivo : tourCard.prenota}
            <i>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </i>
          </span>
        </div>
      </div>
    </article>
  )
}
