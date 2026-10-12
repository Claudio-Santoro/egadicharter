import { lp, useLang, useT } from '../i18n'
import Section, { SectionIntro } from '../components/Section'
import Button from '../components/Button'
import styles from './Privacy.module.css'

export default function NotFound() {
  const t = useT().notFound
  return (
    <div className={styles.pagina}>
      <Section>
        <SectionIntro titolo={t.titolo} testo={t.testo} />
        <Button href={lp('/', useLang())}>{t.home}</Button>
      </Section>
    </div>
  )
}
