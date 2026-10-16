import { ReactNode } from 'react'
import { site } from '../data/site'
import type { TourTesti } from '../data/tour-types'

// Fonte dei testi: le altre lingue devono avere la stessa forma (TypeScript segnala le chiavi mancanti).

const inclusoStandard = ['Carburante', 'Skipper', 'Pranzo a bordo', 'Acqua e bibite', 'Maschere e boccagli', 'Ombreggiatura', 'Assicurazione']
const nonInclusoStandard = ['Tasse di sbarco a Favignana', 'Ingresso alla Grotta del Genovese']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

// segnaposto da completare prima della pubblicazione
export const SEDE_LEGALE = '[SEDE LEGALE]'
export const FORNITORE_MODULO = '[FORNITORE MODULO]'

const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const it = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — Escursioni in gommone a Favignana e Levanzo da Trapani',
      description: 'Escursioni in gommone alle Isole Egadi con partenza da Trapani. Favignana, Levanzo, gite di gruppo e charter privati con skipper trapanese.',
    },
    contatti: {
      title: 'Contatti e prenotazioni — Bellavia Egadi Charter',
      description: "Prenota un'escursione in gommone alle Egadi: scrivici con la data e quante persone siete, rispondiamo entro un'ora.",
    },
    privacy: {
      title: 'Informativa privacy e cookie — Bellavia Egadi Charter',
      description: 'Quali dati personali raccogliamo, perché li usiamo e quali sono i tuoi diritti.',
    },
    notFound: { title: 'Pagina non trovata — Bellavia Egadi Charter' },
    jsonLd: 'Escursioni in gommone alle Isole Egadi (Favignana e Levanzo) con partenza da Trapani.',
  },

  nav: { escursioni: 'Escursioni', flotta: 'Flotta', isole: 'Le isole', noi: 'Chi siamo', contatti: 'Contatti' },

  header: {
    navPrincipale: 'Navigazione principale',
    navMobile: 'Navigazione mobile',
    apriMenu: 'Apri il menu',
    chiudiMenu: 'Chiudi il menu',
    lingua: 'Lingua',
    prenotaOra: 'Prenota ora',
  },

  comune: {
    scriviciWa: 'Scrivici su WhatsApp',
    waInfo: 'Ciao! Vorrei avere informazioni sulle escursioni.',
    da: 'da',
    unita: { persona: 'a persona', gommone: 'a gommone' },
    tourPrivato: 'Tour privato',
    tourCondiviso: 'Tour condiviso',
  },

  hero: {
    titolo: 'Favignana e Levanzo, in gommone da Trapani',
    testo: 'Giornate in mare tra le cale delle Egadi, con uno skipper che è nato qui. Gruppi piccoli, partenza da Salinagrande alle 10:00.',
    alt: "Mare turchese visto dall'alto con barche e yacht all'ancora",
    vediEscursioni: 'Vedi le escursioni',
  },

  fiducia: [
    { titolo: 'Skipper trapanese', testo: 'Conosciamo le cale che non trovi sulle mappe' as ReactNode },
    { titolo: 'Massimo 10 persone, skipper incluso', testo: 'Mai gommoni affollati, mai fila per la scaletta' },
    {
      titolo: 'Pranzo e bevande a bordo',
      testo: <>Tavola calda di <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a> e piatti di pesce di <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>, secondo gli allergeni che ci indicate</>,
    },
    { titolo: 'Imbarco a Salinagrande', testo: 'Porticciolo di Nautica Cordaro, con posizione su Maps', href: site.mappaLink },
  ] as { titolo: string; testo: ReactNode; href?: string }[],

  tourGrid: {
    titolo: 'Le nostre giornate in mare',
    testo: "Cinque modi di vedere le Egadi. Tutte le escursioni partono da Salinagrande (TP) e rientrano prima del tramonto, tranne l'aperitivo.",
  },

  tourCard: {
    alt: (titolo: string) => `${titolo} — escursione in gommone alle Egadi`,
    max: (n: number) => `max ${n}`,
    richiediPreventivo: 'Richiedi preventivo',
    prenota: 'Prenota',
  },

  chiSiamo: {
    titolo: 'Nati e cresciuti su questo mare',
    paragrafo1: "Durante l'escursione sarete accompagnati da uno skipper locale, che conosce e ama la sua terra. Avervi a bordo è un piacere: curiamo ogni dettaglio per regalarvi una giornata indimenticabile.",
    paragrafo2: "Si parte al mattino, quando il mare è più calmo e limpido, per una giornata all'insegna del relax e della scoperta tra le cale delle Egadi. Cosa aspettate a prenotare?",
    firma: 'Marco Bellavia, comandante',
    alt: "Il nostro gommone Breva visto dall'alto mentre naviga sull'acqua turchese",
    cta: 'Prenota la tua escursione',
  },

  fleet: {
    titolo: 'La flotta',
    testo: (modello: string) => `Due gommoni ${modello}, identici e curati in ogni dettaglio.`,
    label: (modello: string) => `Foto del gommone ${modello}`,
    descrizione: 'Due gommoni identici, così anche un gruppo numeroso può dividersi o viaggiare insieme. Tubolari alti a prua e ampio pozzetto: comodi per le soste bagno e con il bagno a bordo per le giornate lunghe.',
    specifiche: [
      { valore: '2', label: 'gommoni' },
      { valore: '8,5 m', label: 'lunghezza' },
      { valore: '3 m', label: 'larghezza' },
      { valore: '10', label: 'persone a bordo, skipper incluso' },
      { valore: 'Cat. B', label: 'omologazione CE' },
      { valore: 'Bagno', label: 'a bordo' },
    ],
    // stesso ordine di fleet.foto in src/data/boats.ts
    alt: [
      'Gommone Breva 800 con tendalino, visto di lato',
      'Gommone Breva 800 in navigazione',
      'Gommone Breva 800 in navigazione al tramonto',
      'I due gommoni Breva 800 in navigazione',
      'Accesso al bagno di bordo dal ponte di poppa',
      'Bagno di bordo con specchio e lavabo',
      'Lavabo del bagno di bordo',
      'WC del bagno di bordo',
    ],
  },

  slideshow: {
    carosello: 'carosello',
    precedente: 'Foto precedente',
    successiva: 'Foto successiva',
    vai: (i: number, n: number) => `Vai alla foto ${i} di ${n}`,
  },

  isole: {
    titolo: 'Dove andiamo',
    testo: "Due isole a mezz'ora di navigazione da Trapani, diversissime tra loro.",
    favignana: {
      descrizione: "L'isola a forma di farfalla, con le cave di tufo che scendono dritte nell'acqua e il fondale che si vede a sei metri.",
      alt: 'Barca da pesca bianca e azzurra tirata a secco nel porto di Favignana',
    },
    levanzo: {
      descrizione: 'Trenta case bianche intorno a un porticciolo, una strada sola e la Grotta del Genovese con i disegni preistorici.',
      alt: "Vista dell'isola di Levanzo",
    },
  },

  passi: {
    titolo: 'Come si prenota',
    testo: 'Tre passaggi, nessun anticipo richiesto online.',
    lista: [
      {
        numero: 'Passo 1',
        titolo: 'Scegli la giornata',
        testo: 'Guarda le escursioni e dicci la data. Se non sei sicuro, scrivici: ti diciamo noi quale conviene con il meteo di quei giorni.',
      },
      {
        numero: 'Passo 2',
        titolo: 'Confermiamo su WhatsApp',
        testo: "Rispondiamo entro un'ora con disponibilità, orario e punto d'imbarco. Il saldo si fa a bordo, in contanti o con carta.",
      },
      {
        numero: 'Passo 3',
        titolo: "Ci vediamo all'imbarco",
        testo: 'Porticciolo di Salinagrande (Nautica Cordaro). Arriva quindici minuti prima: si parte puntuali perché il mare la mattina è più calmo.',
      },
    ],
  },

  faq: {
    titolo: 'Domande frequenti',
    lista: [
      {
        domanda: 'Da dove si parte?',
        risposta: <>Dal porticciolo di Nautica Cordaro, a Salinagrande (TP), circa 15 minuti in auto da Trapani, 10 dall'aeroporto di Birgi e 25 da Marsala. Il parcheggio è gratuito. <a href={site.mappaLink} {...ext}>Apri la posizione su Google Maps</a>.</> as ReactNode,
      },
      {
        domanda: 'Cosa è compreso nel prezzo?',
        risposta: "Carburante, skipper, pranzo a bordo (tavola calda e piatti di pesce, tenendo conto degli allergeni che ci indicate), acqua e bibite, maschere e boccagli, ombreggiatura e assicurazione. Non sono comprese le tasse di sbarco a Favignana e l'ingresso alla Grotta del Genovese.",
      },
      {
        domanda: 'Cosa devo portare?',
        risposta: "Costume, telo, crema solare, un cappello e una felpa leggera per il rientro. A bordo si sta scalzi, le scarpe si lasciano in una cesta all'imbarco.",
      },
      {
        domanda: 'E se il tempo è brutto?',
        risposta: 'Decidiamo la sera prima entro le 20:00. Se non si esce, si sposta a un altro giorno o si annulla senza costi. Non usciamo mai con mare oltre forza 3.',
      },
      {
        domanda: 'Si può venire con bambini piccoli?',
        risposta: 'Sì, abbiamo giubbotti dalla taglia 0. Per i bimbi sotto i tre anni scriveteci: valutiamo insieme giornata, mare e itinerario.',
      },
      {
        domanda: 'Bisogna saper nuotare?',
        risposta: 'No. Le soste bagno sono facoltative e in acque basse, e a bordo ci sono ciambelle e giubbotti per chi vuole entrare in acqua in sicurezza.',
      },
    ],
  },

  finale: {
    titolo: 'Scegli il tuo giorno di mare',
    // titolo in base alle previsioni di domani (se mancano resta "titolo")
    titoloMeteo: {
      perfetto: 'Il mare domani è previsto calmo',
      buono: 'Domani mare buono per uscire',
      sconsigliato: 'Domani mare mosso: ecco i giorni migliori',
    },
    testo: "Scrivici su WhatsApp con la data e quante persone siete. Rispondiamo entro un'ora, anche la domenica.",
    alt: 'Tramonto visto dal mare davanti alle Egadi',
    etichetta: { perfetto: 'Giorno ideale', buono: 'Buono', sconsigliato: 'Mare mosso' },
    meteoTitolo: 'Mare nei prossimi 7 giorni',
    fonte: <>Previsioni <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>, aggiornate ogni ora. Onda massima e vento in nodi.</> as ReactNode,
    waPrenota: "Ciao! Vorrei prenotare un'escursione.",
    waGiorno: (giorno: string) => `Ciao! Vorrei prenotare per ${giorno}.`,
    ariaGiorno: (giorno: string, etichetta: string) => `Prenota ${giorno}, ${etichetta}, su WhatsApp`,
  },

  footer: {
    descrizione: 'Escursioni in gommone e noleggio con skipper alle Isole Egadi, da Trapani.',
    escursioni: 'Escursioni',
    informazioni: 'Informazioni',
    doveSiamo: 'Dove siamo',
    orari: 'Tutti i giorni 8:00–20:00, da aprile a ottobre',
    info: { noi: 'Chi siamo', flotta: 'La flotta', faq: 'Domande frequenti', condizioni: 'Condizioni di prenotazione', privacy: 'Privacy e cookie' },
    crediti: 'Foto (ridimensionate e ritagliate) da Wikimedia Commons:',
  },

  contatti: {
    titolo: 'Contattaci',
    testo: "Scrivici con la data e quante persone siete: rispondiamo entro un'ora.",
    nome: 'Nome e cognome',
    email: 'Email',
    telefono: 'Telefono',
    data: 'Data desiderata',
    persone: 'Numero di persone',
    escursione: 'Escursione di interesse',
    scegli: "Scegli un'escursione",
    nonSo: 'Non so ancora',
    messaggio: 'Messaggio',
    notaMessaggio: 'Non scrivere qui allergie o intolleranze: te le chiediamo noi alla conferma della prenotazione.',
    consenso: (link: ReactNode) => <>Ho letto l'{link}.</>,
    linkPrivacy: 'informativa privacy',
    erroreConsenso: "Conferma di aver letto l'informativa privacy per inviare la richiesta.",
    erroreInvio: 'Invio non riuscito. Riprova o scrivici su WhatsApp.',
    ok: 'Richiesta inviata! Ti risponderemo il prima possibile.',
    invio: 'Invio in corso…',
    invia: 'Invia richiesta',
    oggetto: 'Richiesta escursione',
    recapiti: 'Recapiti',
    mappaTitolo: "Mappa del punto d'imbarco a Salinagrande",
    mostraMappa: 'Mostra mappa',
    mappaCookie: 'Caricando la mappa, Google può impostare cookie sul tuo dispositivo.',
    dettagli: 'Dettagli',
    apriMaps: 'Apri in Google Maps',
  },

  tour: {
    fotoPrincipale: (titolo: string) => `Foto principale di ${titolo}`,
    foto: (i: number, titolo: string) => `Foto ${i} di ${titolo}`,
    fotoDi: (titolo: string) => `Foto di ${titolo}`,
    itinerario: 'Itinerario',
    incluso: 'Incluso',
    nonIncluso: 'Non incluso',
    persone: (n: number) => `max ${n} persone, skipper incluso`,
    partenza: (orario: string) => `Partenza ${orario}`,
    aScelta: 'a scelta',
    chiama: 'Chiama',
    altre: 'Altre escursioni',
    waPrenota: (titolo: string) => `Ciao! Vorrei prenotare: ${titolo}.`,
  },

  notFound: {
    titolo: 'Pagina non trovata',
    testo: "L'indirizzo che hai aperto non esiste o è stato spostato.",
    home: "Torna alla home",
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: 'Favignana e Levanzo, giornata intera',
      breve: 'Favignana e Levanzo',
      descrizioneBreve: 'Il giro classico: Cala Rossa, Bue Marino, sosta a Levanzo e rientro passando da Cala Minnola.',
      descrizioneLunga: 'Il nostro tour più completo: si tocca il meglio di entrambe le isole in una sola giornata. Si parte in mattinata per goderci le cale con calma, con soste bagno lunghe e il pranzo a bordo preparato con prodotti locali.',
      durata: '8 ore',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Partenza da Salinagrande alle 10:00',
        "Cala Rossa, Favignana — sosta bagno di un'ora",
        'Grotta del Bue Marino',
        'Pranzo a bordo al largo di Levanzo',
        'Cala Minnola, Levanzo — sosta bagno',
        'Rientro a Salinagrande entro le 18:00',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: 'Favignana, mezza giornata',
      breve: 'Mezza giornata',
      descrizioneBreve: "Partenza alle 10:00, rientro nel primo pomeriggio. Il lato est dell'isola e due soste bagno.",
      descrizioneLunga: "Pensato per chi ha solo mezza giornata libera: si esplora il lato est di Favignana, quello con le cave di tufo e l'acqua più trasparente, con due soste bagno in punti diversi.",
      durata: '4 ore',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Partenza da Salinagrande alle 10:00',
        'Cala Azzurra — sosta bagno',
        'Lido Burrone — sosta bagno',
        'Rientro a Salinagrande entro le 14:30',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: 'Aperitivo al tramonto',
      breve: 'Aperitivo al tramonto',
      descrizioneBreve: "Si esce alle 18:00 verso San Teodoro, vicino Marsala, e si beve un bicchiere di grillo mentre il sole cala sull'Isola Grande.",
      descrizioneLunga: "Una breve uscita serale a San Teodoro, vicino Marsala: acqua cristallina, la Torre di San Teodoro sulla costa e l'Isola Grande dello Stagnone davanti. Un calice di vino bianco locale in mano mentre il sole tramonta. Sosta bagno, poi solo mare, luce e un buon bicchiere.",
      durata: '2,5 ore',
      incluso: ['Carburante', 'Skipper', 'Un calice di vino locale', 'Assicurazione'],
      nonIncluso: [],
      itinerario: [
        'Partenza da Salinagrande alle 18:00',
        'Navigazione verso San Teodoro (Marsala)',
        'Sosta bagno a San Teodoro',
        'Aperitivo a bordo al tramonto',
        'Rientro a Salinagrande entro le 20:30',
      ],
    },
    'charter-privato-egadi': {
      titolo: 'Charter privato alle Egadi',
      breve: 'Charter privato',
      descrizioneBreve: 'Gommone solo per voi, itinerario deciso insieme la sera prima guardando il meteo.',
      descrizioneLunga: "L'intero gommone con equipaggio a vostra disposizione per una giornata. L'itinerario si decide insieme la sera prima, guardando meteo e condizioni del mare, per andare esattamente dove volete voi.",
      durata: '8 ore',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Orario di partenza a scelta',
        'Itinerario personalizzato tra Favignana e Levanzo',
        'Soste bagno dove e quando preferite',
        'Rientro in serata',
      ],
    },
    'mezza-giornata-privata': {
      titolo: 'Mezza giornata privata',
      breve: 'Mezza giornata privata',
      descrizioneBreve: 'Quattro ore di mare per famiglie e piccoli gruppi, con orario di uscita a scelta.',
      descrizioneLunga: 'La versione più breve del charter privato: quattro ore di mare, ideali per famiglie con bambini piccoli o per chi ha solo mezza giornata a disposizione, con orario di uscita concordato insieme.',
      durata: '4 ore',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Orario di partenza a scelta',
        'Una o due soste bagno a seconda della meta',
        'Rientro dopo circa quattro ore',
      ],
    },
  } satisfies Record<string, TourTesti>,

  privacy: {
    titolo: 'Informativa privacy e cookie',
    intro: "Questa pagina spiega quali dati personali raccogliamo quando visiti il sito, ci contatti o prenoti un'escursione, perché li usiamo e quali sono i tuoi diritti. È resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 (Codice privacy).",
    corpo: (
      <>
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
          (<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>).
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
          <a href="https://policies.google.com/privacy" {...ext}>informativa privacy</a>.
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
          Se cambiamo il modo in cui trattiamo i dati aggiorniamo questa pagina. Ultimo aggiornamento: 12 ottobre 2026.
        </p>
      </>
    ) as ReactNode,
  },
}

export default it
