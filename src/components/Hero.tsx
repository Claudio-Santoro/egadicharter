import { site } from '../data/site'
import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  // video solo su mobile: scelto prima del primo render, così il desktop non scarica il video e il mobile non scarica la foto
  const video = matchMedia('(max-width: 599px) and (prefers-reduced-motion: no-preference)').matches

  const waHref = `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent('Ciao! Vorrei avere informazioni sulle escursioni.')}`

  return (
    <section className={styles.hero}>
      <div className={styles.scena}>
        {video ? (
          <video src="/videos/hero-mobile.mp4" poster="/videos/hero-mobile.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        ) : (
          <img
            src="/images/hero.jpg"
            alt="Mare turchese visto dall'alto con barche e yacht all'ancora"
            loading="eager"
            fetchPriority="high"
            width="1600"
            height="1067"
          />
        )}
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
