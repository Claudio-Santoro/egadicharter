import { useEffect, useRef, useState } from 'react'
import { islands } from '../data/islands'
import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import styles from './IslandCards.module.css'

// parte solo quando la card è visibile: i video pesano e non vanno scaricati se nessuno arriva qui
function VideoIsola({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const osservatore = new IntersectionObserver(([voce]) => {
      if (voce.isIntersecting) video.play().catch(() => {})
      else video.pause()
    })
    osservatore.observe(video)
    return () => osservatore.disconnect()
  }, [])

  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-hidden="true" />
}

export default function IslandCards() {
  const t = useT().isole
  // letto dopo l'hydration: l'HTML prerenderizzato non conosce le preferenze dell'utente
  const [animazioniRidotte, setAnimazioniRidotte] = useState(false)
  useEffect(() => setAnimazioniRidotte(matchMedia('(prefers-reduced-motion: reduce)').matches), [])

  return (
    <Section id="isole" sabbia>
      <SectionIntro titolo={t.titolo} testo={t.testo} />
      <div className={styles.destinazioni}>
        {islands.map((isola) => (
          <div className={styles.isola} key={isola.id}>
            {isola.video && !animazioniRidotte ? (
              <VideoIsola src={isola.video} poster={isola.poster} />
            ) : (
              <img
                src={isola.immagine}
                alt={t[isola.id].alt}
                loading="lazy"
                width="700"
                height="520"
              />
            )}
            <div className={styles.testo}>
              <h3>{isola.nome}</h3>
              <p>{t[isola.id].descrizione}</p>
              <div className={styles.cale}>
                {isola.cale.map((cala) => <i key={cala}>{cala}</i>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
