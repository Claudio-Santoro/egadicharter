import { site } from '../data/site'
import { lp, useLang, useT } from '../i18n'
import Button from './Button'
import Section from './Section'
import styles from './AboutBlock.module.css'

export default function AboutBlock() {
  const { chiSiamo } = useT()
  const lang = useLang()

  return (
    <Section id="noi" sabbia>
      <div className={styles.misto}>
        <div className={styles.media}>
          <img
            src={site.chiSiamoImmagine}
            alt={chiSiamo.alt}
            loading="lazy"
            width="500"
            height="400"
          />
        </div>
        <div>
          <h2>{chiSiamo.titolo}</h2>
          <p>{chiSiamo.paragrafo1}</p>
          <p style={{ marginTop: 14 }}>{chiSiamo.paragrafo2}</p>
          <div className={styles.firma}>{chiSiamo.firma}</div>
          <Button href={lp('/contatti', lang)} variante="linea" className={styles.azione}>{chiSiamo.cta}</Button>
        </div>
      </div>
    </Section>
  )
}
