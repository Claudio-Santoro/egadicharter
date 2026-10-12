import { ReactNode } from 'react'
import { site } from '../data/site'
import type { Dict } from '.'
import { FORNITORE_MODULO, SEDE_LEGALE } from './it'

const inclusoStandard = ['Treibstoff', 'Skipper', 'Mittagessen an Bord', 'Wasser und Getränke', 'Taucherbrillen und Schnorchel', 'Sonnenschutz', 'Versicherung']
const nonInclusoStandard = ['Anlandegebühr auf Favignana', 'Eintritt in die Grotta del Genovese']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const de: Dict = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — Schlauchbootausflüge nach Favignana und Levanzo ab Trapani',
      description: 'Bootsausflüge im Schlauchboot zu den Ägadischen Inseln ab Trapani. Favignana, Levanzo, Touren in kleinen Gruppen und private Charter mit einheimischem Skipper.',
    },
    contatti: {
      title: 'Kontakt und Buchung — Bellavia Egadi Charter',
      description: 'Buchen Sie einen Bootsausflug zu den Ägadischen Inseln: Schreiben Sie uns Datum und Personenzahl, wir antworten innerhalb einer Stunde.',
    },
    privacy: {
      title: 'Datenschutz- und Cookie-Erklärung — Bellavia Egadi Charter',
      description: 'Welche personenbezogenen Daten wir erheben, wozu wir sie nutzen und welche Rechte Sie haben.',
    },
    notFound: { title: 'Seite nicht gefunden — Bellavia Egadi Charter' },
    jsonLd: 'Bootsausflüge im Schlauchboot zu den Ägadischen Inseln (Favignana und Levanzo) ab Trapani.',
  },

  nav: { escursioni: 'Ausflüge', flotta: 'Flotte', isole: 'Die Inseln', noi: 'Über uns', contatti: 'Kontakt' },

  header: {
    navPrincipale: 'Hauptnavigation',
    navMobile: 'Mobile Navigation',
    apriMenu: 'Menü öffnen',
    chiudiMenu: 'Menü schließen',
    lingua: 'Sprache',
    prenotaOra: 'Jetzt buchen',
  },

  comune: {
    scriviciWa: 'Schreiben Sie uns auf WhatsApp',
    waInfo: 'Hallo! Ich hätte gerne Informationen zu den Ausflügen.',
    da: 'ab',
    unita: { persona: 'pro Person', gommone: 'pro Boot' },
    tourPrivato: 'Private Tour',
    tourCondiviso: 'Gruppentour',
  },

  hero: {
    titolo: 'Favignana und Levanzo im Schlauchboot ab Trapani',
    testo: 'Tage auf dem Meer zwischen den Buchten der Ägadischen Inseln, mit einem Skipper, der hier geboren ist. Kleine Gruppen, Abfahrt in Salinagrande um 10:00 Uhr.',
    alt: 'Türkisfarbenes Meer von oben mit ankernden Booten und Jachten',
    vediEscursioni: 'Ausflüge ansehen',
  },

  fiducia: [
    { titolo: 'Skipper aus Trapani', testo: 'Wir kennen die Buchten, die auf keiner Karte stehen' },
    { titolo: 'Maximal 10 Personen', testo: 'Nie ein überfülltes Boot, nie Schlange an der Badeleiter' },
    {
      titolo: 'Mittagessen und Getränke an Bord',
      testo: <>Warme Gerichte von <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a> und Fischgerichte von <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>, abgestimmt auf die Allergene, die Sie uns nennen</>,
    },
    { titolo: 'Einschiffung in Salinagrande', testo: 'Kleiner Hafen von Nautica Cordaro, mit Standort in Maps', href: site.mappaLink },
  ],

  tourGrid: {
    titolo: 'Unsere Tage auf dem Meer',
    testo: 'Vier Arten, die Ägadischen Inseln zu erleben. Alle Ausflüge starten in Salinagrande (TP) und kehren vor Sonnenuntergang zurück, außer dem Aperitivo.',
  },

  tourCard: {
    alt: (titolo) => `${titolo} — Schlauchbootausflug zu den Ägadischen Inseln`,
    max: (n) => `max. ${n}`,
    richiediPreventivo: 'Angebot anfragen',
    prenota: 'Buchen',
  },

  chiSiamo: {
    titolo: 'An diesem Meer geboren und aufgewachsen',
    paragrafo1: 'Auf dem Ausflug begleitet Sie ein einheimischer Skipper, der seine Heimat kennt und liebt. Sie an Bord zu haben, ist uns eine Freude: Wir achten auf jedes Detail, damit Sie einen unvergesslichen Tag erleben.',
    paragrafo2: 'Wir starten am Morgen, wenn das Meer am ruhigsten und klarsten ist, zu einem Tag voller Entspannung und Entdeckungen in den Buchten der Ägadischen Inseln. Worauf warten Sie noch?',
    firma: 'Marco Bellavia, Kapitän',
    alt: 'Unser Breva-Schlauchboot von oben, auf türkisfarbenem Wasser unterwegs',
    cta: 'Ausflug buchen',
  },

  fleet: {
    titolo: 'Die Flotte',
    testo: (modello) => `Zwei Schlauchboote ${modello}, baugleich und bis ins Detail gepflegt.`,
    label: (modello) => `Fotos des Schlauchboots ${modello}`,
    descrizione: 'Zwei baugleiche Schlauchboote, sodass sich auch eine große Gruppe aufteilen oder gemeinsam fahren kann. Hohe Schläuche am Bug und ein großes Cockpit: bequem für Badestopps, mit Toilette an Bord für lange Tage.',
    specifiche: [
      { valore: '2', label: 'Boote' },
      { valore: '8,5 m', label: 'Länge' },
      { valore: '3 m', label: 'Breite' },
      { valore: '10', label: 'Personen an Bord' },
      { valore: 'Kat. B', label: 'CE-Zulassung' },
      { valore: 'Toilette', label: 'an Bord' },
    ],
    alt: [
      'Schlauchboot Breva 800 mit Sonnendach, Seitenansicht',
      'Schlauchboot Breva 800 in Fahrt',
      'Schlauchboot Breva 800 in Fahrt bei Sonnenuntergang',
      'Die beiden Schlauchboote Breva 800 in Fahrt',
      'Zugang zur Bordtoilette vom Heckdeck',
      'Bordtoilette mit Spiegel und Waschbecken',
      'Waschbecken der Bordtoilette',
      'WC der Bordtoilette',
    ],
  },

  slideshow: {
    carosello: 'Karussell',
    precedente: 'Vorheriges Foto',
    successiva: 'Nächstes Foto',
    vai: (i, n) => `Zu Foto ${i} von ${n}`,
  },

  isole: {
    titolo: 'Wohin wir fahren',
    testo: 'Zwei Inseln eine halbe Stunde Fahrt von Trapani entfernt, grundverschieden voneinander.',
    favignana: {
      descrizione: 'Die schmetterlingsförmige Insel, mit Tuffsteinbrüchen, die direkt ins Wasser abfallen, und einem Meeresgrund, den man in sechs Metern Tiefe sieht.',
      alt: 'Weiß-blaues Fischerboot an Land gezogen im Hafen von Favignana',
    },
    levanzo: {
      descrizione: 'Dreißig weiße Häuser um einen kleinen Hafen, eine einzige Straße und die Grotta del Genovese mit ihren prähistorischen Zeichnungen.',
      alt: 'Blick auf die Insel Levanzo',
    },
  },

  passi: {
    titolo: 'So buchen Sie',
    testo: 'Drei Schritte, keine Online-Anzahlung.',
    lista: [
      {
        numero: 'Schritt 1',
        titolo: 'Tag auswählen',
        testo: 'Sehen Sie sich die Ausflüge an und nennen Sie uns das Datum. Wenn Sie unsicher sind, schreiben Sie uns: Wir sagen Ihnen, welcher Ausflug zum Wetter an diesen Tagen passt.',
      },
      {
        numero: 'Schritt 2',
        titolo: 'Bestätigung per WhatsApp',
        testo: 'Wir antworten innerhalb einer Stunde mit Verfügbarkeit, Uhrzeit und Treffpunkt. Bezahlt wird an Bord, bar oder mit Karte.',
      },
      {
        numero: 'Schritt 3',
        titolo: 'Wir sehen uns am Steg',
        testo: 'Kleiner Hafen von Salinagrande (Nautica Cordaro). Kommen Sie fünfzehn Minuten früher: Wir legen pünktlich ab, weil das Meer morgens ruhiger ist.',
      },
    ],
  },

  faq: {
    titolo: 'Häufige Fragen',
    lista: [
      {
        domanda: 'Wo geht es los?',
        risposta: <>Am kleinen Hafen von Nautica Cordaro in Salinagrande (TP). <a href={site.mappaLink} {...ext}>Standort in Google Maps öffnen</a>.</>,
      },
      {
        domanda: 'Was ist im Preis enthalten?',
        risposta: 'Treibstoff, Skipper, Mittagessen an Bord (warme Gerichte und Fischgerichte, abgestimmt auf die Allergene, die Sie uns nennen), Wasser und Getränke, Taucherbrillen und Schnorchel, Sonnenschutz und Versicherung. Nicht enthalten sind die Anlandegebühr auf Favignana und der Eintritt in die Grotta del Genovese.',
      },
      {
        domanda: 'Was soll ich mitbringen?',
        risposta: 'Badesachen, Handtuch, Sonnencreme, einen Hut und einen leichten Pullover für die Rückfahrt. An Bord sind alle barfuß, die Schuhe bleiben beim Einsteigen in einem Korb.',
      },
      {
        domanda: 'Und wenn das Wetter schlecht ist?',
        risposta: 'Wir entscheiden am Vorabend bis 20:00 Uhr. Wenn wir nicht rausfahren, verschieben wir auf einen anderen Tag oder stornieren kostenlos. Bei Seegang über Stärke 3 fahren wir nie raus.',
      },
      {
        domanda: 'Kann man mit kleinen Kindern kommen?',
        risposta: 'Ja, wir haben Schwimmwesten ab Größe 0. Für Kinder unter drei Jahren schreiben Sie uns bitte: Wir stimmen Tag, Seegang und Route gemeinsam ab.',
      },
      {
        domanda: 'Muss man schwimmen können?',
        risposta: 'Nein. Die Badestopps sind freiwillig und in flachem Wasser, und an Bord gibt es Schwimmringe und Westen für alle, die sicher ins Wasser gehen möchten.',
      },
    ],
  },

  finale: {
    titolo: 'Für morgen ist ruhige See vorhergesagt',
    titoloMeteo: {
      perfetto: 'Für morgen ist ruhige See vorhergesagt',
      buono: 'Morgen gutes Wetter zum Rausfahren',
      sconsigliato: 'Morgen raue See: das sind die besten Tage',
    },
    testo: 'Schreiben Sie uns auf WhatsApp Datum und Personenzahl. Wir antworten innerhalb einer Stunde, auch sonntags.',
    alt: 'Sonnenuntergang vom Meer aus vor den Ägadischen Inseln',
    etichetta: { perfetto: 'Idealer Tag', buono: 'Gut', sconsigliato: 'Raue See' },
    meteoTitolo: 'Das Meer in den nächsten 7 Tagen',
    fonte: <>Vorhersage von <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>, stündlich aktualisiert. Maximale Wellenhöhe und Wind in Knoten.</>,
    waPrenota: 'Hallo! Ich möchte einen Ausflug buchen.',
    waGiorno: (giorno) => `Hallo! Ich möchte für ${giorno} buchen.`,
    ariaGiorno: (giorno, etichetta) => `${giorno} buchen, ${etichetta}, per WhatsApp`,
  },

  footer: {
    descrizione: 'Schlauchbootausflüge und Bootsverleih mit Skipper zu den Ägadischen Inseln, ab Trapani.',
    escursioni: 'Ausflüge',
    informazioni: 'Informationen',
    doveSiamo: 'So finden Sie uns',
    orari: 'Täglich 8:00–20:00 Uhr, von April bis Oktober',
    info: { noi: 'Über uns', flotta: 'Die Flotte', faq: 'Häufige Fragen', condizioni: 'Buchungsbedingungen', privacy: 'Datenschutz und Cookies' },
    crediti: 'Fotos (verkleinert und zugeschnitten) von Wikimedia Commons:',
  },

  contatti: {
    titolo: 'Kontakt',
    testo: 'Schreiben Sie uns Datum und Personenzahl: Wir antworten innerhalb einer Stunde.',
    nome: 'Vor- und Nachname',
    email: 'E-Mail',
    telefono: 'Telefon',
    data: 'Wunschdatum',
    persone: 'Anzahl Personen',
    escursione: 'Gewünschter Ausflug',
    scegli: 'Ausflug auswählen',
    nonSo: 'Weiß ich noch nicht',
    messaggio: 'Nachricht',
    notaMessaggio: 'Bitte hier keine Allergien oder Unverträglichkeiten angeben: Wir fragen danach, wenn wir die Buchung bestätigen.',
    consenso: (link: ReactNode) => <>Ich habe die {link} gelesen.</>,
    linkPrivacy: 'Datenschutzerklärung',
    erroreConsenso: 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben, um die Anfrage zu senden.',
    erroreInvio: 'Senden fehlgeschlagen. Versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.',
    ok: 'Anfrage gesendet! Wir antworten so schnell wie möglich.',
    invio: 'Wird gesendet…',
    invia: 'Anfrage senden',
    oggetto: 'Anfrage Bootsausflug',
    recapiti: 'Kontaktdaten',
    mappaTitolo: 'Karte des Treffpunkts in Salinagrande',
    mostraMappa: 'Karte anzeigen',
    mappaCookie: 'Beim Laden der Karte kann Google Cookies auf Ihrem Gerät speichern.',
    dettagli: 'Details',
    apriMaps: 'In Google Maps öffnen',
  },

  tour: {
    fotoPrincipale: (titolo) => `Hauptfoto: ${titolo}`,
    foto: (i, titolo) => `Foto ${i}: ${titolo}`,
    fotoDi: (titolo) => `Fotos: ${titolo}`,
    itinerario: 'Route',
    incluso: 'Inklusive',
    nonIncluso: 'Nicht inklusive',
    persone: (n) => `max. ${n} Personen`,
    partenza: (orario) => `Abfahrt ${orario}`,
    aScelta: 'nach Wahl',
    chiama: 'Anrufen',
    altre: 'Weitere Ausflüge',
    waPrenota: (titolo) => `Hallo! Ich möchte buchen: ${titolo}.`,
  },

  notFound: {
    titolo: 'Seite nicht gefunden',
    testo: 'Die aufgerufene Adresse existiert nicht oder wurde verschoben.',
    home: 'Zur Startseite',
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: 'Favignana und Levanzo, ganzer Tag',
      breve: 'Favignana und Levanzo',
      descrizioneBreve: 'Die klassische Runde: Cala Rossa, Bue Marino, Stopp auf Levanzo und Rückfahrt vorbei an Cala Minnola.',
      descrizioneLunga: 'Unsere umfassendste Tour: das Beste beider Inseln an einem Tag. Wir starten am Vormittag, um die Buchten in Ruhe zu genießen, mit langen Badestopps und einem Mittagessen an Bord aus regionalen Produkten.',
      durata: '8 Stunden',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Abfahrt in Salinagrande um 10:00 Uhr',
        'Cala Rossa, Favignana — einstündiger Badestopp',
        'Grotte Bue Marino',
        'Mittagessen an Bord vor Levanzo',
        'Cala Minnola, Levanzo — Badestopp',
        'Rückkehr nach Salinagrande bis 18:00 Uhr',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: 'Favignana, halber Tag',
      breve: 'Halber Tag',
      descrizioneBreve: 'Abfahrt um 10:00 Uhr, Rückkehr am frühen Nachmittag. Die Ostseite der Insel und zwei Badestopps.',
      descrizioneLunga: 'Für alle, die nur einen halben Tag Zeit haben: Wir erkunden die Ostseite von Favignana mit den Tuffsteinbrüchen und dem klarsten Wasser, mit zwei Badestopps an verschiedenen Stellen.',
      durata: '4 Stunden',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Abfahrt in Salinagrande um 10:00 Uhr',
        'Cala Azzurra — Badestopp',
        'Lido Burrone — Badestopp',
        'Rückkehr nach Salinagrande bis 14:30 Uhr',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: 'Aperitivo bei Sonnenuntergang',
      breve: 'Aperitivo bei Sonnenuntergang',
      descrizioneBreve: 'Um 18:00 Uhr geht es Richtung Levanzo, bei einem Glas Grillo, während die Sonne hinter der Insel versinkt.',
      descrizioneLunga: 'Eine kurze Abendfahrt Richtung Levanzo, mit einem Glas regionalem Weißwein in der Hand, während die Sonne hinter der Insel untergeht. Keine Badestopps, nur Meer, Licht und ein gutes Glas Wein.',
      durata: '2,5 Stunden',
      incluso: ['Treibstoff', 'Skipper', 'Ein Glas regionaler Wein', 'Versicherung'],
      nonIncluso: [],
      itinerario: [
        'Abfahrt in Salinagrande um 18:00 Uhr',
        'Fahrt Richtung Levanzo',
        'Aperitivo an Bord bei Sonnenuntergang',
        'Rückkehr nach Salinagrande bis 20:30 Uhr',
      ],
    },
    'charter-privato-egadi': {
      titolo: 'Privatcharter zu den Ägadischen Inseln',
      breve: 'Privatcharter',
      descrizioneBreve: 'Ein Boot nur für Sie, die Route wird am Vorabend gemeinsam je nach Wetter festgelegt.',
      descrizioneLunga: 'Das ganze Boot mit Crew einen Tag lang für Sie. Die Route legen wir am Vorabend gemeinsam fest, je nach Wetter und Seegang, um genau dorthin zu fahren, wo Sie hinmöchten.',
      durata: '8 Stunden',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Abfahrtszeit nach Wahl',
        'Individuelle Route zwischen Favignana und Levanzo',
        'Badestopps wo und wann Sie möchten',
        'Rückkehr am Abend',
      ],
    },
    'mezza-giornata-privata': {
      titolo: 'Privater halber Tag',
      breve: 'Privater halber Tag',
      descrizioneBreve: 'Vier Stunden auf dem Meer für Familien und kleine Gruppen, mit Abfahrtszeit nach Wahl.',
      descrizioneLunga: 'Die kürzere Version des Privatcharters: vier Stunden auf dem Meer, ideal für Familien mit kleinen Kindern oder alle, die nur einen halben Tag Zeit haben, mit gemeinsam vereinbarter Abfahrtszeit.',
      durata: '4 Stunden',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Abfahrtszeit nach Wahl',
        'Ein oder zwei Badestopps je nach Ziel',
        'Rückkehr nach etwa vier Stunden',
      ],
    },
  },

  privacy: {
    titolo: 'Datenschutz- und Cookie-Erklärung',
    intro: 'Diese Seite erklärt, welche personenbezogenen Daten wir erheben, wenn Sie die Website besuchen, uns kontaktieren oder einen Ausflug buchen, wozu wir sie verwenden und welche Rechte Sie haben. Sie wird gemäß Art. 13 und 14 der Verordnung (EU) 2016/679 (DSGVO) und des italienischen Gesetzesdekrets 196/2003 (Datenschutzkodex) bereitgestellt. Dies ist eine Übersetzung: Im Zweifelsfall gilt die italienische Fassung.',
    corpo: (
      <>
        <h2>1. Wer ist der Verantwortliche</h2>
        <p>
          {site.ragioneSociale}, {site.partitaIva}, mit Sitz in {SEDE_LEGALE}.<br />
          E-Mail: {email} · Telefon: <a href={site.telefonoHref}>{site.telefono}</a>
        </p>
        <p>Wir haben keinen Datenschutzbeauftragten (DSB) benannt, da dies für unsere Tätigkeit nicht vorgeschrieben ist.</p>

        <h2>2. Welche Daten wir verarbeiten und warum</h2>

        <h3>Informationsanfragen</h3>
        <p>
          Sie schreiben uns über das Kontaktformular, per E-Mail, Telefon oder WhatsApp. Wir verarbeiten die Daten, die Sie uns geben: Name,
          E-Mail, Telefon, Datum und Personenzahl, den gewünschten Ausflug, den Text der Nachricht.
        </p>
        <ul>
          <li><strong>Zweck:</strong> Ihre Anfrage beantworten und eine mögliche Buchung vorbereiten.</li>
          <li><strong>Rechtsgrundlage:</strong> vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).</li>
        </ul>

        <h3>Buchung und Ausflug</h3>
        <p>
          Wenn Sie buchen, verarbeiten wir die Daten, die zur Organisation des Tages nötig sind: Namen der Teilnehmenden,
          Kontaktdaten, Datum, gewählte Leistung, Zahlung.
        </p>
        <ul>
          <li><strong>Zweck:</strong> die gebuchte Leistung erbringen, vor und während des Ausflugs mit Ihnen kommunizieren, wetterbedingte Verschiebungen organisieren.</li>
          <li><strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).</li>
        </ul>

        <h3>Allergien und Unverträglichkeiten</h3>
        <p>
          Für das Mittagessen an Bord fragen wir, ob jemand Lebensmittelallergien oder -unverträglichkeiten hat. Das sind
          Gesundheitsdaten, daher verarbeiten wir sie nur mit Ihrer ausdrücklichen Einwilligung, um die wir Sie
          bei der Buchungsbestätigung bitten (Art. 9 Abs. 2 lit. a DSGVO). Wir verwenden diese Daten nur, um passende Mahlzeiten zuzubereiten.
          Sie können sie auch nicht angeben oder Ihre Einwilligung jederzeit widerrufen: In diesem Fall können wir kein passendes Menü garantieren.
        </p>
        <p>Bitte nicht im Kontaktformular angeben: Wir erfragen sie bei der Bestätigung.</p>

        <h3>Gesetzliche Pflichten</h3>
        <ul>
          <li><strong>Zweck:</strong> Rechnungsstellung, Buchhaltung und weitere gesetzliche Pflichten, einschließlich der Schiffssicherheit.</li>
          <li><strong>Rechtsgrundlage:</strong> rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).</li>
        </ul>

        <h3>Nutzung der Website</h3>
        <p>
          Unser Hosting-Anbieter erfasst automatisch einige technische Daten der Besuche, etwa
          IP-Adresse, Browser und aufgerufene Seite. Sie dienen nur dazu, die Website anzuzeigen und vor Missbrauch zu schützen.
        </p>
        <ul>
          <li><strong>Rechtsgrundlage:</strong> berechtigtes Interesse an Sicherheit und Funktion der Website (Art. 6 Abs. 1 lit. f DSGVO).</li>
        </ul>

        <h2>3. Müssen Sie uns Ihre Daten geben?</h2>
        <p>
          Nein. Ohne Kontaktdaten können wir Ihnen jedoch nicht antworten, und ohne Buchungsdaten können wir den
          Ausflug nicht organisieren. Angaben zu Allergien und Unverträglichkeiten sind immer freiwillig. Wir treffen keine
          automatisierten Entscheidungen und betreiben kein Profiling.
        </p>

        <h2>4. An wen wir Daten weitergeben</h2>
        <p>Die Daten werden weder veröffentlicht noch verkauft. Sie sind nur dem Verantwortlichen, dem Skipper und, soweit nötig, folgenden Stellen bekannt:</p>
        <ul>
          <li><strong>Cloudflare, Inc.</strong>: hostet die Website.</li>
          <li><strong>Google</strong>: betreibt unser E-Mail-Postfach (Gmail). Stellt die Google-Maps-Karte bereit, die nur auf Ihren Wunsch geladen wird (siehe Abschnitt Cookies).</li>
          <li><strong>{FORNITORE_MODULO}</strong>: empfängt die Nachrichten aus dem Kontaktformular und leitet sie an uns weiter.</li>
          <li><strong>WhatsApp (Meta)</strong>: Wenn Sie uns über WhatsApp schreiben, verarbeitet Meta die Daten als eigenständiger Verantwortlicher gemäß seiner eigenen Richtlinie.</li>
          <li><strong>Lieferanten des Mittagessens</strong> (Messina Nicasio, Nereide): erhalten nur die Anzahl der Mahlzeiten und etwaige Allergien oder Unverträglichkeiten, ohne Namen.</li>
          <li><strong>Steuerberater</strong>: für steuerliche Pflichten.</li>
          <li><strong>Behörden</strong>: nur wenn das Gesetz es verlangt.</li>
        </ul>
        <p>
          Dienstleister, die Daten in unserem Auftrag verarbeiten, sind als Auftragsverarbeiter benannt (Art. 28 DSGVO).
          Einige, wie Cloudflare und Google, können Daten außerhalb der Europäischen Union übermitteln. In diesen Fällen
          erfolgt die Übermittlung mit den in der DSGVO vorgesehenen Garantien: Teilnahme am EU-U.S. Data Privacy
          Framework oder von der Europäischen Kommission genehmigte Standardvertragsklauseln.
        </p>

        <h2>5. Wie lange wir Daten speichern</h2>
        <ul>
          <li>Anfragen, aus denen keine Buchung wird: 12 Monate ab dem letzten Kontakt.</li>
          <li>Buchungs- und Zahlungsdaten: 10 Jahre, wie vom Steuerrecht verlangt (Art. 2220 des italienischen Zivilgesetzbuchs).</li>
          <li>Allergien und Unverträglichkeiten: werden nach dem Ausflug gelöscht.</li>
          <li>Technische Nutzungsdaten: so lange wie unbedingt nötig, gemäß den Richtlinien des Hosting-Anbieters.</li>
        </ul>

        <h2>6. Ihre Rechte</h2>
        <p>Sie können jederzeit von uns verlangen:</p>
        <ul>
          <li>zu erfahren, ob wir Ihre Daten verarbeiten, und eine Kopie zu erhalten (Auskunft, Art. 15);</li>
          <li>sie zu berichtigen (Art. 16) oder zu löschen (Art. 17);</li>
          <li>ihre Verarbeitung einzuschränken (Art. 18);</li>
          <li>sie in einem maschinenlesbaren Format zu erhalten (Datenübertragbarkeit, Art. 20);</li>
          <li>der Verarbeitung auf Grundlage berechtigter Interessen zu widersprechen (Art. 21);</li>
          <li>eine erteilte Einwilligung zu widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.</li>
        </ul>
        <p>
          Schreiben Sie uns an {email}: Wir antworten innerhalb eines Monats. Wenn Sie meinen, dass die Verarbeitung nicht korrekt ist, können Sie
          Beschwerde bei der italienischen Datenschutzbehörde (Garante per la protezione dei dati personali) einlegen{' '}
          (<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>).
        </p>

        <h2 id="cookie">7. Cookies</h2>
        <p>
          Diese Website verwendet keine Profiling-Cookies, Statistik- oder Werbewerkzeuge und setzt keine
          eigenen Cookies. Die Schriften werden direkt von unserem Server geladen, ohne
          Anfragen an externe Dienste.
        </p>
        <p>
          Der einzige Drittanbieter-Inhalt ist die Google-Maps-Karte auf der Kontaktseite. Sie wird nicht
          automatisch geladen: Sie erscheint erst, wenn Sie auf „Karte anzeigen“ klicken. Ab diesem Moment kann Google eigene
          Cookies setzen, gemäß seiner{' '}
          <a href="https://policies.google.com/privacy" {...ext}>Datenschutzerklärung</a>.
          Wenn Sie das nicht möchten, können Sie den Link „In Google Maps öffnen“ verwenden oder die Karte einfach nicht laden.
        </p>
        <p>
          Deshalb zeigt die Website, wie in den Cookie-Leitlinien der italienischen Datenschutzbehörde vom 10. Juni 2021 vorgesehen,
          kein Banner: Ohne Ihr Zutun wird kein nicht-technisches Cookie gesetzt.
        </p>
        <p>
          Die Links zu Instagram, TikTok und WhatsApp öffnen externe Dienste, die ihre eigenen Regeln für
          Daten und Cookies anwenden.
        </p>

        <h2>8. Minderjährige</h2>
        <p>
          Buchungen müssen von Erwachsenen vorgenommen werden. Die Daten minderjähriger Teilnehmender
          erhalten wir von den Sorgeberechtigten.
        </p>

        <h2>9. Änderungen</h2>
        <p>
          Wenn wir die Art der Datenverarbeitung ändern, aktualisieren wir diese Seite. Letzte Aktualisierung: 12. Oktober 2026.
        </p>
      </>
    ),
  },
}

export default de
