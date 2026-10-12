import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { passi } = useT()
  return (
    <Section>
      <SectionIntro titolo={passi.titolo} testo={passi.testo} />
      <div className={styles.passi}>
        {passi.lista.map((passo) => (
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
