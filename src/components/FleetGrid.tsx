import { useEffect, useState } from 'react'
import { fleet } from '../data/boats'
import Section, { SectionIntro } from './Section'
import styles from './FleetGrid.module.css'

const INTERVALLO_MS = 4500

export default function FleetGrid() {
  const [attiva, setAttiva] = useState(0)
  const [inPausa, setInPausa] = useState(false)
  const n = fleet.foto.length

  useEffect(() => {
    if (inPausa || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setAttiva((i) => (i + 1) % n), INTERVALLO_MS)
    return () => window.clearInterval(id)
  }, [inPausa, n])

  const vai = (i: number) => setAttiva((i + n) % n)

  return (
    <Section id="flotta">
      <SectionIntro titolo="La flotta" testo={`Due gommoni ${fleet.modello}, identici e curati in ogni dettaglio.`} />
      <div className={styles.flotta}>
        <div
          className={styles.slideshow}
          role="region"
          aria-roledescription="carosello"
          aria-label={`Foto del gommone ${fleet.modello}`}
          onMouseEnter={() => setInPausa(true)}
          onMouseLeave={() => setInPausa(false)}
          onFocus={() => setInPausa(true)}
          onBlur={() => setInPausa(false)}
        >
          <div className={styles.cornice}>
            {fleet.foto.map((f, i) => (
              <img
                key={f.src}
                className={i === attiva ? `${styles.slide} ${styles.attiva}` : styles.slide}
                src={f.src}
                alt={f.alt}
                aria-hidden={i !== attiva}
                loading={i === 0 ? 'eager' : 'lazy'}
                width="1000"
                height="1250"
              />
            ))}
            <button type="button" className={`${styles.freccia} ${styles.prec}`} onClick={() => vai(attiva - 1)} aria-label="Foto precedente">‹</button>
            <button type="button" className={`${styles.freccia} ${styles.succ}`} onClick={() => vai(attiva + 1)} aria-label="Foto successiva">›</button>
          </div>
          <div className={styles.punti}>
            {fleet.foto.map((f, i) => (
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
        </div>

        <div className={styles.corpo}>
          <h3>Breva 800</h3>
          <p>{fleet.descrizione}</p>
          <div className={styles.specifiche}>
            {fleet.specifiche.map((s) => (
              <span key={s.label}><b>{s.valore}</b> {s.label}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
