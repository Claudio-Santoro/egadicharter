export const site = {
  nome: 'Bellavia',
  claim: 'Egadi Charter',
  telefono: '+39 0923 000 000',
  telefonoHref: 'tel:+390923000000',
  email: 'info@bellaviaegadicharter.it',
  whatsappNumero: '39XXXXXXXXXX',
  indirizzo: {
    riga1: 'Marina di Trapani, pontile C',
    riga2: 'Via Ammiraglio Staiti',
    riga3: '91100 Trapani (TP)',
  },
  orari: "Tutti i giorni 8:00–20:00, da aprile a ottobre",
  partitaIva: 'P. IVA 00000000000',
  mappaSrc: 'https://www.google.com/maps?q=Marina+di+Trapani&output=embed',

  nav: [
    { href: '/#escursioni', label: 'Escursioni' },
    { href: '/#flotta', label: 'Flotta' },
    { href: '/#isole', label: 'Le isole' },
    { href: '/#noi', label: 'Chi siamo' },
    { href: '/contatti', label: 'Contatti' },
  ],

  hero: {
    titolo: 'Favignana e Levanzo, in barca da Trapani',
    testo: "Giornate in mare tra le cale delle Egadi, con uno skipper che è nato qui. Gruppi piccoli, partenza dal porto di Trapani alle 9:30.",
  },

  fiducia: [
    {
      titolo: 'Skipper trapanese',
      testo: 'Conosciamo le cale che non trovi sulle mappe',
    },
    {
      titolo: 'Massimo 12 persone',
      testo: 'Mai barche affollate, mai fila per la scaletta',
    },
    {
      titolo: 'Pranzo e bevande a bordo',
      testo: 'Pane cunzato, frutta di stagione, acqua sempre fresca',
    },
    {
      titolo: 'Imbarco in centro',
      testo: 'Marina di Trapani, a due passi dal parcheggio',
    },
  ],

  chiSiamo: {
    titolo: 'Tre generazioni, lo stesso tratto di mare',
    paragrafo1: "Mio nonno pescava tonno davanti a Favignana, mio padre ha comprato il primo gozzo nel 1987. Oggi portiamo in giro chi arriva a Trapani, con la stessa idea di allora: uscire presto, stare dove il mare è bello e tornare quando il sole scende.",
    paragrafo2: 'Non facciamo partenze a raffica. Una barca, un equipaggio, una giornata: se il tempo non promette bene ve lo diciamo il giorno prima e si sposta, senza penali.',
    firma: 'Salvatore Bellavia, comandante',
    immagine: '/images/chi-siamo.jpg',
  },

  passi: [
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
      titolo: 'Ci vediamo al pontile',
      testo: 'Marina di Trapani, pontile C. Arriva quindici minuti prima: si parte puntuali perché il mare la mattina è più calmo.',
    },
  ],

  ctaFinale: {
    titolo: 'Il mare domani è previsto calmo',
    testo: "Scrivici su WhatsApp con la data e quante persone siete. Rispondiamo entro un'ora, anche la domenica.",
  },

  footer: {
    descrizione: 'Escursioni in barca e noleggio con skipper alle Isole Egadi, da Trapani.',
    colonnaEscursioni: [
      { label: 'Favignana e Levanzo', href: '/escursioni/favignana-levanzo-giornata-intera' },
      { label: 'Mezza giornata', href: '/escursioni/favignana-mezza-giornata' },
      { label: 'Giro in gozzo', href: '/escursioni/giro-isola-gozzo' },
      { label: 'Aperitivo al tramonto', href: '/escursioni/aperitivo-al-tramonto' },
      { label: 'Charter privato', href: '/escursioni/charter-privato-egadi' },
    ],
    colonnaInfo: [
      { label: 'Chi siamo', href: '/#noi' },
      { label: 'La flotta', href: '/#flotta' },
      { label: 'Domande frequenti', href: '/#faq' },
      { label: 'Condizioni di prenotazione', href: '/contatti' },
      { label: 'Privacy e cookie', href: '/contatti' },
    ],
  },
}
