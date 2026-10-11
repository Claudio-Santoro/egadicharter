import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { caricaPrevisioni, type Giorno } from '../data/meteo'
import Button from './Button'
import styles from './FinalCta.module.css'

const waLink = (testo: string) => `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(testo)}`

// Mezzogiorno per non scivolare di giorno con il fuso.
const giornoIt = (data: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${data}T12:00:00`).toLocaleDateString('it-IT', opts)

const ETICHETTA = { perfetto: 'Giorno ideale', buono: 'Buono', sconsigliato: 'Mare mosso' }
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

export default function FinalCta() {
  const giorni = usePrevisioni()
  const domani = giorni?.[1]
  const titolo = domani ? site.ctaFinale.titoloMeteo[domani.stato] : site.ctaFinale.titolo

  return (
    <section className={styles.finale} id="contatti">
      <img
        className={styles.sfondo}
        src="/images/finale-tramonto.jpg"
        alt="Tramonto visto dal mare davanti alle Egadi"
        loading="lazy"
        width="1440"
        height="520"
      />
      <span className={styles.velo} />
      <div className={`wrap ${styles.in}`}>
        <h2>{titolo}</h2>
        <p>{site.ctaFinale.testo}</p>

        {giorni && (
          <div className={styles.meteo}>
            <p className={styles.meteoTitolo}>Mare nei prossimi 7 giorni</p>
            <ul className={styles.giorni}>
              {giorni.map(g => {
                const contenuto = (
                  <>
                    <span className={styles.data}>{giornoIt(g.data, { weekday: 'short', day: 'numeric' })}</span>
                    <span className={styles.stato}><span aria-hidden="true">{ICONA[g.stato]}</span> {ETICHETTA[g.stato]}</span>
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
                        href={waLink(`Ciao! Vorrei prenotare per ${giornoIt(g.data, { weekday: 'long', day: 'numeric', month: 'long' })}.`)}
                        aria-label={`Prenota ${giornoIt(g.data, { weekday: 'long', day: 'numeric', month: 'long' })}, ${ETICHETTA[g.stato]}, su WhatsApp`}
                      >
                        {contenuto}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className={styles.fonte}>
              Previsioni <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>, aggiornate ogni ora. Onda massima e vento in nodi.
            </p>
          </div>
        )}

        <div className={styles.cta}>
          <Button href={waLink('Ciao! Vorrei prenotare un\'escursione.')} variante="primario">Scrivici su WhatsApp</Button>
          <Button href={site.telefonoHref} variante="chiaro">{site.telefono}</Button>
        </div>
      </div>
    </section>
  )
}
