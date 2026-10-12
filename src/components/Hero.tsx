import { useEffect, useState } from 'react'
import { waLink } from '../data/site'
import { lp, useLang, useT } from '../i18n'
import Button from './Button'
import styles from './Hero.module.css'

const MQ_VIDEO = '(max-width: 599px) and (prefers-reduced-motion: no-preference)'

export default function Hero() {
  const { hero, comune } = useT()
  const lang = useLang()
  // L'HTML prerenderizzato non conosce lo schermo: si parte dalla foto (su mobile il poster del video,
  // tramite <picture>) e dopo l'hydration si passa al video solo su mobile.
  const [video, setVideo] = useState(false)
  useEffect(() => setVideo(matchMedia(MQ_VIDEO).matches), [])

  return (
    <section className={styles.hero}>
      <div className={styles.scena}>
        {video ? (
          <video src="/videos/hero-mobile.mp4" poster="/videos/hero-mobile.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        ) : (
          <picture>
            <source media="(max-width: 599px)" srcSet="/videos/hero-mobile.jpg" />
            <img
              src="/images/hero.jpg"
              alt={hero.alt}
              loading="eager"
              fetchPriority="high"
              width="1600"
              height="1067"
            />
          </picture>
        )}
      </div>
      <div className={styles.velo} />
      <div className={`wrap ${styles.in}`}>
        <h1>{hero.titolo}</h1>
        <p>{hero.testo}</p>
        <div className={styles.cta}>
          <Button href={lp('/#escursioni', lang)} variante="primario">{hero.vediEscursioni}</Button>
          <Button href={waLink(comune.waInfo)} variante="chiaro">{comune.scriviciWa}</Button>
        </div>
      </div>
    </section>
  )
}
