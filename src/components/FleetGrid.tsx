import { fleet } from '../data/boats'
import Section, { SectionIntro } from './Section'
import Slideshow from './Slideshow'
import styles from './FleetGrid.module.css'

const INTERVALLO_MS = 4500

export default function FleetGrid() {
  return (
    <Section id="flotta">
      <SectionIntro titolo="La flotta" testo={`Due gommoni ${fleet.modello}, identici e curati in ogni dettaglio.`} />
      <div className={styles.flotta}>
        <Slideshow
          className={styles.slideshow}
          foto={fleet.foto}
          label={`Foto del gommone ${fleet.modello}`}
          autoplayMs={INTERVALLO_MS}
        />

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
