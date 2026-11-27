import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react'
import { site, waLink } from '../data/site'
import { LOCALE, useLang, useT } from '../i18n'
import { usePrevisioni } from '../data/meteo'
import Button from './Button'
import styles from './FinalCta.module.css'

// Mezzogiorno per non scivolare di giorno con il fuso.
const giorno = (data: string, locale: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${data}T12:00:00`).toLocaleDateString(locale, opts)
const LUNGO: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }

// icone disegnate, stesso tratto delle altre del sito
const ICONA = {
  perfetto: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  buono: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  sconsigliato: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
}

// icone dei valori: onda massima e vento
const ONDA = <path d="M2 12c2.5-2.5 4.5-2.5 7 0s4.5 2.5 7 0 4.5-2.5 6 0M2 18c2.5-2.5 4.5-2.5 7 0s4.5 2.5 7 0 4.5-2.5 6 0" />
const VENTO = <path d="M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2" />

/** onda massima che riempie la barra: oltre i 2 m il gommone resta comunque in porto */
const ONDA_PIENA_M = 2

/** mare mosso "forte" (barra rossa invece che arancione): da tarare con lo skipper, come le soglie in meteo.ts */
const FORTE = { onda: 1.5, vento: 20 }

// le barre crescono una volta, quando la striscia entra nello schermo
function useVisto(ref: RefObject<HTMLElement>, pronto: boolean) {
  const [visto, setVisto] = useState(false)
  useEffect(() => {
    if (!pronto || !ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisto(true); io.disconnect() } }, { threshold: .4 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [ref, pronto])
  return visto
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
  const striscia = useRef<HTMLDivElement>(null)
  const video = useVideo(sezione)
  const visto = useVisto(striscia, !!giorni)
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
          <div className={`${styles.meteo} ${visto ? styles.visto : ''}`} ref={striscia}>
            <p className={styles.meteoTitolo}>{t.meteoTitolo}</p>
            <ul className={styles.giorni}>
              {giorni.map((g, i) => {
                const altezza = g.onda == null ? 0 : Math.min(1, Math.max(.06, g.onda / ONDA_PIENA_M))
                const contenuto = (
                  <>
                    <span className={styles.data}>{giorno(g.data, locale, { weekday: 'short', day: 'numeric' })}</span>
                    <span className={styles.onda} aria-hidden="true">
                      <i style={{ '--h': altezza, '--i': i } as CSSProperties} />
                    </span>
                    <span className={styles.stato}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">{ICONA[g.stato]}</svg>
                      {t.etichetta[g.stato]}
                    </span>
                    <span className={styles.valori}>
                      {g.onda != null && (
                        <span><svg viewBox="0 0 24 24" aria-hidden="true">{ONDA}</svg>{g.onda.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} m</span>
                      )}
                      {g.vento != null && (
                        <span><svg viewBox="0 0 24 24" aria-hidden="true">{VENTO}</svg>{Math.round(g.vento)} kn</span>
                      )}
                    </span>
                  </>
                )
                return (
                  <li key={g.data}>
                    {g.stato === 'sconsigliato' ? (
                      <span className={`${styles.giorno} ${styles.sconsigliato} ${(g.onda ?? 0) >= FORTE.onda || (g.vento ?? 0) >= FORTE.vento ? styles.forte : ''}`}>{contenuto}</span>
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
