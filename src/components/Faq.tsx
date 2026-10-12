import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import styles from './Faq.module.css'

export default function Faq() {
  const { faq } = useT()
  return (
    <Section id="faq">
      <SectionIntro titolo={faq.titolo} />
      <div className={styles.faq}>
        {faq.lista.map((item, i) => (
          <details key={i} open={i === 0}>
            <summary>{item.domanda}</summary>
            <p>{item.risposta}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
