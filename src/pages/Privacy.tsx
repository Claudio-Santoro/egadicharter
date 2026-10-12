import { useT } from '../i18n'
import Section from '../components/Section'
import styles from './Privacy.module.css'

export default function Privacy() {
  const t = useT().privacy

  return (
    <div className={styles.pagina}>
      <Section id="privacy">
        <article className={styles.testo}>
          <h1>{t.titolo}</h1>
          <p className={styles.intro}>{t.intro}</p>
          {t.corpo}
        </article>
      </Section>
    </div>
  )
}
