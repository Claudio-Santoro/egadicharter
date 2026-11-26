import { Fragment, useEffect, useState, type CSSProperties } from 'react'
import { waLink } from '../data/site'
import { usePrevisioni } from '../data/meteo'
import { LOCALE, lp, useLang, useT } from '../i18n'
import Button from './Button'
import styles from './Hero.module.css'

const MQ_VIDEO = '(max-width: 599px) and (prefers-reduced-motion: no-preference)'

/** il mare di domani dalle previsioni del finale: appare solo se Open-Meteo risponde */
function MareDomani() {
  const domani = usePrevisioni()?.[1]
  const { finale } = useT()
  const locale = LOCALE[useLang()]
  if (!domani) return null
  const valori = [
    domani.onda != null && `${domani.onda.toLocaleString(locale, { maximumFractionDigits: 1, minimumFractionDigits: 1 })} m`,
    domani.vento != null && `${Math.round(domani.vento)} kn`,
  ].filter(Boolean).join(' · ')

  return (
    <a className={`${styles.live} ${styles[domani.stato]}`} href="#contatti">
      <span className={styles.punto} aria-hidden="true" />
      <span>
        <b>{finale.titoloMeteo[domani.stato]}</b> <span className={styles.valori}>{valori}</span>
      </span>
    </a>
  )
}

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
              {...{ fetchpriority: 'high' }}
              width="1600"
              height="1067"
            />
          </picture>
        )}
      </div>
      <div className={styles.velo} />
      <div className={`wrap ${styles.in}`}>
        <div className={styles.entra}><MareDomani /></div>
        {/* parola per parola: ogni parola sale dal bordo della sua riga (solo CSS, già nell'HTML prerenderizzato) */}
        <h1 aria-label={hero.titolo}>
          {hero.titolo.split(' ').map((parola, i) => (
            <Fragment key={i}>
              <span className={styles.parola} aria-hidden="true">
                <span style={{ '--i': i } as CSSProperties}>{parola}</span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>
        <p className={styles.entra} style={{ '--d': 1 } as CSSProperties}>{hero.testo}</p>
        <div className={`${styles.cta} ${styles.entra}`} style={{ '--d': 2 } as CSSProperties}>
          <Button href={lp('/#escursioni', lang)} variante="primario" freccia>{hero.vediEscursioni}</Button>
          <Button href={waLink(comune.waInfo)} variante="chiaro">{comune.scriviciWa}</Button>
        </div>
      </div>
    </section>
  )
}
