import { ReactNode } from 'react'
import styles from './Section.module.css'

type Props = {
  id?: string
  sabbia?: boolean
  children: ReactNode
  className?: string
}

export default function Section({ id, sabbia, children, className }: Props) {
  const classi = [styles.sezione, sabbia && styles.sabbia, className].filter(Boolean).join(' ')
  return (
    <section id={id} className={classi}>
      <div className={`wrap ${styles.wrap}`}>{children}</div>
    </section>
  )
}

type IntroProps = {
  titolo: string
  testo?: string
  /** su desktop il testo va a destra del titolo, allineato in basso (sezioni della home) */
  affiancato?: boolean
}

export function SectionIntro({ titolo, testo, affiancato }: IntroProps) {
  return (
    <div className={`${styles.intro} ${affiancato ? styles.affiancato : ''}`}>
      <h2 className={styles.titolo}>{titolo}</h2>
      {testo && <p className={styles.testo}>{testo}</p>}
    </div>
  )
}
