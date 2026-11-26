import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import styles from './Faq.module.css'

export default function Faq() {
  const { faq } = useT()
  return (
    <Section id="faq">
      <div className={styles.griglia}>
        <div className={styles.titolo}>
          <SectionIntro titolo={faq.titolo} />
        </div>
        <div>
          {faq.lista.map((item, i) => (
            <details key={i} open={i === 0}>
              <summary>
                {item.domanda}
                <span className={styles.segno} aria-hidden="true" />
              </summary>
              <p>{item.risposta}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
