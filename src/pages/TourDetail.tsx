import { useParams } from 'react-router-dom'
import { useTours } from '../data/tours'
import { site, waLink } from '../data/site'
import { useT } from '../i18n'
import Section, { SectionIntro } from '../components/Section'
import TourCard from '../components/TourCard'
import Button from '../components/Button'
import Slideshow from '../components/Slideshow'
import NotFound from './NotFound'
import styles from './TourDetail.module.css'

export default function TourDetail() {
  const { slug } = useParams()
  const { tour: t, comune } = useT()
  const tours = useTours()
  const tour = tours.find((x) => x.slug === slug)

  if (!tour) return <NotFound />

  const altreEscursioni = tours.filter((x) => x.id !== tour.id).slice(0, 3)

  return (
    <div className={styles.pagina}>
      <Slideshow
        className={styles.galleria}
        foto={tour.galleria.map((src, i) => ({ src, alt: i === 0 ? t.fotoPrincipale(tour.titolo) : t.foto(i + 1, tour.titolo) }))}
        label={t.fotoDi(tour.titolo)}
      />

      <div className={`wrap ${styles.corpo}`}>
        <div className={styles.contenuto}>
          <span className={`${styles.tag} ${tour.tipo === 'privato' ? styles.tagPrivato : ''}`}>
            {tour.tipo === 'privato' ? comune.tourPrivato : comune.tourCondiviso}
          </span>
          <h1>{tour.titolo}</h1>
          <p className={styles.descrizione}>{tour.descrizioneLunga}</p>

          <div className={styles.blocco}>
            <h2>{t.itinerario}</h2>
            <ol className={styles.itinerario}>
              {tour.itinerario.map((tappa) => <li key={tappa}>{tappa}</li>)}
            </ol>
          </div>

          <div className={styles.listeIncluso}>
            <div className={styles.blocco}>
              <h2>{t.incluso}</h2>
              <ul className={styles.lista}>
                {tour.incluso.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </div>
            {tour.nonIncluso.length > 0 && (
              <div className={styles.blocco}>
                <h2>{t.nonIncluso}</h2>
                <ul className={styles.lista}>
                  {tour.nonIncluso.map((v) => <li key={v}>{v}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>

        <aside className={styles.riepilogo}>
          <div className={styles.riepilogoIn}>
            <div className={styles.prezzo}>
              <small>{comune.da}</small>
              <b>€{tour.prezzoDa}</b>
              <small>{comune.unita[tour.unitaPrezzo]}</small>
            </div>
            <div className={styles.meta}>
              <span>{tour.durata}</span>
              <span>{t.persone(tour.maxPersone)}</span>
              <span>{t.partenza(tour.orarioPartenza ?? t.aScelta)}</span>
            </div>
            <div className={styles.azioni}>
              <Button href={waLink(t.waPrenota(tour.titolo))} variante="primario">{comune.scriviciWa}</Button>
              <Button href={site.telefonoHref} variante="linea">{t.chiama}</Button>
            </div>
          </div>
        </aside>
      </div>

      <Section>
        <SectionIntro titolo={t.altre} />
        <div className={styles.altre}>
          {altreEscursioni.map((x) => <TourCard key={x.id} tour={x} />)}
        </div>
      </Section>
    </div>
  )
}
