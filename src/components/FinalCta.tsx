import { site } from '../data/site'
import Button from './Button'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  const waHref = `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent('Ciao! Vorrei prenotare un\'escursione.')}`

  return (
    <section className={styles.finale} id="contatti">
      <img
        className={styles.sfondo}
        src="/images/finale-tramonto.jpg"
        alt="Tramonto visto dal mare davanti alle Egadi"
        loading="lazy"
        width="1440"
        height="520"
      />
      <span className={styles.velo} />
      <div className={`wrap ${styles.in}`}>
        <h2>{site.ctaFinale.titolo}</h2>
        <p>{site.ctaFinale.testo}</p>
        <div className={styles.cta}>
          <Button href={waHref} variante="primario">Scrivici su WhatsApp</Button>
          <Button href={site.telefonoHref} variante="chiaro">{site.telefono}</Button>
        </div>
      </div>
    </section>
  )
}
