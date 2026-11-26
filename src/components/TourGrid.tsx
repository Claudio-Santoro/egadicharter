import { useEffect, useRef, useState } from 'react'
import { useTours } from '../data/tours'
import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import TourCard from './TourCard'
import styles from './TourGrid.module.css'

/** frecce per chi usa il mouse; tastiera e touch scorrono già il carosello, quindi restano fuori dal tab e dagli screen reader */
function Carosello({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [stato, setStato] = useState({ scorre: false, inizio: true, fine: false })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const aggiorna = () => setStato({
      scorre: el.scrollWidth > el.clientWidth + 4,
      inizio: el.scrollLeft < 8,
      fine: el.scrollLeft + el.clientWidth > el.scrollWidth - 8,
    })
    aggiorna()
    el.addEventListener('scroll', aggiorna, { passive: true })
    window.addEventListener('resize', aggiorna)
    return () => {
      el.removeEventListener('scroll', aggiorna)
      window.removeEventListener('resize', aggiorna)
    }
  }, [])

  const scorri = (verso: number) => {
    const el = ref.current
    const card = el?.firstElementChild as HTMLElement | null
    if (el && card) el.scrollBy({ left: verso * (card.offsetWidth + 24), behavior: 'smooth' })
  }

  return (
    <>
      {stato.scorre && (
        <div className={styles.frecce} aria-hidden="true">
          <button type="button" tabIndex={-1} disabled={stato.inizio} onClick={() => scorri(-1)}>
            <svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" tabIndex={-1} disabled={stato.fine} onClick={() => scorri(1)}>
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
      <div className={styles.carosello} ref={ref}>{children}</div>
    </>
  )
}

export default function TourGrid() {
  const { tourGrid } = useT()
  const tours = useTours()
  const gruppi = [
    { titolo: tourGrid.condivisi, privati: false, tours: tours.filter((t) => t.tipo === 'condiviso') },
    { titolo: tourGrid.privati, privati: true, tours: tours.filter((t) => t.tipo === 'privato') },
  ]
  return (
    <Section id="escursioni">
      <SectionIntro titolo={tourGrid.titolo} testo={tourGrid.testo} affiancato />
      {gruppi.map((g) => (
        <div key={g.titolo} className={`${styles.gruppo} ${g.privati ? styles.privati : ''}`}>
          <h3 className={styles.sottotitolo}>{g.titolo}</h3>
          <Carosello>
            {g.tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} largo={g.privati} />
            ))}
          </Carosello>
        </div>
      ))}
    </Section>
  )
}
