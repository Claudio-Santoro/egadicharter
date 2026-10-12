import { fleet } from '../data/boats'
import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import Slideshow from './Slideshow'
import styles from './FleetGrid.module.css'

const INTERVALLO_MS = 4500

export default function FleetGrid() {
  const t = useT().fleet
  return (
    <Section id="flotta">
      <SectionIntro titolo={t.titolo} testo={t.testo(fleet.modello)} />
      <div className={styles.flotta}>
        <Slideshow
          className={styles.slideshow}
          foto={fleet.foto.map((src, i) => ({ src, alt: t.alt[i] }))}
          label={t.label(fleet.modello)}
          autoplayMs={INTERVALLO_MS}
        />

        <div className={styles.corpo}>
          <h3>{fleet.modello}</h3>
          <p>{t.descrizione}</p>
          <div className={styles.specifiche}>
            {t.specifiche.map((s) => (
              <span key={s.label}><b>{s.valore}</b> {s.label}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
