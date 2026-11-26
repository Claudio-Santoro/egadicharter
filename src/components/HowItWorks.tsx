import { useT } from '../i18n'
import Section, { SectionIntro } from './Section'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { passi } = useT()
  return (
    <Section>
      <SectionIntro titolo={passi.titolo} />
      {/* la rotta: una linea che unisce i passi e si disegna mentre la sezione entra nello schermo */}
      <ol className={styles.passi}>
        {passi.lista.map((passo, i) => (
          <li className={styles.passo} key={passo.numero}>
            <span className={styles.nodo} aria-hidden="true">{i + 1}</span>
            <h3><span className="sr">{passo.numero}: </span>{passo.titolo}</h3>
            <p>{passo.testo}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
