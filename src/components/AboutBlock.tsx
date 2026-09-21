import { site } from '../data/site'
import Button from './Button'
import Section from './Section'
import styles from './AboutBlock.module.css'

export default function AboutBlock() {
  const { chiSiamo } = site

  return (
    <Section id="noi" sabbia>
      <div className={styles.misto}>
        <div className={styles.media}>
          <img
            src={chiSiamo.immagine}
            alt="Marco Bellavia, comandante, al timone del gommone"
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
          <Button href="/contatti" variante="linea" className={styles.azione}>La nostra storia</Button>
        </div>
      </div>
    </Section>
  )
}
