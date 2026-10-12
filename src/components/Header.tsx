import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site'
import { LANGS, NOMI, dicts, lp, splitPath, type Lang } from '../i18n'
import Button from './Button'
import styles from './Header.module.css'

/** select nativo: porta alla stessa pagina nell'altra lingua */
function SceltaLingua({ className, onCambio }: { className: string; onCambio?: () => void }) {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const { lang, path } = splitPath(pathname)

  return (
    <select
      className={className}
      aria-label={dicts[lang].header.lingua}
      value={lang}
      onChange={(e) => {
        onCambio?.()
        navigate(lp(path, e.target.value as Lang) + hash)
      }}
    >
      {LANGS.map((l) => <option key={l} value={l} lang={l}>{NOMI[l]}</option>)}
    </select>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const { lang, path } = splitPath(pathname)
  const t = dicts[lang]
  const forzaSolido = path !== '/'
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
      const focusabili = pannelloRef.current.querySelectorAll<HTMLElement>('a, button, select')
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
        <Link className={styles.marchio} to={lp('/', lang)} onClick={() => setAperto(false)}>
          <img className={styles.segno} src="/brand/logo-bianco.svg" alt="" width="46" height="36" />
          <span className={styles.testo}>
            {site.nome}
            <span>{site.claim}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={t.header.navPrincipale}>
          {site.nav.map((voce) => (
            <a key={voce.href} href={lp(voce.href, lang)}>{t.nav[voce.key]}</a>
          ))}
        </nav>

        <div className={styles.azioni}>
          <SceltaLingua className={styles.lingue} />
          <Button href={lp('/#escursioni', lang)} className={styles.prenota}>{t.header.prenotaOra}</Button>
          <button
            className={styles.hamburger}
            aria-label={aperto ? t.header.chiudiMenu : t.header.apriMenu}
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
          <nav className={styles.pannelloNav} aria-label={t.header.navMobile}>
            {site.nav.map((voce) => (
              <a key={voce.href} href={lp(voce.href, lang)} onClick={() => setAperto(false)}>{t.nav[voce.key]}</a>
            ))}
            <SceltaLingua className={styles.pannelloLingue} onCambio={() => setAperto(false)} />
            <Button href={lp('/#escursioni', lang)} className={styles.pannelloCta} onClick={() => setAperto(false)}>{t.header.prenotaOra}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
