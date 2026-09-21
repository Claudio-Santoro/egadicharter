import { Boat } from '../data/boats'
import Section, { SectionIntro } from './Section'
import styles from './FleetGrid.module.css'

type Props = {
  boats: Boat[]
}

export default function FleetGrid({ boats }: Props) {
  return (
    <Section id="flotta">
      <SectionIntro
        titolo="Le barche"
        testo="Tre imbarcazioni, tutte con ombreggiatura, scaletta di risalita, frigo e doccetta di poppa."
      />
      <div className={styles.flotta}>
        {boats.map((barca) => (
          <article className={styles.barca} key={barca.id}>
            <div className={styles.media}>
              <img
                src={barca.immagine}
                alt={`${barca.nome} della flotta Bellavia Egadi Charter`}
                loading="lazy"
                width="400"
                height="250"
              />
            </div>
            <div className={styles.corpo}>
              <h3>{barca.nome}</h3>
              <p>{barca.descrizione}</p>
              <div className={styles.specifiche}>
                {barca.specifiche.map((s) => (
                  <span key={s.label + s.valore}><b>{s.valore}</b>{s.label ? ` ${s.label}` : ''}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
