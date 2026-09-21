import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import Button from './Button'
import styles from './Header.module.css'

export default function Header() {
  const { pathname } = useLocation()
  const forzaSolido = pathname !== '/'
  const [scrollato, setScrollato] = useState(false)
  const [aperto, setAperto] = useState(false)
  const pannelloRef = useRef<HTMLDivElement>(null)
  const solido = forzaSolido || scrollato

  useEffect(() => {
    if (forzaSolido) return
    const onScroll = () => setScrollato(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forzaSolido])

  useEffect(() => {
    if (!aperto) return

    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAperto(false)
        return
      }
      if (e.key !== 'Tab' || !pannelloRef.current) return
      const focusabili = pannelloRef.current.querySelectorAll<HTMLElement>('a, button')
      if (focusabili.length === 0) return
      const primo = focusabili[0]
      const ultimo = focusabili[focusabili.length - 1]
      if (e.shiftKey && document.activeElement === primo) {
        e.preventDefault()
        ultimo.focus()
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault()
        primo.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    pannelloRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [aperto])

  return (
    <header className={`${styles.header} ${solido ? styles.solido : ''}`}>
      <div className={`wrap ${styles.in}`}>
        <Link className={styles.marchio} to="/" onClick={() => setAperto(false)}>
          <img className={styles.segno} src="/brand/logo-bianco.svg" alt="" width="46" height="36" />
          <span className={styles.testo}>
            {site.nome}
            <span>{site.claim}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navigazione principale">
          {site.nav.map((voce) => (
            <a key={voce.href} href={voce.href}>{voce.label}</a>
          ))}
        </nav>

        <div className={styles.azioni}>
          <div className={styles.lingue} aria-label="Lingua: Italiano">
            <b>IT</b><span>EN</span><span>FR</span>
          </div>
          <Button href="/#escursioni" className={styles.prenota}>Prenota ora</Button>
          <button
            className={styles.hamburger}
            aria-label={aperto ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={aperto}
            onClick={() => setAperto((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {aperto && (
        <div
          className={styles.pannello}
          ref={pannelloRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) setAperto(false)
          }}
        >
          <nav className={styles.pannelloNav} aria-label="Navigazione mobile">
            {site.nav.map((voce) => (
              <a key={voce.href} href={voce.href} onClick={() => setAperto(false)}>{voce.label}</a>
            ))}
            <Button href="/#escursioni" className={styles.pannelloCta} onClick={() => setAperto(false)}>Prenota ora</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
