import { ReactNode } from 'react'
import { site } from '../data/site'
import type { Dict } from '.'
import { FORNITORE_MODULO, SEDE_LEGALE } from './it'

const inclusoStandard = ['Fuel', 'Skipper', 'Lunch on board', 'Water and soft drinks', 'Masks and snorkels', 'Shade', 'Insurance']
const nonInclusoStandard = ['Favignana landing tax', 'Entrance to the Grotta del Genovese']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const en: Dict = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — Boat trips to Favignana and Levanzo from Trapani',
      description: 'RIB boat trips to the Egadi Islands from Trapani. Favignana, Levanzo, small-group tours and private charters with a local skipper.',
    },
    contatti: {
      title: 'Contact and bookings — Bellavia Egadi Charter',
      description: 'Book a boat trip to the Egadi Islands: tell us the date and how many you are, we reply within an hour.',
    },
    privacy: {
      title: 'Privacy and cookie policy — Bellavia Egadi Charter',
      description: 'What personal data we collect, why we use it and what your rights are.',
    },
    notFound: { title: 'Page not found — Bellavia Egadi Charter' },
    jsonLd: 'RIB boat trips to the Egadi Islands (Favignana and Levanzo) departing from Trapani.',
  },

  nav: { escursioni: 'Trips', flotta: 'Fleet', isole: 'The islands', noi: 'About us', contatti: 'Contact' },

  header: {
    navPrincipale: 'Main navigation',
    navMobile: 'Mobile navigation',
    apriMenu: 'Open menu',
    chiudiMenu: 'Close menu',
    lingua: 'Language',
    prenotaOra: 'Book now',
  },

  comune: {
    scriviciWa: 'Message us on WhatsApp',
    waInfo: "Hi! I'd like some information about your boat trips.",
    da: 'from',
    unita: { persona: 'per person', gommone: 'per boat' },
    tourPrivato: 'Private tour',
    tourCondiviso: 'Shared tour',
  },

  hero: {
    titolo: 'Favignana and Levanzo by boat from Trapani',
    testo: 'Days at sea among the coves of the Egadi Islands, with a skipper who was born here. Small groups, departure from Salinagrande at 10:00.',
    alt: 'Turquoise sea seen from above with boats and yachts at anchor',
    vediEscursioni: 'See the trips',
  },

  fiducia: [
    { titolo: 'Local skipper from Trapani', testo: "We know the coves you won't find on any map" },
    { titolo: 'Maximum 10 people', testo: 'Never a crowded boat, never a queue for the ladder' },
    {
      titolo: 'Lunch and drinks on board',
      testo: <>Hot dishes from <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a> and seafood from <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>, based on the allergens you tell us about</>,
    },
    { titolo: 'Boarding at Salinagrande', testo: 'Nautica Cordaro marina, with location on Maps', href: site.mappaLink },
  ],

  tourGrid: {
    titolo: 'Our days at sea',
    testo: 'Five ways to see the Egadi Islands. All trips depart from Salinagrande (TP) and return before sunset, except the aperitivo.',
  },

  tourCard: {
    alt: (titolo) => `${titolo} — boat trip to the Egadi Islands`,
    max: (n) => `max ${n}`,
    richiediPreventivo: 'Request a quote',
    prenota: 'Book',
  },

  chiSiamo: {
    titolo: 'Born and raised on this sea',
    paragrafo1: 'On your trip you will be accompanied by a local skipper who knows and loves this land. Having you on board is a pleasure: we take care of every detail to give you an unforgettable day.',
    paragrafo2: "We set off in the morning, when the sea is calmest and clearest, for a day of relaxing and exploring the coves of the Egadi Islands. What are you waiting for?",
    firma: 'Marco Bellavia, captain',
    alt: 'Our Breva RIB seen from above, cruising on turquoise water',
    cta: 'Book your trip',
  },

  fleet: {
    titolo: 'The fleet',
    testo: (modello) => `Two ${modello} RIBs, identical and looked after in every detail.`,
    label: (modello) => `Photos of the ${modello} RIB`,
    descrizione: 'Two identical RIBs, so even a large group can split up or travel together. High tubes at the bow and a spacious cockpit: comfortable for swim stops, with a toilet on board for long days.',
    specifiche: [
      { valore: '2', label: 'boats' },
      { valore: '8.5 m', label: 'length' },
      { valore: '3 m', label: 'beam' },
      { valore: '10', label: 'people on board' },
      { valore: 'Cat. B', label: 'CE certification' },
      { valore: 'Toilet', label: 'on board' },
    ],
    alt: [
      'Breva 800 RIB with sunshade, side view',
      'Breva 800 RIB under way',
      'Breva 800 RIB under way at sunset',
      'The two Breva 800 RIBs under way',
      'Access to the on-board toilet from the stern deck',
      'On-board bathroom with mirror and sink',
      'Sink of the on-board bathroom',
      'Toilet of the on-board bathroom',
    ],
  },

  slideshow: {
    carosello: 'carousel',
    precedente: 'Previous photo',
    successiva: 'Next photo',
    vai: (i, n) => `Go to photo ${i} of ${n}`,
  },

  isole: {
    titolo: 'Where we go',
    testo: 'Two islands half an hour from Trapani by boat, completely different from each other.',
    favignana: {
      descrizione: 'The butterfly-shaped island, with tuff quarries dropping straight into the water and a seabed you can see six metres down.',
      alt: 'White and blue fishing boat pulled ashore in the harbour of Favignana',
    },
    levanzo: {
      descrizione: 'Thirty white houses around a little harbour, a single road and the Grotta del Genovese with its prehistoric drawings.',
      alt: 'View of the island of Levanzo',
    },
  },

  passi: {
    titolo: 'How to book',
    testo: 'Three steps, no online deposit required.',
    lista: [
      {
        numero: 'Step 1',
        titolo: 'Choose your day',
        testo: "Look at the trips and tell us the date. If you're not sure, message us: we'll tell you which one suits the weather on those days.",
      },
      {
        numero: 'Step 2',
        titolo: 'We confirm on WhatsApp',
        testo: 'We reply within an hour with availability, time and boarding point. You pay on board, in cash or by card.',
      },
      {
        numero: 'Step 3',
        titolo: 'See you at boarding',
        testo: 'Salinagrande marina (Nautica Cordaro). Arrive fifteen minutes early: we leave on time because the sea is calmer in the morning.',
      },
    ],
  },

  faq: {
    titolo: 'Frequently asked questions',
    lista: [
      {
        domanda: 'Where do we leave from?',
        risposta: <>From the Nautica Cordaro marina in Salinagrande (TP). <a href={site.mappaLink} {...ext}>Open the location in Google Maps</a>.</>,
      },
      {
        domanda: 'What is included in the price?',
        risposta: "Fuel, skipper, lunch on board (hot dishes and seafood, taking into account the allergens you tell us about), water and soft drinks, masks and snorkels, shade and insurance. The Favignana landing tax and the entrance to the Grotta del Genovese are not included.",
      },
      {
        domanda: 'What should I bring?',
        risposta: 'Swimsuit, towel, sunscreen, a hat and a light sweatshirt for the way back. We go barefoot on board: shoes stay in a basket at boarding.',
      },
      {
        domanda: 'What if the weather is bad?',
        risposta: "We decide the evening before by 20:00. If we can't go out, we move to another day or cancel at no cost. We never go out with seas above force 3.",
      },
      {
        domanda: 'Can we come with small children?',
        risposta: 'Yes, we have life jackets from size 0. For children under three, message us: we will decide together on the day, the sea and the route.',
      },
      {
        domanda: 'Do I need to be able to swim?',
        risposta: 'No. Swim stops are optional and in shallow water, and on board there are rings and life jackets for anyone who wants to get in the water safely.',
      },
    ],
  },

  finale: {
    titolo: 'Pick your day at sea',
    titoloMeteo: {
      perfetto: 'Calm sea forecast for tomorrow',
      buono: 'Good sea for going out tomorrow',
      sconsigliato: 'Rough sea tomorrow: here are the best days',
    },
    testo: 'Message us on WhatsApp with the date and how many you are. We reply within an hour, even on Sundays.',
    alt: 'Sunset seen from the sea off the Egadi Islands',
    etichetta: { perfetto: 'Ideal day', buono: 'Good', sconsigliato: 'Rough sea' },
    meteoTitolo: 'Sea over the next 7 days',
    fonte: <>Forecast by <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>, updated every hour. Maximum wave height and wind in knots.</>,
    waPrenota: "Hi! I'd like to book a boat trip.",
    waGiorno: (giorno) => `Hi! I'd like to book for ${giorno}.`,
    ariaGiorno: (giorno, etichetta) => `Book ${giorno}, ${etichetta}, on WhatsApp`,
  },

  footer: {
    descrizione: 'RIB boat trips and skippered boat hire to the Egadi Islands, from Trapani.',
    escursioni: 'Trips',
    informazioni: 'Information',
    doveSiamo: 'Where we are',
    orari: 'Every day 8:00–20:00, April to October',
    info: { noi: 'About us', flotta: 'The fleet', faq: 'FAQ', condizioni: 'Booking terms', privacy: 'Privacy and cookies' },
    crediti: 'Photos (resized and cropped) from Wikimedia Commons:',
  },

  contatti: {
    titolo: 'Contact us',
    testo: 'Tell us the date and how many you are: we reply within an hour.',
    nome: 'Full name',
    email: 'Email',
    telefono: 'Phone',
    data: 'Preferred date',
    persone: 'Number of people',
    escursione: 'Trip you are interested in',
    scegli: 'Choose a trip',
    nonSo: "I don't know yet",
    messaggio: 'Message',
    notaMessaggio: "Don't write allergies or intolerances here: we will ask you when we confirm the booking.",
    consenso: (link: ReactNode) => <>I have read the {link}.</>,
    linkPrivacy: 'privacy policy',
    erroreConsenso: 'Please confirm you have read the privacy policy to send your request.',
    erroreInvio: 'Sending failed. Try again or message us on WhatsApp.',
    ok: 'Request sent! We will reply as soon as possible.',
    invio: 'Sending…',
    invia: 'Send request',
    oggetto: 'Boat trip request',
    recapiti: 'Contact details',
    mappaTitolo: 'Map of the boarding point in Salinagrande',
    mostraMappa: 'Show map',
    mappaCookie: 'When the map loads, Google may set cookies on your device.',
    dettagli: 'Details',
    apriMaps: 'Open in Google Maps',
  },

  tour: {
    fotoPrincipale: (titolo) => `Main photo of ${titolo}`,
    foto: (i, titolo) => `Photo ${i} of ${titolo}`,
    fotoDi: (titolo) => `Photos of ${titolo}`,
    itinerario: 'Itinerary',
    incluso: 'Included',
    nonIncluso: 'Not included',
    persone: (n) => `max ${n} people`,
    partenza: (orario) => `Departure ${orario}`,
    aScelta: 'your choice',
    chiama: 'Call',
    altre: 'Other trips',
    waPrenota: (titolo) => `Hi! I'd like to book: ${titolo}.`,
  },

  notFound: {
    titolo: 'Page not found',
    testo: "The address you opened doesn't exist or has been moved.",
    home: 'Back to the home page',
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: 'Favignana and Levanzo, full day',
      breve: 'Favignana and Levanzo',
      descrizioneBreve: 'The classic tour: Cala Rossa, Bue Marino, a stop at Levanzo and back past Cala Minnola.',
      descrizioneLunga: 'Our most complete tour: the best of both islands in a single day. We leave in the morning to enjoy the coves at a relaxed pace, with long swim stops and lunch on board made with local produce.',
      durata: '8 hours',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Departure from Salinagrande at 10:00',
        'Cala Rossa, Favignana — one-hour swim stop',
        'Bue Marino cave',
        'Lunch on board off Levanzo',
        'Cala Minnola, Levanzo — swim stop',
        'Back in Salinagrande by 18:00',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: 'Favignana, half day',
      breve: 'Half day',
      descrizioneBreve: 'Departure at 10:00, back in the early afternoon. The east side of the island and two swim stops.',
      descrizioneLunga: 'Designed for those with only half a day free: we explore the east side of Favignana, the one with the tuff quarries and the clearest water, with two swim stops in different spots.',
      durata: '4 hours',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Departure from Salinagrande at 10:00',
        'Cala Azzurra — swim stop',
        'Lido Burrone — swim stop',
        'Back in Salinagrande by 14:30',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: 'Sunset aperitivo',
      breve: 'Sunset aperitivo',
      descrizioneBreve: 'We head out at 18:00 towards Levanzo and sip a glass of Grillo while the sun sets behind the island.',
      descrizioneLunga: 'A short evening trip towards Levanzo, with a glass of local white wine in hand while the sun sets behind the island. No swim stops, just sea, light and a good glass of wine.',
      durata: '2.5 hours',
      incluso: ['Fuel', 'Skipper', 'A glass of local wine', 'Insurance'],
      nonIncluso: [],
      itinerario: [
        'Departure from Salinagrande at 18:00',
        'Cruise towards Levanzo',
        'Aperitivo on board at sunset',
        'Back in Salinagrande by 20:30',
      ],
    },
    'charter-privato-egadi': {
      titolo: 'Private charter to the Egadi Islands',
      breve: 'Private charter',
      descrizioneBreve: 'A boat just for you, with the route planned together the evening before based on the weather.',
      descrizioneLunga: 'The whole boat and crew at your disposal for a day. We plan the route together the evening before, looking at the weather and sea conditions, to go exactly where you want.',
      durata: '8 hours',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Departure time of your choice',
        'Custom route between Favignana and Levanzo',
        'Swim stops where and when you like',
        'Back in the evening',
      ],
    },
    'mezza-giornata-privata': {
      titolo: 'Private half day',
      breve: 'Private half day',
      descrizioneBreve: 'Four hours at sea for families and small groups, with a departure time of your choice.',
      descrizioneLunga: 'The shorter version of the private charter: four hours at sea, ideal for families with small children or anyone with only half a day available, with a departure time agreed together.',
      durata: '4 hours',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Departure time of your choice',
        'One or two swim stops depending on the destination',
        'Back after about four hours',
      ],
    },
  },

  privacy: {
    titolo: 'Privacy and cookie policy',
    intro: 'This page explains what personal data we collect when you visit the site, contact us or book a trip, why we use it and what your rights are. It is provided under Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR) and Italian Legislative Decree 196/2003 (Privacy Code). This is a translation: in case of discrepancies, the Italian version prevails.',
    corpo: (
      <>
        <h2>1. Who is the data controller</h2>
        <p>
          {site.ragioneSociale}, {site.partitaIva}, registered office at {SEDE_LEGALE}.<br />
          Email: {email} · Phone: <a href={site.telefonoHref}>{site.telefono}</a>
        </p>
        <p>We have not appointed a data protection officer (DPO), as it is not mandatory for our activity.</p>

        <h2>2. What data we process and why</h2>

        <h3>Information requests</h3>
        <p>
          You write to us through the contact form, email, phone or WhatsApp. We process the data you give us: name,
          email, phone, date and number of people, the trip you are interested in, the text of your message.
        </p>
        <ul>
          <li><strong>Purpose:</strong> to answer your request and prepare a possible booking.</li>
          <li><strong>Legal basis:</strong> pre-contractual measures taken at your request (Art. 6.1.b GDPR).</li>
        </ul>

        <h3>Booking and trip</h3>
        <p>
          If you book, we process the data needed to organise the day: names of the participants,
          contact details, date, chosen service, payment.
        </p>
        <ul>
          <li><strong>Purpose:</strong> to provide the booked service, communicate with you before and during the trip, and handle changes due to weather.</li>
          <li><strong>Legal basis:</strong> performance of the contract (Art. 6.1.b GDPR).</li>
        </ul>

        <h3>Allergies and intolerances</h3>
        <p>
          For lunch on board we ask whether anyone has food allergies or intolerances. These are health
          data, so we only process them with your explicit consent, which we ask for when you confirm the
          booking (Art. 9.2.a GDPR). We use this data only to prepare suitable meals. You may choose not to
          provide it or withdraw your consent at any time: in that case we cannot guarantee a suitable menu.
        </p>
        <p>Do not write them in the contact form: we collect them when we confirm.</p>

        <h3>Legal obligations</h3>
        <ul>
          <li><strong>Purpose:</strong> invoicing, accounting and other legal obligations, including those relating to navigation safety.</li>
          <li><strong>Legal basis:</strong> legal obligation (Art. 6.1.c GDPR).</li>
        </ul>

        <h3>Browsing the site</h3>
        <p>
          Our hosting provider automatically records some technical data about visits, such as
          IP address, browser and requested page. It is used only to serve the site and protect it from abuse.
        </p>
        <ul>
          <li><strong>Legal basis:</strong> legitimate interest in the security and operation of the site (Art. 6.1.f GDPR).</li>
        </ul>

        <h2>3. Are you required to give us your data?</h2>
        <p>
          No. However, without contact details we cannot reply to you, and without booking details we cannot
          organise the trip. Data on allergies and intolerances is always optional. We do not make
          automated decisions and we do not carry out profiling.
        </p>

        <h2>4. Who we share the data with</h2>
        <p>The data is not disclosed or sold. It is known only to the controller, the skipper and, as far as necessary, the following parties:</p>
        <ul>
          <li><strong>Cloudflare, Inc.</strong>: hosts the site.</li>
          <li><strong>Google</strong>: manages our mailbox (Gmail). It provides the Google Maps map, which loads only if you ask for it (see the Cookies section).</li>
          <li><strong>{FORNITORE_MODULO}</strong>: receives and forwards to us the messages from the contact form.</li>
          <li><strong>WhatsApp (Meta)</strong>: if you choose to message us on WhatsApp, Meta processes the data as an independent controller, under its own policy.</li>
          <li><strong>Lunch suppliers</strong> (Messina Nicasio, Nereide): receive only the number of meals and any allergies or intolerances, without names.</li>
          <li><strong>Accountant</strong>: for tax obligations.</li>
          <li><strong>Public authorities</strong>: only when required by law.</li>
        </ul>
        <p>
          Suppliers that process data on our behalf are appointed as data processors (Art. 28 GDPR).
          Some, such as Cloudflare and Google, may transfer data outside the European Union. In those cases
          the transfer takes place with the safeguards provided by the GDPR: participation in the EU-U.S. Data Privacy
          Framework or standard contractual clauses approved by the European Commission.
        </p>

        <h2>5. How long we keep the data</h2>
        <ul>
          <li>Requests that do not become a booking: 12 months from the last contact.</li>
          <li>Booking and payment data: 10 years, as required by tax law (Art. 2220 of the Italian Civil Code).</li>
          <li>Allergies and intolerances: deleted at the end of the trip.</li>
          <li>Technical browsing data: for as long as strictly necessary, according to the hosting provider's policies.</li>
        </ul>

        <h2>6. Your rights</h2>
        <p>At any time you can ask us to:</p>
        <ul>
          <li>know whether we process your data and get a copy of it (access, Art. 15);</li>
          <li>correct it (rectification, Art. 16) or delete it (Art. 17);</li>
          <li>restrict its processing (Art. 18);</li>
          <li>receive it in a machine-readable format (portability, Art. 20);</li>
          <li>object to processing based on legitimate interest (Art. 21);</li>
          <li>withdraw consent already given. Withdrawal does not affect the lawfulness of processing carried out up to that point.</li>
        </ul>
        <p>
          Write to us at {email}: we reply within one month. If you believe the processing is not correct you can
          lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali){' '}
          (<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>).
        </p>

        <h2 id="cookie">7. Cookies</h2>
        <p>
          This site does not use profiling cookies, analytics or advertising tools, and does not set
          its own cookies. Fonts are loaded directly from our server, without
          requests to external services.
        </p>
        <p>
          The only third-party content is the Google Maps map on the Contact page. It does not load
          automatically: it appears only if you press "Show map". From that moment Google may set its own
          cookies, according to its{' '}
          <a href="https://policies.google.com/privacy" {...ext}>privacy policy</a>.
          If you prefer not to, you can use the "Open in Google Maps" link or simply not load the map.
        </p>
        <p>
          For this reason, as provided by the Italian Data Protection Authority's cookie guidelines of 10 June 2021,
          the site does not show a banner: no non-technical cookie is set without an action on your part.
        </p>
        <p>
          The links to Instagram, TikTok and WhatsApp open external services, which apply their own rules on
          data and cookies.
        </p>

        <h2>8. Minors</h2>
        <p>
          Bookings must be made by an adult. Data of minors taking part in the trip is
          provided to us by the person with parental responsibility.
        </p>

        <h2>9. Changes</h2>
        <p>
          If we change the way we process data we will update this page. Last updated: 12 October 2026.
        </p>
      </>
    ),
  },
}

export default en
