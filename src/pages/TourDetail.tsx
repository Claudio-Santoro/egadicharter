import { Navigate, useParams } from 'react-router-dom'
import { getTourBySlug, tours } from '../data/tours'
import { site } from '../data/site'
import Section, { SectionIntro } from '../components/Section'
import TourCard from '../components/TourCard'
import Button from '../components/Button'
import Slideshow from '../components/Slideshow'
import styles from './TourDetail.module.css'

export default function TourDetail() {
  const { slug } = useParams()
  const tour = slug ? getTourBySlug(slug) : undefined

  if (!tour) {
    return <Navigate to="/" replace />
  }

  const waHref = `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(
    `Ciao! Vorrei prenotare: ${tour.titolo}.`
  )}`
  const altreEscursioni = tours.filter((t) => t.id !== tour.id).slice(0, 3)

  return (
    <div className={styles.pagina}>
      <Slideshow
        className={styles.galleria}
        foto={tour.galleria.map((src, i) => ({ src, alt: i === 0 ? `Foto principale di ${tour.titolo}` : `Foto ${i + 1} di ${tour.titolo}` }))}
        label={`Foto di ${tour.titolo}`}
      />

      <div className={`wrap ${styles.corpo}`}>
        <div className={styles.contenuto}>
          <span className={`${styles.tag} ${tour.tipo === 'privato' ? styles.tagPrivato : ''}`}>
            {tour.tipo === 'privato' ? 'Tour privato' : 'Tour condiviso'}
          </span>
          <h1>{tour.titolo}</h1>
          <p className={styles.descrizione}>{tour.descrizioneLunga}</p>

          <div className={styles.blocco}>
            <h2>Itinerario</h2>
            <ol className={styles.itinerario}>
              {tour.itinerario.map((tappa) => <li key={tappa}>{tappa}</li>)}
            </ol>
          </div>

          <div className={styles.listeIncluso}>
            <div className={styles.blocco}>
              <h2>Incluso</h2>
              <ul className={styles.lista}>
                {tour.incluso.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </div>
            {tour.nonIncluso.length > 0 && (
              <div className={styles.blocco}>
                <h2>Non incluso</h2>
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
              <small>da</small>
              <b>€{tour.prezzoDa}</b>
              <small>{tour.unitaPrezzo}</small>
            </div>
            <div className={styles.meta}>
              <span>{tour.durata}</span>
              <span>max {tour.maxPersone} persone</span>
              <span>Partenza {tour.orarioPartenza}</span>
            </div>
            <div className={styles.azioni}>
              <Button href={waHref} variante="primario">Scrivici su WhatsApp</Button>
              <Button href={site.telefonoHref} variante="linea">Chiama</Button>
            </div>
          </div>
        </aside>
      </div>

      <Section>
        <SectionIntro titolo="Altre escursioni" />
        <div className={styles.altre}>
          {altreEscursioni.map((t) => <TourCard key={t.id} tour={t} />)}
        </div>
      </Section>
    </div>
  )
}
