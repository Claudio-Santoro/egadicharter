import { site } from '../data/site'
import Section from '../components/Section'
import styles from './Privacy.module.css'

// segnaposto da completare prima della pubblicazione
const SEDE_LEGALE = '[SEDE LEGALE]'
const FORNITORE_MODULO = '[FORNITORE MODULO]'

const AGGIORNAMENTO = '12 ottobre 2026'

export default function Privacy() {
  const email = <a href={`mailto:${site.email}`}>{site.email}</a>

  return (
    <div className={styles.pagina}>
      <Section id="privacy">
        <article className={styles.testo}>
          <h1>Informativa privacy e cookie</h1>
          <p className={styles.intro}>
            Questa pagina spiega quali dati personali raccogliamo quando visiti il sito, ci contatti o prenoti
            un'escursione, perché li usiamo e quali sono i tuoi diritti. È resa ai sensi degli artt. 13 e 14 del
            Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 (Codice privacy).
          </p>

          <h2>1. Chi è il titolare del trattamento</h2>
          <p>
            {site.ragioneSociale}, {site.partitaIva}, con sede in {SEDE_LEGALE}.<br />
            Email: {email} · Telefono: <a href={site.telefonoHref}>{site.telefono}</a>
          </p>
          <p>Non abbiamo nominato un responsabile della protezione dei dati (DPO), perché per la nostra attività non è obbligatorio.</p>

          <h2>2. Quali dati trattiamo e perché</h2>

          <h3>Richieste di informazioni</h3>
          <p>
            Ci scrivi tramite il modulo contatti, email, telefono o WhatsApp. Trattiamo i dati che ci dai: nome,
            email, telefono, data e numero di persone, escursione che ti interessa, testo del messaggio.
          </p>
          <ul>
            <li><strong>Finalità:</strong> rispondere alla tua richiesta e preparare un'eventuale prenotazione.</li>
            <li><strong>Base giuridica:</strong> misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).</li>
          </ul>

          <h3>Prenotazione ed escursione</h3>
          <p>
            Se prenoti trattiamo i dati necessari per organizzare la giornata: nome dei partecipanti,
            recapiti, data, servizio scelto, pagamento.
          </p>
          <ul>
            <li><strong>Finalità:</strong> eseguire il servizio prenotato, comunicare con te prima e durante l'escursione, gestire spostamenti per meteo.</li>
            <li><strong>Base giuridica:</strong> esecuzione del contratto (art. 6.1.b GDPR).</li>
          </ul>

          <h3>Allergie e intolleranze</h3>
          <p>
            Per il pranzo a bordo ti chiediamo se qualcuno ha allergie o intolleranze alimentari. Sono dati
            relativi alla salute, quindi li trattiamo solo con il tuo consenso esplicito, che ti chiediamo
            quando confermi la prenotazione (art. 9.2.a GDPR). Usiamo questi dati solo per preparare pasti adatti.
            Puoi non darli o revocare il consenso in qualsiasi momento: in quel caso non possiamo garantire un menu adatto.
          </p>
          <p>Non scriverli nel modulo contatti: li raccogliamo noi alla conferma.</p>

          <h3>Obblighi di legge</h3>
          <ul>
            <li><strong>Finalità:</strong> fatturazione, contabilità e altri obblighi di legge, inclusi quelli di sicurezza della navigazione.</li>
            <li><strong>Base giuridica:</strong> obbligo legale (art. 6.1.c GDPR).</li>
          </ul>

          <h3>Navigazione sul sito</h3>
          <p>
            Il nostro fornitore di hosting registra in modo automatico alcuni dati tecnici delle visite, come
            indirizzo IP, browser e pagina richiesta. Servono solo a mostrare il sito e a proteggerlo da abusi.
          </p>
          <ul>
            <li><strong>Base giuridica:</strong> legittimo interesse alla sicurezza e al funzionamento del sito (art. 6.1.f GDPR).</li>
          </ul>

          <h2>3. Sei obbligato a darci i dati?</h2>
          <p>
            No. Senza i dati di contatto però non possiamo risponderti, e senza quelli di prenotazione non possiamo
            organizzare l'escursione. I dati su allergie e intolleranze sono sempre facoltativi. Non prendiamo
            decisioni automatizzate e non facciamo profilazione.
          </p>

          <h2>4. A chi comunichiamo i dati</h2>
          <p>I dati non vengono diffusi né venduti. Li conoscono solo il titolare, lo skipper e, per quanto serve, i soggetti seguenti:</p>
          <ul>
            <li><strong>Cloudflare, Inc.</strong>: ospita il sito.</li>
            <li><strong>Google</strong>: gestisce la nostra casella email (Gmail). Fornisce la mappa di Google Maps, che si carica solo se lo chiedi tu (vedi la sezione Cookie).</li>
            <li><strong>{FORNITORE_MODULO}</strong>: riceve e ci inoltra i messaggi del modulo contatti.</li>
            <li><strong>WhatsApp (Meta)</strong>: se scegli di scriverci su WhatsApp, Meta tratta i dati come titolare autonomo, secondo la propria informativa.</li>
            <li><strong>Fornitori del pranzo</strong> (Messina Nicasio, Nereide): ricevono solo il numero dei pasti e le eventuali allergie o intolleranze, senza i nomi.</li>
            <li><strong>Commercialista</strong>: per gli adempimenti fiscali.</li>
            <li><strong>Autorità pubbliche</strong>: solo se la legge lo richiede.</li>
          </ul>
          <p>
            I fornitori che trattano dati per nostro conto sono nominati responsabili del trattamento (art. 28 GDPR).
            Alcuni, come Cloudflare e Google, possono trasferire dati fuori dall'Unione europea. In quei casi
            il trasferimento avviene con le garanzie previste dal GDPR: adesione all'EU-U.S. Data Privacy
            Framework o clausole contrattuali standard approvate dalla Commissione europea.
          </p>

          <h2>5. Per quanto tempo conserviamo i dati</h2>
          <ul>
            <li>Richieste che non diventano una prenotazione: 12 mesi dall'ultimo contatto.</li>
            <li>Dati di prenotazione e pagamento: 10 anni, come richiesto dalla normativa fiscale (art. 2220 c.c.).</li>
            <li>Allergie e intolleranze: cancellate al termine dell'escursione.</li>
            <li>Dati tecnici di navigazione: per il tempo strettamente necessario, secondo le politiche del fornitore di hosting.</li>
          </ul>

          <h2>6. I tuoi diritti</h2>
          <p>In qualsiasi momento puoi chiederci di:</p>
          <ul>
            <li>sapere se trattiamo tuoi dati e averne una copia (accesso, art. 15);</li>
            <li>correggerli (rettifica, art. 16) o cancellarli (art. 17);</li>
            <li>limitarne il trattamento (art. 18);</li>
            <li>riceverli in un formato leggibile da un computer (portabilità, art. 20);</li>
            <li>opporti al trattamento basato sul legittimo interesse (art. 21);</li>
            <li>revocare il consenso già dato. La revoca non rende illegittimo il trattamento fatto fino a quel momento.</li>
          </ul>
          <p>
            Scrivici a {email}: rispondiamo entro un mese. Se ritieni che il trattamento non sia corretto puoi
            presentare reclamo al Garante per la protezione dei dati personali{' '}
            (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>).
          </p>

          <h2 id="cookie">7. Cookie</h2>
          <p>
            Questo sito non usa cookie di profilazione, strumenti di statistica o pubblicità, e non installa
            cookie propri. I caratteri tipografici sono caricati direttamente dal nostro server, senza
            richieste a servizi esterni.
          </p>
          <p>
            L'unico contenuto di terze parti è la mappa di Google Maps nella pagina Contatti. Non si carica in
            automatico: compare solo se premi "Mostra mappa". Da quel momento Google può impostare i propri
            cookie, secondo la sua{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">informativa privacy</a>.
            Se non vuoi, puoi usare il link "Apri in Google Maps" o semplicemente non caricare la mappa.
          </p>
          <p>
            Per questo, come previsto dalle Linee guida del Garante sui cookie del 10 giugno 2021, il sito non
            mostra un banner: nessun cookie non tecnico viene installato senza una tua azione.
          </p>
          <p>
            I link a Instagram, TikTok e WhatsApp aprono servizi esterni, che applicano le proprie regole sui
            dati e sui cookie.
          </p>

          <h2>8. Minori</h2>
          <p>
            Le prenotazioni devono essere fatte da un adulto. I dati dei minori che partecipano all'escursione
            ci vengono comunicati da chi esercita la responsabilità genitoriale.
          </p>

          <h2>9. Modifiche</h2>
          <p>
            Se cambiamo il modo in cui trattiamo i dati aggiorniamo questa pagina. Ultimo aggiornamento:{' '}
            {AGGIORNAMENTO}.
          </p>
        </article>
      </Section>
    </div>
  )
}
