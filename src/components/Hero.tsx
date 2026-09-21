import { site } from '../data/site'
import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  const waHref = `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent('Ciao! Vorrei avere informazioni sulle escursioni.')}`

  return (
    <section className={styles.hero}>
      <div className={styles.scena}>
        <img
          src="/images/hero.jpg"
          alt="Barca in mare aperto davanti alla costa di Favignana al tramonto"
          loading="eager"
          fetchPriority="high"
          width="1440"
          height="820"
        />
      </div>
      <div className={styles.velo} />
      <div className={`wrap ${styles.in}`}>
        <h1>{site.hero.titolo}</h1>
        <p>{site.hero.testo}</p>
        <div className={styles.cta}>
          <Button href="/#escursioni" variante="primario">Vedi le escursioni</Button>
          <Button href={waHref} variante="chiaro">Scrivici su WhatsApp</Button>
        </div>
      </div>
    </section>
  )
}
