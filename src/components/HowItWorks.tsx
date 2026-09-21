import { site } from '../data/site'
import Section, { SectionIntro } from './Section'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <Section>
      <SectionIntro
        titolo="Come si prenota"
        testo="Tre passaggi, nessun anticipo richiesto online."
      />
      <div className={styles.passi}>
        {site.passi.map((passo) => (
          <div className={styles.passo} key={passo.numero}>
            <div className={styles.numero}>{passo.numero}</div>
            <h3>{passo.titolo}</h3>
            <p>{passo.testo}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
