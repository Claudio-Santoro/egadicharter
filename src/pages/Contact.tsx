import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { useTours } from '../data/tours'
import { lp, useLang, useT } from '../i18n'
import Section, { SectionIntro } from '../components/Section'
import styles from './Contact.module.css'

type Stato = 'idle' | 'invio' | 'ok' | 'errore'

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

export default function Contact() {
  const [stato, setStato] = useState<Stato>('idle')
  const [erroreValidazione, setErroreValidazione] = useState<string | null>(null)
  const [mostraMappa, setMostraMappa] = useState(false)
  const { contatti: t, footer } = useT()
  const lang = useLang()
  const tours = useTours()

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const dati = new FormData(form)

    if (!dati.get('consenso')) {
      setErroreValidazione(t.erroreConsenso)
      return
    }
    setErroreValidazione(null)

    const riepilogo = [
      `${t.nome}: ${dati.get('nome')}`,
      `${t.email}: ${dati.get('email')}`,
      `${t.telefono}: ${dati.get('telefono')}`,
      `${t.data}: ${dati.get('data')}`,
      `${t.persone}: ${dati.get('persone')}`,
      `${t.escursione}: ${dati.get('escursione')}`,
      `${t.messaggio}: ${dati.get('messaggio')}`,
    ].join('\n')

    if (!FORM_ENDPOINT) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(t.oggetto)}&body=${encodeURIComponent(riepilogo)}`
      setStato('ok')
      return
    }

    setStato('invio')
    try {
      const risposta = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: dati,
      })
      setStato(risposta.ok ? 'ok' : 'errore')
      if (risposta.ok) form.reset()
    } catch {
      setStato('errore')
    }
  }

  return (
    <div className={styles.pagina}>
      <Section id="modulo">
        <SectionIntro titolo={t.titolo} testo={t.testo} />

        <div className={styles.griglia}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <label className={styles.campo}>
              {t.nome}
              <input type="text" name="nome" autoComplete="name" required />
            </label>
            <label className={styles.campo}>
              {t.email}
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className={styles.campo}>
              {t.telefono}
              <input type="tel" name="telefono" autoComplete="tel" required />
            </label>
            <div className={styles.riga}>
              <label className={styles.campo}>
                {t.data}
                <input type="date" name="data" />
              </label>
              <label className={styles.campo}>
                {t.persone}
                <input type="number" name="persone" min={1} max={30} inputMode="numeric" defaultValue={2} />
              </label>
            </div>
            <label className={styles.campo}>
              {t.escursione}
              <select name="escursione" defaultValue="">
                <option value="" disabled>{t.scegli}</option>
                {tours.map((t) => <option key={t.id} value={t.titolo}>{t.titolo}</option>)}
                <option value={t.nonSo}>{t.nonSo}</option>
              </select>
            </label>
            <label className={styles.campo}>
              {t.messaggio}
              <textarea name="messaggio" rows={4} aria-describedby="nota-messaggio" />
            </label>
            <p id="nota-messaggio" className={styles.nota}>
              {t.notaMessaggio}
            </p>
            <label className={styles.checkbox}>
              <input type="checkbox" name="consenso" required />
              <span>{t.consenso(<Link to={lp('/privacy', lang)}>{t.linkPrivacy}</Link>)}</span>
            </label>

            {erroreValidazione && <p className={styles.errore}>{erroreValidazione}</p>}
            {stato === 'errore' && <p className={styles.errore}>{t.erroreInvio}</p>}
            {stato === 'ok' && <p className={styles.successo}>{t.ok}</p>}

            <button className={styles.invia} type="submit" disabled={stato === 'invio'}>
              {stato === 'invio' ? t.invio : t.invia}
            </button>
          </form>

          <div className={styles.recapiti}>
            <h3>{t.recapiti}</h3>
            <p>{site.indirizzo.riga1}<br />{site.indirizzo.riga2}<br />{site.indirizzo.riga3}</p>
            <p className={styles.orari}>{footer.orari}</p>
            <a className={styles.link} href={site.telefonoHref}>{site.telefono}</a>
            <a className={styles.link} href={`mailto:${site.email}`}>{site.email}</a>

            <div className={styles.mappa}>
              {/* la mappa di Google imposta cookie di terze parti: si carica solo su richiesta */}
              {mostraMappa ? (
                <iframe
                  src={site.mappaSrc}
                  title={t.mappaTitolo}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className={styles.mappaSegnaposto}>
                  <button type="button" className={styles.mostraMappa} onClick={() => setMostraMappa(true)}>{t.mostraMappa}</button>
                  <p>{t.mappaCookie} <a href={lp('/privacy#cookie', lang)}>{t.dettagli}</a></p>
                </div>
              )}
            </div>
            <a className={styles.link} href={site.mappaLink} target="_blank" rel="noopener noreferrer">{t.apriMaps}</a>
          </div>
        </div>
      </Section>
    </div>
  )
}
