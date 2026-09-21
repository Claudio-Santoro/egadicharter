import { Island } from '../data/islands'
import Section, { SectionIntro } from './Section'
import styles from './IslandCards.module.css'

type Props = {
  islands: Island[]
}

export default function IslandCards({ islands }: Props) {
  return (
    <Section id="isole" sabbia>
      <SectionIntro
        titolo="Dove andiamo"
        testo="Due isole a mezz'ora di navigazione da Trapani, diversissime tra loro."
      />
      <div className={styles.destinazioni}>
        {islands.map((isola) => (
          <div className={styles.isola} key={isola.id}>
            <img
              src={isola.immagine}
              alt={`Vista dell'isola di ${isola.nome}`}
              loading="lazy"
              width="700"
              height="520"
            />
            <span className={styles.velo} />
            <div className={styles.testo}>
              <h3>{isola.nome}</h3>
              <p>{isola.descrizione}</p>
              <div className={styles.cale}>
                {isola.cale.map((cala) => <i key={cala}>{cala}</i>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
