import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { tours } from '../data/tours'
import Section, { SectionIntro } from '../components/Section'
import styles from './Contact.module.css'

type Stato = 'idle' | 'invio' | 'ok' | 'errore'

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

export default function Contact() {
  const [stato, setStato] = useState<Stato>('idle')
  const [erroreValidazione, setErroreValidazione] = useState<string | null>(null)
  const [mostraMappa, setMostraMappa] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const dati = new FormData(form)

    if (!dati.get('consenso')) {
      setErroreValidazione("Conferma di aver letto l'informativa privacy per inviare la richiesta.")
      return
    }
    setErroreValidazione(null)

    const riepilogo = [
      `Nome: ${dati.get('nome')}`,
      `Email: ${dati.get('email')}`,
      `Telefono: ${dati.get('telefono')}`,
      `Data: ${dati.get('data')}`,
      `Persone: ${dati.get('persone')}`,
      `Escursione: ${dati.get('escursione')}`,
      `Messaggio: ${dati.get('messaggio')}`,
    ].join('\n')

    if (!FORM_ENDPOINT) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Richiesta escursione')}&body=${encodeURIComponent(riepilogo)}`
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
        <SectionIntro
          titolo="Contattaci"
          testo="Scrivici con la data e quante persone siete: rispondiamo entro un'ora."
        />

        <div className={styles.griglia}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <label className={styles.campo}>
              Nome e cognome
              <input type="text" name="nome" autoComplete="name" required />
            </label>
            <label className={styles.campo}>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className={styles.campo}>
              Telefono
              <input type="tel" name="telefono" autoComplete="tel" required />
            </label>
            <div className={styles.riga}>
              <label className={styles.campo}>
                Data desiderata
                <input type="date" name="data" />
              </label>
              <label className={styles.campo}>
                Numero di persone
                <input type="number" name="persone" min={1} max={30} inputMode="numeric" defaultValue={2} />
              </label>
            </div>
            <label className={styles.campo}>
              Escursione di interesse
              <select name="escursione" defaultValue="">
                <option value="" disabled>Scegli un'escursione</option>
                {tours.map((t) => <option key={t.id} value={t.titolo}>{t.titolo}</option>)}
                <option value="Non so ancora">Non so ancora</option>
              </select>
            </label>
            <label className={styles.campo}>
              Messaggio
              <textarea name="messaggio" rows={4} aria-describedby="nota-messaggio" />
            </label>
            <p id="nota-messaggio" className={styles.nota}>
              Non scrivere qui allergie o intolleranze: te le chiediamo noi alla conferma della prenotazione.
            </p>
            <label className={styles.checkbox}>
              <input type="checkbox" name="consenso" required />
              <span>Ho letto l'<Link to="/privacy">informativa privacy</Link>.</span>
            </label>

            {erroreValidazione && <p className={styles.errore}>{erroreValidazione}</p>}
            {stato === 'errore' && <p className={styles.errore}>Invio non riuscito. Riprova o scrivici su WhatsApp.</p>}
            {stato === 'ok' && <p className={styles.successo}>Richiesta inviata! Ti risponderemo il prima possibile.</p>}

            <button className={styles.invia} type="submit" disabled={stato === 'invio'}>
              {stato === 'invio' ? 'Invio in corso…' : 'Invia richiesta'}
            </button>
          </form>

          <div className={styles.recapiti}>
            <h3>Recapiti</h3>
            <p>{site.indirizzo.riga1}<br />{site.indirizzo.riga2}<br />{site.indirizzo.riga3}</p>
            <p className={styles.orari}>{site.orari}</p>
            <a className={styles.link} href={site.telefonoHref}>{site.telefono}</a>
            <a className={styles.link} href={`mailto:${site.email}`}>{site.email}</a>

            <div className={styles.mappa}>
              {/* la mappa di Google imposta cookie di terze parti: si carica solo su richiesta */}
              {mostraMappa ? (
                <iframe
                  src={site.mappaSrc}
                  title="Mappa del punto d'imbarco a Salinagrande"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className={styles.mappaSegnaposto}>
                  <button type="button" className={styles.mostraMappa} onClick={() => setMostraMappa(true)}>Mostra mappa</button>
                  <p>Caricando la mappa, Google può impostare cookie sul tuo dispositivo. <a href="/privacy#cookie">Dettagli</a></p>
                </div>
              )}
            </div>
            <a className={styles.link} href={site.mappaLink} target="_blank" rel="noopener noreferrer">Apri in Google Maps</a>
          </div>
        </div>
      </Section>
    </div>
  )
}
