import { useEffect, useRef } from 'react'
import { Island } from '../data/islands'
import Section, { SectionIntro } from './Section'
import styles from './IslandCards.module.css'

type Props = {
  islands: Island[]
}

const animazioniRidotte = matchMedia('(prefers-reduced-motion: reduce)').matches

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

export default function IslandCards({ islands }: Props) {
  return (
    <Section id="isole" sabbia>
      <SectionIntro
        titolo="Dove andiamo"
        testo="Due isole a mezz'ora di navigazione da Trapani, diversissime tra loro."
      />
      <div className={styles.destinazioni}>
        {islands.map((isola) => (
          <div className={styles.isola} key={isola.id}>
            {isola.video && !animazioniRidotte ? (
              <VideoIsola src={isola.video} poster={isola.poster} />
            ) : (
              <img
                src={isola.immagine}
                alt={isola.alt ?? `Vista dell'isola di ${isola.nome}`}
                loading="lazy"
                width="700"
                height="520"
              />
            )}
            <div className={styles.testo}>
              <h3>{isola.nome}</h3>
              <p>{isola.descrizione}</p>
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
