import { FaqItem } from '../data/faq'
import Section, { SectionIntro } from './Section'
import styles from './Faq.module.css'

type Props = {
  items: FaqItem[]
}

export default function Faq({ items }: Props) {
  return (
    <Section id="faq">
      <SectionIntro titolo="Domande frequenti" />
      <div className={styles.faq}>
        {items.map((item) => (
          <details key={item.id} open={item.apertaDiDefault}>
            <summary>{item.domanda}</summary>
            <p>{item.risposta}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
