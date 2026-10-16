import { ReactNode } from 'react'
import { site } from '../data/site'
import type { Dict } from '.'
import { FORNITORE_MODULO, SEDE_LEGALE } from './it'

const inclusoStandard = ['Combustible', 'Patrón', 'Comida a bordo', 'Agua y refrescos', 'Gafas y tubos de esnórquel', 'Toldo', 'Seguro']
const nonInclusoStandard = ['Tasa de desembarco en Favignana', 'Entrada a la Grotta del Genovese']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const es: Dict = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — Excursiones en lancha neumática a Favignana y Levanzo desde Trapani',
      description: 'Excursiones en lancha neumática a las Islas Egadas desde Trapani. Favignana, Levanzo, salidas en grupo y chárteres privados con patrón local.',
    },
    contatti: {
      title: 'Contacto y reservas — Bellavia Egadi Charter',
      description: 'Reserva una excursión en lancha a las Islas Egadas: dinos la fecha y cuántos sois, respondemos en una hora.',
    },
    privacy: {
      title: 'Política de privacidad y cookies — Bellavia Egadi Charter',
      description: 'Qué datos personales recogemos, para qué los usamos y cuáles son tus derechos.',
    },
    notFound: { title: 'Página no encontrada — Bellavia Egadi Charter' },
    jsonLd: 'Excursiones en lancha neumática a las Islas Egadas (Favignana y Levanzo) con salida desde Trapani.',
  },

  nav: { escursioni: 'Excursiones', flotta: 'Flota', isole: 'Las islas', noi: 'Quiénes somos', contatti: 'Contacto' },

  header: {
    navPrincipale: 'Navegación principal',
    navMobile: 'Navegación móvil',
    apriMenu: 'Abrir el menú',
    chiudiMenu: 'Cerrar el menú',
    lingua: 'Idioma',
    prenotaOra: 'Reservar',
  },

  comune: {
    scriviciWa: 'Escríbenos por WhatsApp',
    waInfo: '¡Hola! Me gustaría recibir información sobre las excursiones.',
    da: 'desde',
    unita: { persona: 'por persona', gommone: 'por lancha' },
    tourPrivato: 'Tour privado',
    tourCondiviso: 'Tour compartido',
  },

  hero: {
    titolo: 'Favignana y Levanzo en lancha desde Trapani',
    testo: 'Días en el mar entre las calas de las Egadas, con un patrón que nació aquí. Grupos pequeños, salida desde Salinagrande a las 10:00.',
    alt: 'Mar turquesa visto desde arriba con barcos y yates fondeados',
    vediEscursioni: 'Ver las excursiones',
  },

  fiducia: [
    { titolo: 'Patrón de Trapani', testo: 'Conocemos las calas que no aparecen en los mapas' },
    { titolo: 'Máximo 10 personas, patrón incluido', testo: 'Nunca lanchas abarrotadas, nunca colas para la escalerilla' },
    {
      titolo: 'Comida y bebidas a bordo',
      testo: <>Platos calientes de <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a> y pescado de <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>, según los alérgenos que nos indiquéis</>,
    },
    { titolo: 'Embarque en Salinagrande', testo: 'Puerto deportivo de Nautica Cordaro, con ubicación en Maps', href: site.mappaLink },
  ],

  tourGrid: {
    titolo: 'Nuestros días en el mar',
    testo: 'Cinco formas de ver las Egadas. Todas las excursiones salen de Salinagrande (TP) y vuelven antes del atardecer, excepto el aperitivo.',
  },

  tourCard: {
    alt: (titolo) => `${titolo} — excursión en lancha a las Islas Egadas`,
    max: (n) => `máx. ${n}`,
    richiediPreventivo: 'Pedir presupuesto',
    prenota: 'Reservar',
  },

  chiSiamo: {
    titolo: 'Nacidos y criados en este mar',
    paragrafo1: 'Durante la excursión os acompañará un patrón local que conoce y ama su tierra. Teneros a bordo es un placer: cuidamos cada detalle para regalaros un día inolvidable.',
    paragrafo2: 'Salimos por la mañana, cuando el mar está más tranquilo y transparente, para un día de relax y descubrimiento entre las calas de las Egadas. ¿A qué esperáis para reservar?',
    firma: 'Marco Bellavia, capitán',
    alt: 'Nuestra lancha Breva vista desde arriba navegando sobre el agua turquesa',
    cta: 'Reserva tu excursión',
  },

  fleet: {
    titolo: 'La flota',
    testo: (modello) => `Dos lanchas ${modello}, idénticas y cuidadas al detalle.`,
    label: (modello) => `Fotos de la lancha ${modello}`,
    descrizione: 'Dos lanchas idénticas, así incluso un grupo numeroso puede dividirse o viajar junto. Flotadores altos en proa y una bañera amplia: cómodas para las paradas de baño y con aseo a bordo para los días largos.',
    specifiche: [
      { valore: '2', label: 'lanchas' },
      { valore: '8,5 m', label: 'eslora' },
      { valore: '3 m', label: 'manga' },
      { valore: '10', label: 'personas a bordo, patrón incluido' },
      { valore: 'Cat. B', label: 'homologación CE' },
      { valore: 'Aseo', label: 'a bordo' },
    ],
    alt: [
      'Lancha Breva 800 con toldo, vista de lado',
      'Lancha Breva 800 navegando',
      'Lancha Breva 800 navegando al atardecer',
      'Las dos lanchas Breva 800 navegando',
      'Acceso al aseo de a bordo desde la cubierta de popa',
      'Aseo de a bordo con espejo y lavabo',
      'Lavabo del aseo de a bordo',
      'Inodoro del aseo de a bordo',
    ],
  },

  slideshow: {
    carosello: 'carrusel',
    precedente: 'Foto anterior',
    successiva: 'Foto siguiente',
    vai: (i, n) => `Ir a la foto ${i} de ${n}`,
  },

  isole: {
    titolo: 'Adónde vamos',
    testo: 'Dos islas a media hora de navegación de Trapani, muy distintas entre sí.',
    favignana: {
      descrizione: 'La isla con forma de mariposa, con canteras de toba que bajan directas al agua y un fondo que se ve a seis metros.',
      alt: 'Barca de pesca blanca y azul varada en el puerto de Favignana',
    },
    levanzo: {
      descrizione: 'Treinta casas blancas alrededor de un pequeño puerto, una sola calle y la Grotta del Genovese con sus pinturas prehistóricas.',
      alt: 'Vista de la isla de Levanzo',
    },
  },

  passi: {
    titolo: 'Cómo reservar',
    testo: 'Tres pasos, sin pago anticipado online.',
    lista: [
      {
        numero: 'Paso 1',
        titolo: 'Elige el día',
        testo: 'Mira las excursiones y dinos la fecha. Si no estás seguro, escríbenos: te diremos cuál conviene según el tiempo de esos días.',
      },
      {
        numero: 'Paso 2',
        titolo: 'Confirmamos por WhatsApp',
        testo: 'Respondemos en una hora con disponibilidad, horario y punto de embarque. El pago se hace a bordo, en efectivo o con tarjeta.',
      },
      {
        numero: 'Paso 3',
        titolo: 'Nos vemos en el embarque',
        testo: 'Puerto deportivo de Salinagrande (Nautica Cordaro). Llega quince minutos antes: salimos puntuales porque por la mañana el mar está más tranquilo.',
      },
    ],
  },

  faq: {
    titolo: 'Preguntas frecuentes',
    lista: [
      {
        domanda: '¿Desde dónde se sale?',
        risposta: <>Desde el puerto deportivo de Nautica Cordaro, en Salinagrande (TP), a unos 15 minutos en coche de Trápani, 10 del aeropuerto de Birgi y 25 de Marsala. El aparcamiento es gratuito. <a href={site.mappaLink} {...ext}>Abrir la ubicación en Google Maps</a>.</>,
      },
      {
        domanda: '¿Qué incluye el precio?',
        risposta: 'Combustible, patrón, comida a bordo (platos calientes y pescado, teniendo en cuenta los alérgenos que nos indiquéis), agua y refrescos, gafas y tubos, toldo y seguro. No incluye la tasa de desembarco en Favignana ni la entrada a la Grotta del Genovese.',
      },
      {
        domanda: '¿Qué tengo que llevar?',
        risposta: 'Bañador, toalla, crema solar, un sombrero y una sudadera ligera para la vuelta. A bordo se va descalzo: los zapatos se dejan en una cesta al embarcar.',
      },
      {
        domanda: '¿Y si hace mal tiempo?',
        risposta: 'Lo decidimos la noche anterior antes de las 20:00. Si no se sale, se cambia a otro día o se cancela sin coste. Nunca salimos con mar superior a fuerza 3.',
      },
      {
        domanda: '¿Se puede ir con niños pequeños?',
        risposta: 'Sí, tenemos chalecos desde la talla 0. Para niños menores de tres años escríbenos: valoramos juntos el día, el mar y la ruta.',
      },
      {
        domanda: '¿Hay que saber nadar?',
        risposta: 'No. Las paradas de baño son opcionales y en aguas poco profundas, y a bordo hay flotadores y chalecos para quien quiera meterse en el agua con seguridad.',
      },
    ],
  },

  finale: {
    titolo: 'Elige tu día de mar',
    titoloMeteo: {
      perfetto: 'Mañana se prevé mar en calma',
      buono: 'Mañana buen mar para salir',
      sconsigliato: 'Mañana mar agitado: estos son los mejores días',
    },
    testo: 'Escríbenos por WhatsApp con la fecha y cuántos sois. Respondemos en una hora, también los domingos.',
    alt: 'Atardecer visto desde el mar frente a las Egadas',
    etichetta: { perfetto: 'Día ideal', buono: 'Bueno', sconsigliato: 'Mar agitado' },
    meteoTitolo: 'El mar en los próximos 7 días',
    fonte: <>Previsiones de <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>, actualizadas cada hora. Ola máxima y viento en nudos.</>,
    waPrenota: '¡Hola! Me gustaría reservar una excursión.',
    waGiorno: (giorno) => `¡Hola! Me gustaría reservar para el ${giorno}.`,
    ariaGiorno: (giorno, etichetta) => `Reservar el ${giorno}, ${etichetta}, por WhatsApp`,
  },

  footer: {
    descrizione: 'Excursiones en lancha neumática y alquiler con patrón a las Islas Egadas, desde Trapani.',
    escursioni: 'Excursiones',
    informazioni: 'Información',
    doveSiamo: 'Dónde estamos',
    orari: 'Todos los días 8:00–20:00, de abril a octubre',
    info: { noi: 'Quiénes somos', flotta: 'La flota', faq: 'Preguntas frecuentes', condizioni: 'Condiciones de reserva', privacy: 'Privacidad y cookies' },
    crediti: 'Fotos (redimensionadas y recortadas) de Wikimedia Commons:',
  },

  contatti: {
    titolo: 'Contáctanos',
    testo: 'Escríbenos con la fecha y cuántos sois: respondemos en una hora.',
    nome: 'Nombre y apellidos',
    email: 'Correo electrónico',
    telefono: 'Teléfono',
    data: 'Fecha deseada',
    persone: 'Número de personas',
    escursione: 'Excursión de interés',
    scegli: 'Elige una excursión',
    nonSo: 'Todavía no lo sé',
    messaggio: 'Mensaje',
    notaMessaggio: 'No escribas aquí alergias o intolerancias: te las preguntaremos al confirmar la reserva.',
    consenso: (link: ReactNode) => <>He leído la {link}.</>,
    linkPrivacy: 'política de privacidad',
    erroreConsenso: 'Confirma que has leído la política de privacidad para enviar la solicitud.',
    erroreInvio: 'No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.',
    ok: '¡Solicitud enviada! Te responderemos lo antes posible.',
    invio: 'Enviando…',
    invia: 'Enviar solicitud',
    oggetto: 'Solicitud de excursión',
    recapiti: 'Datos de contacto',
    mappaTitolo: 'Mapa del punto de embarque en Salinagrande',
    mostraMappa: 'Mostrar mapa',
    mappaCookie: 'Al cargar el mapa, Google puede instalar cookies en tu dispositivo.',
    dettagli: 'Detalles',
    apriMaps: 'Abrir en Google Maps',
  },

  tour: {
    fotoPrincipale: (titolo) => `Foto principal de ${titolo}`,
    foto: (i, titolo) => `Foto ${i} de ${titolo}`,
    fotoDi: (titolo) => `Fotos de ${titolo}`,
    itinerario: 'Itinerario',
    incluso: 'Incluido',
    nonIncluso: 'No incluido',
    persone: (n) => `máx. ${n} personas, patrón incluido`,
    partenza: (orario) => `Salida ${orario}`,
    aScelta: 'a elegir',
    chiama: 'Llamar',
    altre: 'Otras excursiones',
    waPrenota: (titolo) => `¡Hola! Me gustaría reservar: ${titolo}.`,
  },

  notFound: {
    titolo: 'Página no encontrada',
    testo: 'La dirección que has abierto no existe o se ha movido.',
    home: 'Volver a la página de inicio',
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: 'Favignana y Levanzo, día completo',
      breve: 'Favignana y Levanzo',
      descrizioneBreve: 'La ruta clásica: Cala Rossa, Bue Marino, parada en Levanzo y vuelta pasando por Cala Minnola.',
      descrizioneLunga: 'Nuestra excursión más completa: lo mejor de las dos islas en un solo día. Salimos por la mañana para disfrutar de las calas con calma, con largas paradas de baño y comida a bordo preparada con productos locales.',
      durata: '8 horas',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Salida desde Salinagrande a las 10:00',
        'Cala Rossa, Favignana — parada de baño de una hora',
        'Cueva del Bue Marino',
        'Comida a bordo frente a Levanzo',
        'Cala Minnola, Levanzo — parada de baño',
        'Regreso a Salinagrande antes de las 18:00',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: 'Favignana, medio día',
      breve: 'Medio día',
      descrizioneBreve: 'Salida a las 10:00, regreso a primera hora de la tarde. El lado este de la isla y dos paradas de baño.',
      descrizioneLunga: 'Pensada para quien solo tiene medio día libre: exploramos el lado este de Favignana, el de las canteras de toba y el agua más transparente, con dos paradas de baño en lugares distintos.',
      durata: '4 horas',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Salida desde Salinagrande a las 10:00',
        'Cala Azzurra — parada de baño',
        'Lido Burrone — parada de baño',
        'Regreso a Salinagrande antes de las 14:30',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: 'Aperitivo al atardecer',
      breve: 'Aperitivo al atardecer',
      descrizioneBreve: 'Salimos a las 18:00 hacia Levanzo y tomamos una copa de grillo mientras el sol se pone tras la isla.',
      descrizioneLunga: 'Una breve salida al atardecer hacia Levanzo, con una copa de vino blanco local en la mano mientras el sol se pone detrás de la isla. Sin paradas de baño, solo mar, luz y una buena copa.',
      durata: '2,5 horas',
      incluso: ['Combustible', 'Patrón', 'Una copa de vino local', 'Seguro'],
      nonIncluso: [],
      itinerario: [
        'Salida desde Salinagrande a las 18:00',
        'Navegación hacia Levanzo',
        'Aperitivo a bordo al atardecer',
        'Regreso a Salinagrande antes de las 20:30',
      ],
    },
    'charter-privato-egadi': {
      titolo: 'Chárter privado a las Egadas',
      breve: 'Chárter privado',
      descrizioneBreve: 'Una lancha solo para vosotros, con la ruta decidida juntos la noche anterior según el tiempo.',
      descrizioneLunga: 'Toda la lancha con tripulación a vuestra disposición durante un día. La ruta se decide juntos la noche anterior, mirando el tiempo y el estado del mar, para ir exactamente adonde queráis.',
      durata: '8 horas',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Hora de salida a elegir',
        'Ruta personalizada entre Favignana y Levanzo',
        'Paradas de baño donde y cuando prefiráis',
        'Regreso por la tarde',
      ],
    },
    'mezza-giornata-privata': {
      titolo: 'Medio día privado',
      breve: 'Medio día privado',
      descrizioneBreve: 'Cuatro horas de mar para familias y grupos pequeños, con hora de salida a elegir.',
      descrizioneLunga: 'La versión más corta del chárter privado: cuatro horas de mar, ideales para familias con niños pequeños o para quien solo tiene medio día, con la hora de salida acordada juntos.',
      durata: '4 horas',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Hora de salida a elegir',
        'Una o dos paradas de baño según el destino',
        'Regreso tras unas cuatro horas',
      ],
    },
  },

  privacy: {
    titolo: 'Política de privacidad y cookies',
    intro: 'Esta página explica qué datos personales recogemos cuando visitas el sitio, nos contactas o reservas una excursión, para qué los usamos y cuáles son tus derechos. Se facilita conforme a los artículos 13 y 14 del Reglamento (UE) 2016/679 (RGPD) y del Decreto Legislativo italiano 196/2003 (Código de privacidad). Esta es una traducción: en caso de discrepancia, prevalece la versión italiana.',
    corpo: (
      <>
        <h2>1. Quién es el responsable del tratamiento</h2>
        <p>
          {site.ragioneSociale}, {site.partitaIva}, con domicilio en {SEDE_LEGALE}.<br />
          Correo electrónico: {email} · Teléfono: <a href={site.telefonoHref}>{site.telefono}</a>
        </p>
        <p>No hemos designado un delegado de protección de datos (DPD), porque no es obligatorio para nuestra actividad.</p>

        <h2>2. Qué datos tratamos y por qué</h2>

        <h3>Solicitudes de información</h3>
        <p>
          Nos escribes a través del formulario de contacto, correo electrónico, teléfono o WhatsApp. Tratamos los datos que nos das: nombre,
          correo electrónico, teléfono, fecha y número de personas, excursión que te interesa, texto del mensaje.
        </p>
        <ul>
          <li><strong>Finalidad:</strong> responder a tu solicitud y preparar una posible reserva.</li>
          <li><strong>Base jurídica:</strong> medidas precontractuales adoptadas a petición tuya (art. 6.1.b RGPD).</li>
        </ul>

        <h3>Reserva y excursión</h3>
        <p>
          Si reservas, tratamos los datos necesarios para organizar el día: nombre de los participantes,
          datos de contacto, fecha, servicio elegido, pago.
        </p>
        <ul>
          <li><strong>Finalidad:</strong> prestar el servicio reservado, comunicarnos contigo antes y durante la excursión, gestionar cambios por el tiempo.</li>
          <li><strong>Base jurídica:</strong> ejecución del contrato (art. 6.1.b RGPD).</li>
        </ul>

        <h3>Alergias e intolerancias</h3>
        <p>
          Para la comida a bordo te preguntamos si alguien tiene alergias o intolerancias alimentarias. Son datos
          relativos a la salud, por lo que solo los tratamos con tu consentimiento explícito, que te pedimos
          al confirmar la reserva (art. 9.2.a RGPD). Usamos estos datos solo para preparar comidas adecuadas.
          Puedes no facilitarlos o retirar el consentimiento en cualquier momento: en ese caso no podemos garantizar un menú adecuado.
        </p>
        <p>No los escribas en el formulario de contacto: los recogemos nosotros al confirmar.</p>

        <h3>Obligaciones legales</h3>
        <ul>
          <li><strong>Finalidad:</strong> facturación, contabilidad y otras obligaciones legales, incluidas las de seguridad de la navegación.</li>
          <li><strong>Base jurídica:</strong> obligación legal (art. 6.1.c RGPD).</li>
        </ul>

        <h3>Navegación por el sitio</h3>
        <p>
          Nuestro proveedor de alojamiento registra automáticamente algunos datos técnicos de las visitas, como
          dirección IP, navegador y página solicitada. Solo sirven para mostrar el sitio y protegerlo de abusos.
        </p>
        <ul>
          <li><strong>Base jurídica:</strong> interés legítimo en la seguridad y el funcionamiento del sitio (art. 6.1.f RGPD).</li>
        </ul>

        <h2>3. ¿Estás obligado a darnos tus datos?</h2>
        <p>
          No. Pero sin los datos de contacto no podemos responderte, y sin los de la reserva no podemos
          organizar la excursión. Los datos sobre alergias e intolerancias son siempre opcionales. No tomamos
          decisiones automatizadas ni elaboramos perfiles.
        </p>

        <h2>4. A quién comunicamos los datos</h2>
        <p>Los datos no se difunden ni se venden. Solo los conocen el responsable, el patrón y, en la medida necesaria, los siguientes sujetos:</p>
        <ul>
          <li><strong>Cloudflare, Inc.</strong>: aloja el sitio.</li>
          <li><strong>Google</strong>: gestiona nuestro buzón de correo (Gmail). Proporciona el mapa de Google Maps, que solo se carga si tú lo pides (ver la sección Cookies).</li>
          <li><strong>{FORNITORE_MODULO}</strong>: recibe y nos reenvía los mensajes del formulario de contacto.</li>
          <li><strong>WhatsApp (Meta)</strong>: si decides escribirnos por WhatsApp, Meta trata los datos como responsable independiente, según su propia política.</li>
          <li><strong>Proveedores de la comida</strong> (Messina Nicasio, Nereide): solo reciben el número de comidas y las posibles alergias o intolerancias, sin nombres.</li>
          <li><strong>Asesor fiscal</strong>: para las obligaciones fiscales.</li>
          <li><strong>Autoridades públicas</strong>: solo si la ley lo exige.</li>
        </ul>
        <p>
          Los proveedores que tratan datos por cuenta nuestra son designados encargados del tratamiento (art. 28 RGPD).
          Algunos, como Cloudflare y Google, pueden transferir datos fuera de la Unión Europea. En esos casos
          la transferencia se realiza con las garantías previstas por el RGPD: adhesión al EU-U.S. Data Privacy
          Framework o cláusulas contractuales tipo aprobadas por la Comisión Europea.
        </p>

        <h2>5. Cuánto tiempo conservamos los datos</h2>
        <ul>
          <li>Solicitudes que no se convierten en reserva: 12 meses desde el último contacto.</li>
          <li>Datos de reserva y pago: 10 años, según exige la normativa fiscal (art. 2220 del Código Civil italiano).</li>
          <li>Alergias e intolerancias: se eliminan al terminar la excursión.</li>
          <li>Datos técnicos de navegación: durante el tiempo estrictamente necesario, según las políticas del proveedor de alojamiento.</li>
        </ul>

        <h2>6. Tus derechos</h2>
        <p>En cualquier momento puedes pedirnos:</p>
        <ul>
          <li>saber si tratamos tus datos y obtener una copia (acceso, art. 15);</li>
          <li>corregirlos (rectificación, art. 16) o suprimirlos (art. 17);</li>
          <li>limitar su tratamiento (art. 18);</li>
          <li>recibirlos en un formato legible por máquina (portabilidad, art. 20);</li>
          <li>oponerte al tratamiento basado en el interés legítimo (art. 21);</li>
          <li>retirar el consentimiento ya dado. La retirada no afecta a la licitud del tratamiento realizado hasta ese momento.</li>
        </ul>
        <p>
          Escríbenos a {email}: respondemos en un plazo de un mes. Si consideras que el tratamiento no es correcto puedes
          presentar una reclamación ante la autoridad italiana de protección de datos (Garante per la protezione dei dati personali){' '}
          (<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>).
        </p>

        <h2 id="cookie">7. Cookies</h2>
        <p>
          Este sitio no utiliza cookies de perfilado, herramientas de estadística ni de publicidad, y no instala
          cookies propias. Las fuentes tipográficas se cargan directamente desde nuestro servidor, sin
          peticiones a servicios externos.
        </p>
        <p>
          El único contenido de terceros es el mapa de Google Maps en la página de Contacto. No se carga
          automáticamente: solo aparece si pulsas «Mostrar mapa». A partir de ese momento Google puede instalar sus propias
          cookies, según su{' '}
          <a href="https://policies.google.com/privacy" {...ext}>política de privacidad</a>.
          Si no quieres, puedes usar el enlace «Abrir en Google Maps» o simplemente no cargar el mapa.
        </p>
        <p>
          Por ello, tal como prevén las Directrices sobre cookies de la autoridad italiana de protección de datos del 10 de junio de 2021,
          el sitio no muestra un banner: no se instala ninguna cookie no técnica sin una acción por tu parte.
        </p>
        <p>
          Los enlaces a Instagram, TikTok y WhatsApp abren servicios externos, que aplican sus propias normas sobre
          datos y cookies.
        </p>

        <h2>8. Menores</h2>
        <p>
          Las reservas deben hacerlas adultos. Los datos de los menores que participan en la excursión
          nos los comunica quien ejerce la patria potestad.
        </p>

        <h2>9. Cambios</h2>
        <p>
          Si cambiamos la forma en que tratamos los datos, actualizaremos esta página. Última actualización: 12 de octubre de 2026.
        </p>
      </>
    ),
  },
}

export default es
