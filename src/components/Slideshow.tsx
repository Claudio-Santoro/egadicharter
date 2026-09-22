import { useEffect, useRef, useState } from 'react'
import { Foto } from '../data/boats'
import styles from './Slideshow.module.css'

type Props = {
  foto: Foto[]
  label: string
  /** ms fra una foto e l'altra; assente = niente autoplay */
  autoplayMs?: number
  className?: string
}

const SOGLIA_SWIPE_PX = 40

/** rapporto e raggio si impostano dal consumer con `--ratio` (default 4 / 3) e `--raggio` (default var(--r)) sulla className */
export default function Slideshow({ foto, label, autoplayMs, className }: Props) {
  const [attiva, setAttiva] = useState(0)
  const [inPausa, setInPausa] = useState(false)
  const touchX = useRef<number | null>(null)
  const n = foto.length

  useEffect(() => {
    if (!autoplayMs || n < 2 || inPausa || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setAttiva((i) => (i + 1) % n), autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, inPausa, n])

  const vai = (i: number) => setAttiva((i + n) % n)

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) >= SOGLIA_SWIPE_PX) vai(dx < 0 ? attiva + 1 : attiva - 1)
  }

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carosello"
      aria-label={label}
      onMouseEnter={() => setInPausa(true)}
      onMouseLeave={() => setInPausa(false)}
      onFocus={() => setInPausa(true)}
      onBlur={() => setInPausa(false)}
    >
      <div
        className={styles.cornice}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={onTouchEnd}
      >
        {foto.map((f, i) => (
          <img
            key={f.src}
            className={i === attiva ? `${styles.slide} ${styles.attiva}` : styles.slide}
            src={f.src}
            alt={f.alt}
            aria-hidden={i !== attiva}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        ))}
        {n > 1 && (
          <>
            <button type="button" className={`${styles.freccia} ${styles.prec}`} onClick={() => vai(attiva - 1)} aria-label="Foto precedente">‹</button>
            <button type="button" className={`${styles.freccia} ${styles.succ}`} onClick={() => vai(attiva + 1)} aria-label="Foto successiva">›</button>
          </>
        )}
      </div>
      {n > 1 && (
        <div className={styles.punti}>
          {foto.map((f, i) => (
            <button
              key={f.src}
              type="button"
              className={i === attiva ? `${styles.punto} ${styles.puntoAttivo}` : styles.punto}
              onClick={() => vai(i)}
              aria-label={`Vai alla foto ${i + 1} di ${n}`}
              aria-current={i === attiva}
            />
          ))}
        </div>
      )}
    </div>
  )
}
