import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useT } from '../i18n'
import styles from './Slideshow.module.css'

export type Foto = { src: string; alt: string }

type Props = {
  foto: Foto[]
  label: string
  /** ms fra una foto e l'altra; assente = niente autoplay */
  autoplayMs?: number
  /** view-transition-name della prima foto (arrivo dalla card di un tour) */
  vtPrima?: string
  className?: string
}

const SOGLIA_SWIPE_PX = 40
const pad = (n: number) => String(n).padStart(2, '0')

/** rapporto, raggio e maschera si impostano dal consumer con `--ratio` (default 4 / 3), `--raggio` (default var(--r)) e `--maschera` (default none) sulla className */
export default function Slideshow({ foto, label, autoplayMs, vtPrima, className }: Props) {
  const [attiva, setAttiva] = useState(0)
  const [inPausa, setInPausa] = useState(false)
  const [ridotte, setRidotte] = useState(false)
  const touchX = useRef<number | null>(null)
  const n = foto.length
  const t = useT().slideshow
  const autoplay = !!autoplayMs && n > 1 && !inPausa && !ridotte

  useEffect(() => setRidotte(matchMedia('(prefers-reduced-motion: reduce)').matches), [])

  // un timeout per foto: ogni cambio (anche a mano) riparte da zero, insieme alla barra
  useEffect(() => {
    if (!autoplay) return
    const id = window.setTimeout(() => setAttiva((i) => (i + 1) % n), autoplayMs)
    return () => window.clearTimeout(id)
  }, [autoplay, autoplayMs, attiva, n])

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
      aria-roledescription={t.carosello}
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
            {...{ fetchpriority: i === 0 ? 'high' : 'auto' }}
            style={i === 0 && vtPrima ? { viewTransitionName: vtPrima } : undefined}
          />
        ))}
      </div>
      {n > 1 && (
        <div className={styles.comandi}>
          <span className={styles.contatore} aria-hidden="true"><b>{pad(attiva + 1)}</b> / {pad(n)}</span>
          <span className={styles.barra} aria-hidden="true">
            {autoplay ? (
              // key: la barra riparte a ogni foto
              <i key={attiva} className={styles.corre} style={{ '--ms': `${autoplayMs}ms` } as CSSProperties} />
            ) : (
              <i style={{ transform: `scaleX(${(attiva + 1) / n})` }} />
            )}
          </span>
          <button type="button" className={styles.freccia} onClick={() => vai(attiva - 1)} aria-label={t.precedente}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" className={styles.freccia} onClick={() => vai(attiva + 1)} aria-label={t.successiva}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
