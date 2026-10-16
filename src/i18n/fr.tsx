import { ReactNode } from 'react'
import { site } from '../data/site'
import type { Dict } from '.'
import { FORNITORE_MODULO, SEDE_LEGALE } from './it'

const inclusoStandard = ['Carburant', 'Skipper', 'Déjeuner à bord', 'Eau et boissons', 'Masques et tubas', 'Taud de soleil', 'Assurance']
const nonInclusoStandard = ['Taxe de débarquement à Favignana', 'Entrée à la Grotta del Genovese']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const fr: Dict = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — Excursions en semi-rigide à Favignana et Levanzo depuis Trapani',
      description: 'Excursions en bateau semi-rigide aux îles Égades depuis Trapani. Favignana, Levanzo, sorties en groupe et charters privés avec un skipper local.',
    },
    contatti: {
      title: 'Contact et réservations — Bellavia Egadi Charter',
      description: 'Réservez une excursion en bateau aux îles Égades : indiquez-nous la date et le nombre de personnes, nous répondons en une heure.',
    },
    privacy: {
      title: 'Politique de confidentialité et cookies — Bellavia Egadi Charter',
      description: 'Quelles données personnelles nous collectons, pourquoi nous les utilisons et quels sont vos droits.',
    },
    notFound: { title: 'Page introuvable — Bellavia Egadi Charter' },
    jsonLd: 'Excursions en bateau semi-rigide aux îles Égades (Favignana et Levanzo) au départ de Trapani.',
  },

  nav: { escursioni: 'Excursions', flotta: 'Flotte', isole: 'Les îles', noi: 'Qui sommes-nous', contatti: 'Contact' },

  header: {
    navPrincipale: 'Navigation principale',
    navMobile: 'Navigation mobile',
    apriMenu: 'Ouvrir le menu',
    chiudiMenu: 'Fermer le menu',
    lingua: 'Langue',
    prenotaOra: 'Réserver',
  },

  comune: {
    scriviciWa: 'Écrivez-nous sur WhatsApp',
    waInfo: "Bonjour ! J'aimerais avoir des informations sur les excursions.",
    da: 'à partir de',
    unita: { persona: 'par personne', gommone: 'par bateau' },
    tourPrivato: 'Sortie privée',
    tourCondiviso: 'Sortie partagée',
  },

  hero: {
    titolo: 'Favignana et Levanzo en bateau depuis Trapani',
    testo: "Des journées en mer entre les criques des Égades, avec un skipper né ici. Petits groupes, départ de Salinagrande à 10h00.",
    alt: "Mer turquoise vue d'en haut avec bateaux et yachts au mouillage",
    vediEscursioni: 'Voir les excursions',
  },

  fiducia: [
    { titolo: 'Skipper de Trapani', testo: 'Nous connaissons les criques absentes des cartes' },
    { titolo: '10 personnes maximum, skipper compris', testo: "Jamais de bateau bondé, jamais de file pour l'échelle" },
    {
      titolo: 'Déjeuner et boissons à bord',
      testo: <>Plats chauds de <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a> et plats de poisson de <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>, selon les allergènes que vous nous indiquez</>,
    },
    { titolo: 'Embarquement à Salinagrande', testo: 'Petit port de Nautica Cordaro, avec localisation sur Maps', href: site.mappaLink },
  ],

  tourGrid: {
    titolo: 'Nos journées en mer',
    testo: "Cinq façons de découvrir les Égades. Toutes les excursions partent de Salinagrande (TP) et rentrent avant le coucher du soleil, sauf l'apéritif.",
  },

  tourCard: {
    alt: (titolo) => `${titolo} — excursion en bateau aux îles Égades`,
    max: (n) => `max. ${n}`,
    richiediPreventivo: 'Demander un devis',
    prenota: 'Réserver',
  },

  chiSiamo: {
    titolo: 'Nés et élevés sur cette mer',
    paragrafo1: "Pendant l'excursion, vous serez accompagnés par un skipper local qui connaît et aime sa terre. Vous accueillir à bord est un plaisir : nous soignons chaque détail pour vous offrir une journée inoubliable.",
    paragrafo2: 'On part le matin, quand la mer est la plus calme et la plus limpide, pour une journée de détente et de découverte entre les criques des Égades. Qu’attendez-vous pour réserver ?',
    firma: 'Marco Bellavia, capitaine',
    alt: "Notre semi-rigide Breva vu d'en haut naviguant sur l'eau turquoise",
    cta: 'Réservez votre excursion',
  },

  fleet: {
    titolo: 'La flotte',
    testo: (modello) => `Deux semi-rigides ${modello}, identiques et soignés dans les moindres détails.`,
    label: (modello) => `Photos du semi-rigide ${modello}`,
    descrizione: "Deux semi-rigides identiques : même un grand groupe peut se répartir ou naviguer ensemble. Flotteurs hauts à l'avant et grand cockpit : confortables pour les pauses baignade, avec toilettes à bord pour les longues journées.",
    specifiche: [
      { valore: '2', label: 'bateaux' },
      { valore: '8,5 m', label: 'longueur' },
      { valore: '3 m', label: 'largeur' },
      { valore: '10', label: 'personnes à bord, skipper compris' },
      { valore: 'Cat. B', label: 'homologation CE' },
      { valore: 'Toilettes', label: 'à bord' },
    ],
    alt: [
      'Semi-rigide Breva 800 avec taud, vu de côté',
      'Semi-rigide Breva 800 en navigation',
      'Semi-rigide Breva 800 en navigation au coucher du soleil',
      'Les deux semi-rigides Breva 800 en navigation',
      'Accès aux toilettes de bord depuis le pont arrière',
      'Salle d’eau de bord avec miroir et lavabo',
      'Lavabo de la salle d’eau de bord',
      'WC de la salle d’eau de bord',
    ],
  },

  slideshow: {
    carosello: 'carrousel',
    precedente: 'Photo précédente',
    successiva: 'Photo suivante',
    vai: (i, n) => `Aller à la photo ${i} sur ${n}`,
  },

  isole: {
    titolo: 'Où nous allons',
    testo: "Deux îles à une demi-heure de navigation de Trapani, très différentes l'une de l'autre.",
    favignana: {
      descrizione: "L'île en forme de papillon, avec ses carrières de tuf qui plongent droit dans l'eau et un fond visible à six mètres.",
      alt: 'Barque de pêche blanche et bleue tirée au sec dans le port de Favignana',
    },
    levanzo: {
      descrizione: 'Trente maisons blanches autour d’un petit port, une seule route et la Grotta del Genovese avec ses dessins préhistoriques.',
      alt: "Vue de l'île de Levanzo",
    },
  },

  passi: {
    titolo: 'Comment réserver',
    lista: [
      {
        numero: 'Étape 1',
        titolo: 'Choisissez la journée',
        testo: 'Regardez les excursions et indiquez-nous la date. En cas de doute, écrivez-nous : nous vous dirons laquelle convient selon la météo de ces jours-là.',
      },
      {
        numero: 'Étape 2',
        titolo: 'Nous confirmons sur WhatsApp',
        testo: "Nous répondons en une heure avec les disponibilités, l'horaire et le point d'embarquement. Le paiement se fait à bord, en espèces ou par carte.",
      },
      {
        numero: 'Étape 3',
        titolo: "Rendez-vous à l'embarquement",
        testo: 'Petit port de Salinagrande (Nautica Cordaro). Arrivez quinze minutes en avance : nous partons à l’heure car la mer est plus calme le matin.',
      },
    ],
  },

  faq: {
    titolo: 'Questions fréquentes',
    lista: [
      {
        domanda: "D'où part-on ?",
        risposta: <>Du petit port de Nautica Cordaro, à Salinagrande (TP), à environ 15 minutes en voiture de Trapani, 10 de l’aéroport de Birgi et 25 de Marsala. Le parking est gratuit. <a href={site.mappaLink} {...ext}>Ouvrir l’emplacement dans Google Maps</a>.</>,
      },
      {
        domanda: 'Qu’est-ce qui est compris dans le prix ?',
        risposta: "Carburant, skipper, déjeuner à bord (plats chauds et plats de poisson, en tenant compte des allergènes que vous nous indiquez), eau et boissons, masques et tubas, taud de soleil et assurance. La taxe de débarquement à Favignana et l'entrée à la Grotta del Genovese ne sont pas comprises.",
      },
      {
        domanda: 'Que dois-je apporter ?',
        risposta: "Maillot de bain, serviette, crème solaire, un chapeau et un sweat léger pour le retour. À bord on reste pieds nus : les chaussures restent dans un panier à l'embarquement.",
      },
      {
        domanda: 'Et s’il fait mauvais ?',
        risposta: 'Nous décidons la veille avant 20h00. Si on ne sort pas, on reporte à un autre jour ou on annule sans frais. Nous ne sortons jamais avec une mer au-delà de force 3.',
      },
      {
        domanda: 'Peut-on venir avec de jeunes enfants ?',
        risposta: "Oui, nous avons des gilets dès la taille 0. Pour les enfants de moins de trois ans, écrivez-nous : nous choisirons ensemble la journée, la mer et l'itinéraire.",
      },
      {
        domanda: 'Faut-il savoir nager ?',
        risposta: "Non. Les pauses baignade sont facultatives et en eau peu profonde, et à bord il y a des bouées et des gilets pour ceux qui veulent entrer dans l'eau en toute sécurité.",
      },
    ],
  },

  finale: {
    titolo: 'Choisissez votre journée en mer',
    titoloMeteo: {
      perfetto: 'Mer calme prévue demain',
      buono: 'Demain, mer favorable pour sortir',
      sconsigliato: 'Mer agitée demain : voici les meilleurs jours',
    },
    testo: 'Écrivez-nous sur WhatsApp avec la date et le nombre de personnes. Nous répondons en une heure, même le dimanche.',
    alt: 'Coucher de soleil vu de la mer face aux Égades',
    etichetta: { perfetto: 'Journée idéale', buono: 'Bonne', sconsigliato: 'Mer agitée' },
    meteoTitolo: 'La mer ces 7 prochains jours',
    fonte: <>Prévisions <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>, mises à jour toutes les heures. Vague maximale et vent en nœuds.</>,
    waPrenota: 'Bonjour ! Je voudrais réserver une excursion.',
    waGiorno: (giorno) => `Bonjour ! Je voudrais réserver pour le ${giorno}.`,
    ariaGiorno: (giorno, etichetta) => `Réserver le ${giorno}, ${etichetta}, sur WhatsApp`,
  },

  footer: {
    descrizione: 'Excursions en semi-rigide et location avec skipper aux îles Égades, depuis Trapani.',
    escursioni: 'Excursions',
    informazioni: 'Informations',
    doveSiamo: 'Où nous trouver',
    orari: "Tous les jours 8h00–20h00, d'avril à octobre",
    info: { noi: 'Qui sommes-nous', flotta: 'La flotte', faq: 'Questions fréquentes', condizioni: 'Conditions de réservation', privacy: 'Confidentialité et cookies' },
    crediti: 'Photos (redimensionnées et recadrées) issues de Wikimedia Commons :',
  },

  contatti: {
    titolo: 'Contactez-nous',
    testo: 'Indiquez-nous la date et le nombre de personnes : nous répondons en une heure.',
    nome: 'Nom et prénom',
    email: 'E-mail',
    telefono: 'Téléphone',
    data: 'Date souhaitée',
    persone: 'Nombre de personnes',
    escursione: 'Excursion souhaitée',
    scegli: 'Choisissez une excursion',
    nonSo: 'Je ne sais pas encore',
    messaggio: 'Message',
    notaMessaggio: "N'indiquez pas ici d'allergies ou d'intolérances : nous vous les demanderons à la confirmation de la réservation.",
    consenso: (link: ReactNode) => <>J'ai lu la {link}.</>,
    linkPrivacy: 'politique de confidentialité',
    erroreConsenso: 'Confirmez avoir lu la politique de confidentialité pour envoyer la demande.',
    erroreInvio: "L'envoi a échoué. Réessayez ou écrivez-nous sur WhatsApp.",
    ok: 'Demande envoyée ! Nous vous répondrons dès que possible.',
    invio: 'Envoi en cours…',
    invia: 'Envoyer la demande',
    oggetto: "Demande d'excursion",
    recapiti: 'Coordonnées',
    mappaTitolo: "Carte du point d'embarquement à Salinagrande",
    mostraMappa: 'Afficher la carte',
    mappaCookie: 'En chargeant la carte, Google peut déposer des cookies sur votre appareil.',
    dettagli: 'Détails',
    apriMaps: 'Ouvrir dans Google Maps',
  },

  tour: {
    fotoPrincipale: (titolo) => `Photo principale : ${titolo}`,
    foto: (i, titolo) => `Photo ${i} : ${titolo}`,
    fotoDi: (titolo) => `Photos : ${titolo}`,
    itinerario: 'Itinéraire',
    incluso: 'Inclus',
    nonIncluso: 'Non inclus',
    persone: (n) => `${n} personnes max., skipper compris`,
    partenza: (orario) => `Départ ${orario}`,
    aScelta: 'au choix',
    chiama: 'Appeler',
    altre: 'Autres excursions',
    waPrenota: (titolo) => `Bonjour ! Je voudrais réserver : ${titolo}.`,
  },

  notFound: {
    titolo: 'Page introuvable',
    testo: "L'adresse que vous avez ouverte n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: 'Favignana et Levanzo, journée complète',
      breve: 'Favignana et Levanzo',
      descrizioneBreve: 'Le tour classique : Cala Rossa, Bue Marino, escale à Levanzo et retour en passant par Cala Minnola.',
      descrizioneLunga: 'Notre excursion la plus complète : le meilleur des deux îles en une seule journée. On part le matin pour profiter des criques tranquillement, avec de longues pauses baignade et un déjeuner à bord préparé avec des produits locaux.',
      durata: '8 heures',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Départ de Salinagrande à 10h00',
        "Cala Rossa, Favignana — pause baignade d'une heure",
        'Grotte du Bue Marino',
        'Déjeuner à bord au large de Levanzo',
        'Cala Minnola, Levanzo — pause baignade',
        'Retour à Salinagrande avant 18h00',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: 'Favignana, demi-journée',
      breve: 'Demi-journée',
      descrizioneBreve: "Départ à 10h00, retour en début d'après-midi. La côte est de l'île et deux pauses baignade.",
      descrizioneLunga: "Pensée pour ceux qui n'ont qu'une demi-journée : on explore la côte est de Favignana, celle des carrières de tuf et de l'eau la plus transparente, avec deux pauses baignade à des endroits différents.",
      durata: '4 heures',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Départ de Salinagrande à 10h00',
        'Cala Azzurra — pause baignade',
        'Lido Burrone — pause baignade',
        'Retour à Salinagrande avant 14h30',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: 'Apéritif au coucher du soleil',
      breve: 'Apéritif au coucher du soleil',
      descrizioneBreve: "On part à 18h00 vers San Teodoro, près de Marsala, et on boit un verre de grillo pendant que le soleil se couche sur l'Isola Grande.",
      descrizioneLunga: "Une courte sortie en soirée à San Teodoro, près de Marsala : une eau cristalline, la tour de San Teodoro sur la côte et l'Isola Grande du Stagnone face à vous. Un verre de vin blanc local à la main pendant que le soleil se couche. Une pause baignade, puis seulement la mer, la lumière et un bon verre.",
      durata: '2,5 heures',
      incluso: ['Carburant', 'Skipper', 'Un verre de vin local', 'Assurance'],
      nonIncluso: [],
      itinerario: [
        'Départ de Salinagrande à 18h00',
        'Navigation vers San Teodoro (Marsala)',
        'Pause baignade à San Teodoro',
        'Apéritif à bord au coucher du soleil',
        'Retour à Salinagrande avant 20h30',
      ],
    },
    'charter-privato-egadi': {
      titolo: 'Charter privé aux îles Égades',
      breve: 'Charter privé',
      descrizioneBreve: 'Un bateau rien que pour vous, itinéraire décidé ensemble la veille selon la météo.',
      descrizioneLunga: "Le bateau entier avec équipage à votre disposition pour une journée. L'itinéraire se décide ensemble la veille, selon la météo et l'état de la mer, pour aller exactement là où vous le souhaitez.",
      durata: '8 heures',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Heure de départ au choix',
        'Itinéraire personnalisé entre Favignana et Levanzo',
        'Pauses baignade où et quand vous le souhaitez',
        'Retour en soirée',
      ],
    },
    'mezza-giornata-privata': {
      titolo: 'Demi-journée privée',
      breve: 'Demi-journée privée',
      descrizioneBreve: 'Quatre heures en mer pour les familles et les petits groupes, avec heure de départ au choix.',
      descrizioneLunga: "La version courte du charter privé : quatre heures en mer, idéales pour les familles avec de jeunes enfants ou pour ceux qui n'ont qu'une demi-journée, avec une heure de départ convenue ensemble.",
      durata: '4 heures',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Heure de départ au choix',
        'Une ou deux pauses baignade selon la destination',
        'Retour après environ quatre heures',
      ],
    },
  },

  privacy: {
    titolo: 'Politique de confidentialité et cookies',
    intro: "Cette page explique quelles données personnelles nous collectons lorsque vous visitez le site, nous contactez ou réservez une excursion, pourquoi nous les utilisons et quels sont vos droits. Elle est fournie conformément aux articles 13 et 14 du Règlement (UE) 2016/679 (RGPD) et du décret législatif italien 196/2003 (Code de la vie privée). Ceci est une traduction : en cas de divergence, la version italienne prévaut.",
    corpo: (
      <>
        <h2>1. Qui est le responsable du traitement</h2>
        <p>
          {site.ragioneSociale}, {site.partitaIva}, dont le siège est situé {SEDE_LEGALE}.<br />
          E-mail : {email} · Téléphone : <a href={site.telefonoHref}>{site.telefono}</a>
        </p>
        <p>Nous n'avons pas désigné de délégué à la protection des données (DPO), car ce n'est pas obligatoire pour notre activité.</p>

        <h2>2. Quelles données nous traitons et pourquoi</h2>

        <h3>Demandes d'informations</h3>
        <p>
          Vous nous écrivez via le formulaire de contact, par e-mail, téléphone ou WhatsApp. Nous traitons les données que vous nous fournissez : nom,
          e-mail, téléphone, date et nombre de personnes, excursion qui vous intéresse, texte du message.
        </p>
        <ul>
          <li><strong>Finalité :</strong> répondre à votre demande et préparer une éventuelle réservation.</li>
          <li><strong>Base juridique :</strong> mesures précontractuelles prises à votre demande (art. 6.1.b RGPD).</li>
        </ul>

        <h3>Réservation et excursion</h3>
        <p>
          Si vous réservez, nous traitons les données nécessaires à l'organisation de la journée : nom des participants,
          coordonnées, date, service choisi, paiement.
        </p>
        <ul>
          <li><strong>Finalité :</strong> fournir le service réservé, communiquer avec vous avant et pendant l'excursion, gérer les reports dus à la météo.</li>
          <li><strong>Base juridique :</strong> exécution du contrat (art. 6.1.b RGPD).</li>
        </ul>

        <h3>Allergies et intolérances</h3>
        <p>
          Pour le déjeuner à bord, nous vous demandons si quelqu'un a des allergies ou des intolérances alimentaires. Ce sont des données
          de santé, nous ne les traitons donc qu'avec votre consentement explicite, que nous vous demandons
          lors de la confirmation de la réservation (art. 9.2.a RGPD). Nous utilisons ces données uniquement pour préparer des repas adaptés.
          Vous pouvez ne pas les fournir ou retirer votre consentement à tout moment : dans ce cas, nous ne pouvons pas garantir un menu adapté.
        </p>
        <p>Ne les indiquez pas dans le formulaire de contact : nous les recueillons à la confirmation.</p>

        <h3>Obligations légales</h3>
        <ul>
          <li><strong>Finalité :</strong> facturation, comptabilité et autres obligations légales, y compris celles liées à la sécurité de la navigation.</li>
          <li><strong>Base juridique :</strong> obligation légale (art. 6.1.c RGPD).</li>
        </ul>

        <h3>Navigation sur le site</h3>
        <p>
          Notre hébergeur enregistre automatiquement certaines données techniques des visites, comme
          l'adresse IP, le navigateur et la page demandée. Elles servent uniquement à afficher le site et à le protéger contre les abus.
        </p>
        <ul>
          <li><strong>Base juridique :</strong> intérêt légitime à la sécurité et au bon fonctionnement du site (art. 6.1.f RGPD).</li>
        </ul>

        <h2>3. Êtes-vous obligé de nous fournir vos données ?</h2>
        <p>
          Non. Mais sans données de contact nous ne pouvons pas vous répondre, et sans données de réservation nous ne pouvons pas
          organiser l'excursion. Les données sur les allergies et intolérances sont toujours facultatives. Nous ne prenons pas
          de décisions automatisées et ne faisons pas de profilage.
        </p>

        <h2>4. À qui nous communiquons les données</h2>
        <p>Les données ne sont ni diffusées ni vendues. Seuls le responsable, le skipper et, dans la mesure nécessaire, les tiers suivants y ont accès :</p>
        <ul>
          <li><strong>Cloudflare, Inc.</strong> : héberge le site.</li>
          <li><strong>Google</strong> : gère notre messagerie (Gmail). Fournit la carte Google Maps, qui ne se charge que si vous le demandez (voir la section Cookies).</li>
          <li><strong>{FORNITORE_MODULO}</strong> : reçoit et nous transmet les messages du formulaire de contact.</li>
          <li><strong>WhatsApp (Meta)</strong> : si vous choisissez de nous écrire sur WhatsApp, Meta traite les données en tant que responsable indépendant, selon sa propre politique.</li>
          <li><strong>Fournisseurs du déjeuner</strong> (Messina Nicasio, Nereide) : reçoivent uniquement le nombre de repas et les éventuelles allergies ou intolérances, sans les noms.</li>
          <li><strong>Expert-comptable</strong> : pour les obligations fiscales.</li>
          <li><strong>Autorités publiques</strong> : uniquement si la loi l'exige.</li>
        </ul>
        <p>
          Les prestataires qui traitent des données pour notre compte sont désignés sous-traitants (art. 28 RGPD).
          Certains, comme Cloudflare et Google, peuvent transférer des données hors de l'Union européenne. Dans ces cas,
          le transfert s'effectue avec les garanties prévues par le RGPD : adhésion à l'EU-U.S. Data Privacy
          Framework ou clauses contractuelles types approuvées par la Commission européenne.
        </p>

        <h2>5. Combien de temps nous conservons les données</h2>
        <ul>
          <li>Demandes qui n'aboutissent pas à une réservation : 12 mois à compter du dernier contact.</li>
          <li>Données de réservation et de paiement : 10 ans, conformément à la réglementation fiscale (art. 2220 du Code civil italien).</li>
          <li>Allergies et intolérances : supprimées à la fin de l'excursion.</li>
          <li>Données techniques de navigation : pendant la durée strictement nécessaire, selon les politiques de l'hébergeur.</li>
        </ul>

        <h2>6. Vos droits</h2>
        <p>À tout moment, vous pouvez nous demander de :</p>
        <ul>
          <li>savoir si nous traitons vos données et en obtenir une copie (accès, art. 15) ;</li>
          <li>les corriger (rectification, art. 16) ou les effacer (art. 17) ;</li>
          <li>en limiter le traitement (art. 18) ;</li>
          <li>les recevoir dans un format lisible par machine (portabilité, art. 20) ;</li>
          <li>vous opposer au traitement fondé sur l'intérêt légitime (art. 21) ;</li>
          <li>retirer le consentement donné. Le retrait n'affecte pas la licéité du traitement effectué jusque-là.</li>
        </ul>
        <p>
          Écrivez-nous à {email} : nous répondons sous un mois. Si vous estimez que le traitement n'est pas conforme, vous pouvez
          introduire une réclamation auprès de l'autorité italienne de protection des données (Garante per la protezione dei dati personali){' '}
          (<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>).
        </p>

        <h2 id="cookie">7. Cookies</h2>
        <p>
          Ce site n'utilise pas de cookies de profilage, d'outils de statistiques ou de publicité, et ne dépose pas
          de cookies propres. Les polices de caractères sont chargées directement depuis notre serveur, sans
          requêtes vers des services externes.
        </p>
        <p>
          Le seul contenu tiers est la carte Google Maps sur la page Contact. Elle ne se charge pas
          automatiquement : elle n'apparaît que si vous cliquez sur « Afficher la carte ». À partir de ce moment, Google peut déposer ses propres
          cookies, selon sa{' '}
          <a href="https://policies.google.com/privacy" {...ext}>politique de confidentialité</a>.
          Si vous ne le souhaitez pas, vous pouvez utiliser le lien « Ouvrir dans Google Maps » ou simplement ne pas charger la carte.
        </p>
        <p>
          C'est pourquoi, conformément aux lignes directrices de l'autorité italienne sur les cookies du 10 juin 2021,
          le site n'affiche pas de bannière : aucun cookie non technique n'est déposé sans une action de votre part.
        </p>
        <p>
          Les liens vers Instagram, TikTok et WhatsApp ouvrent des services externes, qui appliquent leurs propres règles en matière
          de données et de cookies.
        </p>

        <h2>8. Mineurs</h2>
        <p>
          Les réservations doivent être effectuées par un adulte. Les données des mineurs participant à l'excursion
          nous sont communiquées par le titulaire de l'autorité parentale.
        </p>

        <h2>9. Modifications</h2>
        <p>
          Si nous modifions la manière dont nous traitons les données, nous mettrons à jour cette page. Dernière mise à jour : 12 octobre 2026.
        </p>
      </>
    ),
  },
}

export default fr
