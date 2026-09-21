import { site } from '../data/site'
import styles from './TrustBar.module.css'

const icone = [
  <path key="1" d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3.2L6 20l1.5-6.5L3 9l6-1z" strokeLinejoin="round" />,
  <>
    <circle key="c" cx="9" cy="8" r="3.2" />
    <path key="p" d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 7.5a3 3 0 010 5M18.5 5a6 6 0 010 10" />
  </>,
  <>
    <path key="p1" d="M5 11h14l-1.5 8h-11z" />
    <path key="p2" d="M8 11V7a4 4 0 118 0v4" />
  </>,
  <>
    <path key="p1" d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
    <circle key="c" cx="12" cy="10" r="2.6" />
  </>,
]

export default function TrustBar() {
  return (
    <section className={styles.fiducia}>
      <div className="wrap" style={{ paddingInline: 0 }}>
        <div className={styles.griglia}>
          {site.fiducia.map((voce, i) => (
            <div className={styles.voce} key={voce.titolo}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                {icone[i]}
              </svg>
              <div>
                <b>{voce.titolo}</b>
                <small>{voce.testo}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
