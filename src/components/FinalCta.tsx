import { useEffect, useRef, useState, type RefObject } from 'react'
import { site, waLink } from '../data/site'
import { LOCALE, useLang, useT } from '../i18n'
import { caricaPrevisioni, type Giorno } from '../data/meteo'
import Button from './Button'
import styles from './FinalCta.module.css'

// Mezzogiorno per non scivolare di giorno con il fuso.
const giorno = (data: string, locale: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${data}T12:00:00`).toLocaleDateString(locale, opts)
const LUNGO: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }

const ICONA = { perfetto: '☀', buono: '✓', sconsigliato: '✕' }

function usePrevisioni() {
  const [giorni, setGiorni] = useState<Giorno[] | null>(null)
  useEffect(() => {
    const ctrl = new AbortController()
    const timeout = setTimeout(() => ctrl.abort(), 5000)
    caricaPrevisioni(ctrl.signal)
      .then(setGiorni)
      .catch(() => { /* fallback: titolo statico, niente chip */ })
      .finally(() => clearTimeout(timeout))
    return () => { clearTimeout(timeout); ctrl.abort() }
  }, [])
  return giorni
}

// Come nell'hero: nell'HTML prerenderizzato c'è il poster; il video (2,5 MB) parte solo
// quando la sezione si avvicina allo schermo e se non è richiesto il movimento ridotto.
function useVideo(ref: RefObject<HTMLElement>) {
  const [video, setVideo] = useState(false)
  useEffect(() => {
    if (!matchMedia('(prefers-reduced-motion: no-preference)').matches) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVideo(true); io.disconnect() } }, { rootMargin: '300px' })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [ref])
  return video
}

export default function FinalCta() {
  const giorni = usePrevisioni()
  const sezione = useRef<HTMLElement>(null)
  const video = useVideo(sezione)
  const { finale: t, comune } = useT()
  const locale = LOCALE[useLang()]
  const domani = giorni?.[1]
  const titolo = domani ? t.titoloMeteo[domani.stato] : t.titolo

  return (
    <section className={styles.finale} id="contatti" ref={sezione}>
      {video ? (
        <video className={styles.sfondo} src="/videos/finale.mp4" poster="/videos/finale.jpg" autoPlay muted loop playsInline aria-hidden="true" />
      ) : (
        <img className={styles.sfondo} src="/videos/finale.jpg" alt={t.alt} loading="lazy" width="1280" height="720" />
      )}
      <span className={styles.velo} />
      <div className={`wrap ${styles.in}`}>
        <h2>{titolo}</h2>
        <p>{t.testo}</p>

        {giorni && (
          <div className={styles.meteo}>
            <p className={styles.meteoTitolo}>{t.meteoTitolo}</p>
            <ul className={styles.giorni}>
              {giorni.map(g => {
                const contenuto = (
                  <>
                    <span className={styles.data}>{giorno(g.data, locale, { weekday: 'short', day: 'numeric' })}</span>
                    <span className={styles.stato}><span aria-hidden="true">{ICONA[g.stato]}</span> {t.etichetta[g.stato]}</span>
                    <span className={styles.valori}>
                      {g.onda != null && `${g.onda.toFixed(1)} m`}
                      {g.vento != null && ` · ${Math.round(g.vento)} kn`}
                    </span>
                  </>
                )
                return (
                  <li key={g.data}>
                    {g.stato === 'sconsigliato' ? (
                      <span className={`${styles.giorno} ${styles.sconsigliato}`}>{contenuto}</span>
                    ) : (
                      <a
                        className={`${styles.giorno} ${styles[g.stato]}`}
                        href={waLink(t.waGiorno(giorno(g.data, locale, LUNGO)))}
                        aria-label={t.ariaGiorno(giorno(g.data, locale, LUNGO), t.etichetta[g.stato])}
                      >
                        {contenuto}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className={styles.fonte}>
              {t.fonte}
            </p>
          </div>
        )}

        <div className={styles.cta}>
          <Button href={waLink(t.waPrenota)} variante="primario">{comune.scriviciWa}</Button>
          <Button href={site.telefonoHref} variante="chiaro">{site.telefono}</Button>
        </div>
      </div>
    </section>
  )
}
