import { ReactNode } from 'react'
import { site } from '../data/site'
import type { Dict } from '.'
import { FORNITORE_MODULO, SEDE_LEGALE } from './it'

const inclusoStandard = ['Paliwo', 'Skipper', 'Obiad na pokładzie', 'Woda i napoje', 'Maski i fajki do nurkowania', 'Zadaszenie', 'Ubezpieczenie']
const nonInclusoStandard = ['Opłata za zejście na ląd na Favignanie', 'Wstęp do Grotta del Genovese']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const pl: Dict = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — Rejsy pontonem na Favignanę i Levanzo z Trapani',
      description: 'Rejsy pontonem na Wyspy Egadzkie z Trapani. Favignana, Levanzo, wycieczki w małych grupach i prywatne czartery z miejscowym skipperem.',
    },
    contatti: {
      title: 'Kontakt i rezerwacje — Bellavia Egadi Charter',
      description: 'Zarezerwuj rejs pontonem na Wyspy Egadzkie: napisz nam datę i liczbę osób, odpowiadamy w ciągu godziny.',
    },
    privacy: {
      title: 'Polityka prywatności i plików cookie — Bellavia Egadi Charter',
      description: 'Jakie dane osobowe zbieramy, w jakim celu je wykorzystujemy i jakie masz prawa.',
    },
    notFound: { title: 'Nie znaleziono strony — Bellavia Egadi Charter' },
    jsonLd: 'Rejsy pontonem na Wyspy Egadzkie (Favignana i Levanzo) z wypłynięciem z Trapani.',
  },

  nav: { escursioni: 'Rejsy', flotta: 'Flota', isole: 'Wyspy', noi: 'O nas', contatti: 'Kontakt' },

  header: {
    navPrincipale: 'Nawigacja główna',
    navMobile: 'Nawigacja mobilna',
    apriMenu: 'Otwórz menu',
    chiudiMenu: 'Zamknij menu',
    lingua: 'Język',
    prenotaOra: 'Zarezerwuj',
  },

  comune: {
    scriviciWa: 'Napisz do nas na WhatsAppie',
    waInfo: 'Dzień dobry! Chciałbym/chciałabym uzyskać informacje o rejsach.',
    da: 'od',
    unita: { persona: 'za osobę', gommone: 'za łódź' },
    tourPrivato: 'Rejs prywatny',
    tourCondiviso: 'Rejs grupowy',
  },

  hero: {
    titolo: 'Favignana i Levanzo pontonem z Trapani',
    testo: 'Dni na morzu wśród zatoczek Wysp Egadzkich, ze skipperem, który się tu urodził. Małe grupy, wypłynięcie z Salinagrande o 10:00.',
    alt: 'Turkusowe morze z lotu ptaka z łodziami i jachtami na kotwicy',
    vediEscursioni: 'Zobacz rejsy',
  },

  fiducia: [
    { titolo: 'Skipper z Trapani', testo: 'Znamy zatoczki, których nie ma na mapach' },
    { titolo: 'Maksymalnie 10 osób', testo: 'Nigdy zatłoczonej łodzi, nigdy kolejki do drabinki' },
    {
      titolo: 'Obiad i napoje na pokładzie',
      testo: <>Ciepłe dania od <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a> i dania rybne od <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>, z uwzględnieniem alergenów, które nam podacie</>,
    },
    { titolo: 'Zaokrętowanie w Salinagrande', testo: 'Przystań Nautica Cordaro, z lokalizacją w Mapach', href: site.mappaLink },
  ],

  tourGrid: {
    titolo: 'Nasze dni na morzu',
    testo: 'Pięć sposobów na poznanie Wysp Egadzkich. Wszystkie rejsy wypływają z Salinagrande (TP) i wracają przed zachodem słońca, z wyjątkiem aperitivo.',
  },

  tourCard: {
    alt: (titolo) => `${titolo} — rejs pontonem na Wyspy Egadzkie`,
    max: (n) => `maks. ${n}`,
    richiediPreventivo: 'Poproś o wycenę',
    prenota: 'Zarezerwuj',
  },

  chiSiamo: {
    titolo: 'Urodzeni i wychowani nad tym morzem',
    paragrafo1: 'Podczas rejsu będzie Wam towarzyszył miejscowy skipper, który zna i kocha swoją ziemię. Gościć Was na pokładzie to przyjemność: dbamy o każdy szczegół, aby podarować Wam niezapomniany dzień.',
    paragrafo2: 'Wypływamy rano, gdy morze jest najspokojniejsze i najczystsze, na dzień relaksu i odkrywania zatoczek Wysp Egadzkich. Na co czekacie?',
    firma: 'Marco Bellavia, kapitan',
    alt: 'Nasz ponton Breva z lotu ptaka, płynący po turkusowej wodzie',
    cta: 'Zarezerwuj swój rejs',
  },

  fleet: {
    titolo: 'Flota',
    testo: (modello) => `Dwa pontony ${modello}, identyczne i zadbane w każdym szczególe.`,
    label: (modello) => `Zdjęcia pontonu ${modello}`,
    descrizione: 'Dwa identyczne pontony, więc nawet liczna grupa może się podzielić albo płynąć razem. Wysokie burty na dziobie i obszerny kokpit: wygodne przy postojach na kąpiel, z toaletą na pokładzie na długie dni.',
    specifiche: [
      { valore: '2', label: 'pontony' },
      { valore: '8,5 m', label: 'długość' },
      { valore: '3 m', label: 'szerokość' },
      { valore: '10', label: 'osób na pokładzie' },
      { valore: 'Kat. B', label: 'homologacja CE' },
      { valore: 'Toaleta', label: 'na pokładzie' },
    ],
    alt: [
      'Ponton Breva 800 z daszkiem, widok z boku',
      'Ponton Breva 800 w rejsie',
      'Ponton Breva 800 w rejsie o zachodzie słońca',
      'Dwa pontony Breva 800 w rejsie',
      'Wejście do toalety z pokładu rufowego',
      'Łazienka na pokładzie z lustrem i umywalką',
      'Umywalka w łazience na pokładzie',
      'WC w łazience na pokładzie',
    ],
  },

  slideshow: {
    carosello: 'karuzela',
    precedente: 'Poprzednie zdjęcie',
    successiva: 'Następne zdjęcie',
    vai: (i, n) => `Przejdź do zdjęcia ${i} z ${n}`,
  },

  isole: {
    titolo: 'Dokąd płyniemy',
    testo: 'Dwie wyspy pół godziny rejsu od Trapani, zupełnie do siebie niepodobne.',
    favignana: {
      descrizione: 'Wyspa w kształcie motyla, z kamieniołomami tufu schodzącymi prosto do wody i dnem widocznym na sześć metrów.',
      alt: 'Biało-niebieska łódź rybacka wyciągnięta na brzeg w porcie Favignany',
    },
    levanzo: {
      descrizione: 'Trzydzieści białych domów wokół małego portu, jedna droga i Grotta del Genovese z prehistorycznymi rysunkami.',
      alt: 'Widok na wyspę Levanzo',
    },
  },

  passi: {
    titolo: 'Jak zarezerwować',
    testo: 'Trzy kroki, bez zaliczki online.',
    lista: [
      {
        numero: 'Krok 1',
        titolo: 'Wybierz dzień',
        testo: 'Przejrzyj rejsy i podaj nam datę. Jeśli nie wiesz, napisz: podpowiemy, który rejs najlepiej pasuje do pogody w tych dniach.',
      },
      {
        numero: 'Krok 2',
        titolo: 'Potwierdzamy na WhatsAppie',
        testo: 'Odpowiadamy w ciągu godziny, podając dostępność, godzinę i miejsce zaokrętowania. Płatność na pokładzie, gotówką lub kartą.',
      },
      {
        numero: 'Krok 3',
        titolo: 'Do zobaczenia na przystani',
        testo: 'Przystań w Salinagrande (Nautica Cordaro). Przyjdź piętnaście minut wcześniej: wypływamy punktualnie, bo rano morze jest spokojniejsze.',
      },
    ],
  },

  faq: {
    titolo: 'Najczęściej zadawane pytania',
    lista: [
      {
        domanda: 'Skąd wypływamy?',
        risposta: <>Z przystani Nautica Cordaro w Salinagrande (TP), około 15 minut samochodem z Trapani, 10 z lotniska Birgi i 25 z Marsali. Parking jest bezpłatny. <a href={site.mappaLink} {...ext}>Otwórz lokalizację w Mapach Google</a>.</>,
      },
      {
        domanda: 'Co jest wliczone w cenę?',
        risposta: 'Paliwo, skipper, obiad na pokładzie (ciepłe dania i dania rybne, z uwzględnieniem podanych alergenów), woda i napoje, maski i fajki, zadaszenie i ubezpieczenie. Cena nie obejmuje opłaty za zejście na ląd na Favignanie ani wstępu do Grotta del Genovese.',
      },
      {
        domanda: 'Co zabrać ze sobą?',
        risposta: 'Strój kąpielowy, ręcznik, krem z filtrem, czapkę i lekką bluzę na powrót. Na pokładzie chodzimy boso, buty zostawia się w koszu przy wejściu.',
      },
      {
        domanda: 'A jeśli będzie zła pogoda?',
        risposta: 'Decydujemy poprzedniego wieczoru do 20:00. Jeśli nie wypływamy, przenosimy rejs na inny dzień albo anulujemy bez kosztów. Nigdy nie wypływamy przy morzu powyżej 3 w skali Beauforta.',
      },
      {
        domanda: 'Czy można przyjść z małymi dziećmi?',
        risposta: 'Tak, mamy kamizelki od rozmiaru 0. W przypadku dzieci poniżej trzech lat napiszcie do nas: razem wybierzemy dzień, warunki i trasę.',
      },
      {
        domanda: 'Czy trzeba umieć pływać?',
        risposta: 'Nie. Postoje na kąpiel są dobrowolne i na płytkiej wodzie, a na pokładzie są koła i kamizelki dla tych, którzy chcą bezpiecznie wejść do wody.',
      },
    ],
  },

  finale: {
    titolo: 'Wybierz swój dzień na morzu',
    titoloMeteo: {
      perfetto: 'Jutro zapowiadane spokojne morze',
      buono: 'Jutro dobre morze na rejs',
      sconsigliato: 'Jutro wzburzone morze: oto najlepsze dni',
    },
    testo: 'Napisz do nas na WhatsAppie datę i liczbę osób. Odpowiadamy w ciągu godziny, także w niedzielę.',
    alt: 'Zachód słońca widziany z morza przed Wyspami Egadzkimi',
    etichetta: { perfetto: 'Idealny dzień', buono: 'Dobry', sconsigliato: 'Wzburzone morze' },
    meteoTitolo: 'Morze w ciągu najbliższych 7 dni',
    fonte: <>Prognoza <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>, aktualizowana co godzinę. Maksymalna wysokość fali i wiatr w węzłach.</>,
    waPrenota: 'Dzień dobry! Chciałbym/chciałabym zarezerwować rejs.',
    waGiorno: (giorno) => `Dzień dobry! Chciałbym/chciałabym zarezerwować na ${giorno}.`,
    ariaGiorno: (giorno, etichetta) => `Zarezerwuj ${giorno}, ${etichetta}, na WhatsAppie`,
  },

  footer: {
    descrizione: 'Rejsy pontonem i wynajem łodzi ze skipperem na Wyspy Egadzkie, z Trapani.',
    escursioni: 'Rejsy',
    informazioni: 'Informacje',
    doveSiamo: 'Gdzie jesteśmy',
    orari: 'Codziennie 8:00–20:00, od kwietnia do października',
    info: { noi: 'O nas', flotta: 'Flota', faq: 'Najczęstsze pytania', condizioni: 'Warunki rezerwacji', privacy: 'Prywatność i cookie' },
    crediti: 'Zdjęcia (pomniejszone i przycięte) z Wikimedia Commons:',
  },

  contatti: {
    titolo: 'Skontaktuj się z nami',
    testo: 'Napisz nam datę i liczbę osób: odpowiadamy w ciągu godziny.',
    nome: 'Imię i nazwisko',
    email: 'E-mail',
    telefono: 'Telefon',
    data: 'Preferowana data',
    persone: 'Liczba osób',
    escursione: 'Interesujący rejs',
    scegli: 'Wybierz rejs',
    nonSo: 'Jeszcze nie wiem',
    messaggio: 'Wiadomość',
    notaMessaggio: 'Nie wpisuj tu alergii ani nietolerancji: zapytamy o nie przy potwierdzeniu rezerwacji.',
    consenso: (link: ReactNode) => <>Zapoznałem/zapoznałam się z {link}.</>,
    linkPrivacy: 'polityką prywatności',
    erroreConsenso: 'Potwierdź, że zapoznałeś/zapoznałaś się z polityką prywatności, aby wysłać zapytanie.',
    erroreInvio: 'Wysyłanie nie powiodło się. Spróbuj ponownie lub napisz do nas na WhatsAppie.',
    ok: 'Zapytanie wysłane! Odpowiemy najszybciej, jak to możliwe.',
    invio: 'Wysyłanie…',
    invia: 'Wyślij zapytanie',
    oggetto: 'Zapytanie o rejs',
    recapiti: 'Dane kontaktowe',
    mappaTitolo: 'Mapa miejsca zaokrętowania w Salinagrande',
    mostraMappa: 'Pokaż mapę',
    mappaCookie: 'Po załadowaniu mapy Google może zapisać pliki cookie na Twoim urządzeniu.',
    dettagli: 'Szczegóły',
    apriMaps: 'Otwórz w Mapach Google',
  },

  tour: {
    fotoPrincipale: (titolo) => `Główne zdjęcie: ${titolo}`,
    foto: (i, titolo) => `Zdjęcie ${i}: ${titolo}`,
    fotoDi: (titolo) => `Zdjęcia: ${titolo}`,
    itinerario: 'Trasa',
    incluso: 'W cenie',
    nonIncluso: 'Poza ceną',
    persone: (n) => `maks. ${n} osób`,
    partenza: (orario) => `Wypłynięcie ${orario}`,
    aScelta: 'do wyboru',
    chiama: 'Zadzwoń',
    altre: 'Inne rejsy',
    waPrenota: (titolo) => `Dzień dobry! Chciałbym/chciałabym zarezerwować: ${titolo}.`,
  },

  notFound: {
    titolo: 'Nie znaleziono strony',
    testo: 'Otwarty adres nie istnieje lub został przeniesiony.',
    home: 'Wróć na stronę główną',
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: 'Favignana i Levanzo, cały dzień',
      breve: 'Favignana i Levanzo',
      descrizioneBreve: 'Klasyczna trasa: Cala Rossa, Bue Marino, postój na Levanzo i powrót obok Cala Minnola.',
      descrizioneLunga: 'Nasz najpełniejszy rejs: to, co najlepsze na obu wyspach, w jeden dzień. Wypływamy rano, by spokojnie cieszyć się zatoczkami, z długimi postojami na kąpiel i obiadem na pokładzie z lokalnych produktów.',
      durata: '8 godzin',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Wypłynięcie z Salinagrande o 10:00',
        'Cala Rossa, Favignana — godzinny postój na kąpiel',
        'Grota Bue Marino',
        'Obiad na pokładzie u wybrzeży Levanzo',
        'Cala Minnola, Levanzo — postój na kąpiel',
        'Powrót do Salinagrande do 18:00',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: 'Favignana, pół dnia',
      breve: 'Pół dnia',
      descrizioneBreve: 'Wypłynięcie o 10:00, powrót wczesnym popołudniem. Wschodnia strona wyspy i dwa postoje na kąpiel.',
      descrizioneLunga: 'Dla tych, którzy mają tylko pół dnia: zwiedzamy wschodnią stronę Favignany, tę z kamieniołomami tufu i najczystszą wodą, z dwoma postojami na kąpiel w różnych miejscach.',
      durata: '4 godziny',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Wypłynięcie z Salinagrande o 10:00',
        'Cala Azzurra — postój na kąpiel',
        'Lido Burrone — postój na kąpiel',
        'Powrót do Salinagrande do 14:30',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: 'Aperitivo o zachodzie słońca',
      breve: 'Aperitivo o zachodzie',
      descrizioneBreve: 'Wypływamy o 18:00 w stronę Levanzo i pijemy kieliszek grillo, gdy słońce chowa się za wyspą.',
      descrizioneLunga: 'Krótki wieczorny rejs w stronę Levanzo, z kieliszkiem lokalnego białego wina w dłoni, gdy słońce zachodzi za wyspą. Bez postojów na kąpiel, tylko morze, światło i dobre wino.',
      durata: '2,5 godziny',
      incluso: ['Paliwo', 'Skipper', 'Kieliszek lokalnego wina', 'Ubezpieczenie'],
      nonIncluso: [],
      itinerario: [
        'Wypłynięcie z Salinagrande o 18:00',
        'Rejs w stronę Levanzo',
        'Aperitivo na pokładzie o zachodzie słońca',
        'Powrót do Salinagrande do 20:30',
      ],
    },
    'charter-privato-egadi': {
      titolo: 'Prywatny czarter na Wyspy Egadzkie',
      breve: 'Prywatny czarter',
      descrizioneBreve: 'Łódź tylko dla Was, trasa ustalana wspólnie poprzedniego wieczoru na podstawie pogody.',
      descrizioneLunga: 'Cała łódź z załogą do Waszej dyspozycji na cały dzień. Trasę ustalamy razem poprzedniego wieczoru, patrząc na pogodę i stan morza, aby popłynąć dokładnie tam, gdzie chcecie.',
      durata: '8 godzin',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Godzina wypłynięcia do wyboru',
        'Trasa na życzenie między Favignaną a Levanzo',
        'Postoje na kąpiel tam i wtedy, kiedy chcecie',
        'Powrót wieczorem',
      ],
    },
    'mezza-giornata-privata': {
      titolo: 'Prywatne pół dnia',
      breve: 'Prywatne pół dnia',
      descrizioneBreve: 'Cztery godziny na morzu dla rodzin i małych grup, z godziną wypłynięcia do wyboru.',
      descrizioneLunga: 'Krótsza wersja prywatnego czarteru: cztery godziny na morzu, idealne dla rodzin z małymi dziećmi lub dla tych, którzy mają tylko pół dnia, z godziną wypłynięcia ustaloną wspólnie.',
      durata: '4 godziny',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        'Godzina wypłynięcia do wyboru',
        'Jeden lub dwa postoje na kąpiel, zależnie od celu',
        'Powrót po około czterech godzinach',
      ],
    },
  },

  privacy: {
    titolo: 'Polityka prywatności i plików cookie',
    intro: 'Ta strona wyjaśnia, jakie dane osobowe zbieramy, gdy odwiedzasz serwis, kontaktujesz się z nami lub rezerwujesz rejs, w jakim celu je wykorzystujemy i jakie masz prawa. Informacja jest udzielana na podstawie art. 13 i 14 Rozporządzenia (UE) 2016/679 (RODO) oraz włoskiego dekretu ustawodawczego 196/2003 (Kodeks ochrony prywatności). To jest tłumaczenie: w przypadku rozbieżności rozstrzyga wersja włoska.',
    corpo: (
      <>
        <h2>1. Kto jest administratorem danych</h2>
        <p>
          {site.ragioneSociale}, {site.partitaIva}, z siedzibą w {SEDE_LEGALE}.<br />
          E-mail: {email} · Telefon: <a href={site.telefonoHref}>{site.telefono}</a>
        </p>
        <p>Nie wyznaczyliśmy inspektora ochrony danych (IOD), ponieważ w naszej działalności nie jest to obowiązkowe.</p>

        <h2>2. Jakie dane przetwarzamy i dlaczego</h2>

        <h3>Zapytania o informacje</h3>
        <p>
          Piszesz do nas przez formularz kontaktowy, e-mail, telefon lub WhatsApp. Przetwarzamy dane, które nam podajesz: imię,
          e-mail, telefon, datę i liczbę osób, interesujący Cię rejs, treść wiadomości.
        </p>
        <ul>
          <li><strong>Cel:</strong> odpowiedź na Twoje zapytanie i przygotowanie ewentualnej rezerwacji.</li>
          <li><strong>Podstawa prawna:</strong> działania przed zawarciem umowy podejmowane na Twoje żądanie (art. 6 ust. 1 lit. b RODO).</li>
        </ul>

        <h3>Rezerwacja i rejs</h3>
        <p>
          Jeśli rezerwujesz, przetwarzamy dane potrzebne do zorganizowania dnia: imiona i nazwiska uczestników,
          dane kontaktowe, datę, wybraną usługę, płatność.
        </p>
        <ul>
          <li><strong>Cel:</strong> wykonanie zarezerwowanej usługi, kontakt z Tobą przed rejsem i w jego trakcie, zmiany terminu z powodu pogody.</li>
          <li><strong>Podstawa prawna:</strong> wykonanie umowy (art. 6 ust. 1 lit. b RODO).</li>
        </ul>

        <h3>Alergie i nietolerancje</h3>
        <p>
          Na potrzeby obiadu na pokładzie pytamy, czy ktoś ma alergie lub nietolerancje pokarmowe. Są to dane
          dotyczące zdrowia, więc przetwarzamy je wyłącznie za Twoją wyraźną zgodą, o którą prosimy
          przy potwierdzeniu rezerwacji (art. 9 ust. 2 lit. a RODO). Wykorzystujemy je tylko do przygotowania odpowiednich posiłków.
          Możesz ich nie podawać lub w każdej chwili wycofać zgodę: w takim przypadku nie możemy zagwarantować odpowiedniego menu.
        </p>
        <p>Nie wpisuj ich w formularzu kontaktowym: zbierzemy je przy potwierdzeniu.</p>

        <h3>Obowiązki prawne</h3>
        <ul>
          <li><strong>Cel:</strong> fakturowanie, księgowość i inne obowiązki prawne, w tym dotyczące bezpieczeństwa żeglugi.</li>
          <li><strong>Podstawa prawna:</strong> obowiązek prawny (art. 6 ust. 1 lit. c RODO).</li>
        </ul>

        <h3>Korzystanie z serwisu</h3>
        <p>
          Nasz dostawca hostingu automatycznie rejestruje niektóre dane techniczne wizyt, takie jak
          adres IP, przeglądarka i żądana strona. Służą one wyłącznie do wyświetlania serwisu i ochrony przed nadużyciami.
        </p>
        <ul>
          <li><strong>Podstawa prawna:</strong> prawnie uzasadniony interes w zakresie bezpieczeństwa i działania serwisu (art. 6 ust. 1 lit. f RODO).</li>
        </ul>

        <h2>3. Czy musisz podać nam dane?</h2>
        <p>
          Nie. Bez danych kontaktowych nie możemy jednak odpowiedzieć, a bez danych do rezerwacji nie możemy
          zorganizować rejsu. Dane o alergiach i nietolerancjach są zawsze dobrowolne. Nie podejmujemy
          zautomatyzowanych decyzji i nie stosujemy profilowania.
        </p>

        <h2>4. Komu przekazujemy dane</h2>
        <p>Dane nie są rozpowszechniane ani sprzedawane. Znają je tylko administrator, skipper oraz, w niezbędnym zakresie, następujące podmioty:</p>
        <ul>
          <li><strong>Cloudflare, Inc.</strong>: hostuje serwis.</li>
          <li><strong>Google</strong>: obsługuje naszą skrzynkę e-mail (Gmail). Dostarcza mapę Google Maps, która ładuje się tylko na Twoje żądanie (zob. sekcja Cookie).</li>
          <li><strong>{FORNITORE_MODULO}</strong>: odbiera i przekazuje nam wiadomości z formularza kontaktowego.</li>
          <li><strong>WhatsApp (Meta)</strong>: jeśli zdecydujesz się napisać do nas na WhatsAppie, Meta przetwarza dane jako niezależny administrator, zgodnie z własną polityką.</li>
          <li><strong>Dostawcy obiadów</strong> (Messina Nicasio, Nereide): otrzymują tylko liczbę posiłków i ewentualne alergie lub nietolerancje, bez nazwisk.</li>
          <li><strong>Księgowy</strong>: w celu realizacji obowiązków podatkowych.</li>
          <li><strong>Organy publiczne</strong>: wyłącznie gdy wymaga tego prawo.</li>
        </ul>
        <p>
          Dostawcy przetwarzający dane w naszym imieniu są wyznaczeni jako podmioty przetwarzające (art. 28 RODO).
          Niektórzy, jak Cloudflare i Google, mogą przekazywać dane poza Unię Europejską. W takich przypadkach
          przekazanie odbywa się z zabezpieczeniami przewidzianymi w RODO: przystąpienie do EU-U.S. Data Privacy
          Framework lub standardowe klauzule umowne zatwierdzone przez Komisję Europejską.
        </p>

        <h2>5. Jak długo przechowujemy dane</h2>
        <ul>
          <li>Zapytania, które nie zakończyły się rezerwacją: 12 miesięcy od ostatniego kontaktu.</li>
          <li>Dane rezerwacji i płatności: 10 lat, zgodnie z przepisami podatkowymi (art. 2220 włoskiego kodeksu cywilnego).</li>
          <li>Alergie i nietolerancje: usuwane po zakończeniu rejsu.</li>
          <li>Techniczne dane o wizytach: przez czas ściśle niezbędny, zgodnie z zasadami dostawcy hostingu.</li>
        </ul>

        <h2>6. Twoje prawa</h2>
        <p>W każdej chwili możesz zażądać:</p>
        <ul>
          <li>informacji, czy przetwarzamy Twoje dane, oraz ich kopii (dostęp, art. 15);</li>
          <li>ich poprawienia (sprostowanie, art. 16) lub usunięcia (art. 17);</li>
          <li>ograniczenia ich przetwarzania (art. 18);</li>
          <li>otrzymania ich w formacie nadającym się do odczytu maszynowego (przenoszenie, art. 20);</li>
          <li>wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 21);</li>
          <li>wycofania udzielonej zgody. Wycofanie nie wpływa na zgodność z prawem przetwarzania dokonanego przed wycofaniem.</li>
        </ul>
        <p>
          Napisz do nas na {email}: odpowiadamy w ciągu miesiąca. Jeśli uważasz, że przetwarzanie jest niezgodne z prawem, możesz
          wnieść skargę do włoskiego organu ochrony danych (Garante per la protezione dei dati personali){' '}
          (<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>).
        </p>

        <h2 id="cookie">7. Pliki cookie</h2>
        <p>
          Ten serwis nie używa profilujących plików cookie, narzędzi statystycznych ani reklamowych i nie zapisuje
          własnych plików cookie. Czcionki są ładowane bezpośrednio z naszego serwera, bez
          zapytań do usług zewnętrznych.
        </p>
        <p>
          Jedyną treścią podmiotu trzeciego jest mapa Google Maps na stronie Kontakt. Nie ładuje się
          automatycznie: pojawia się dopiero po naciśnięciu „Pokaż mapę”. Od tej chwili Google może zapisywać własne
          pliki cookie, zgodnie ze swoją{' '}
          <a href="https://policies.google.com/privacy" {...ext}>polityką prywatności</a>.
          Jeśli nie chcesz, możesz skorzystać z linku „Otwórz w Mapach Google” albo po prostu nie ładować mapy.
        </p>
        <p>
          Dlatego, zgodnie z wytycznymi włoskiego organu ochrony danych w sprawie plików cookie z 10 czerwca 2021 r.,
          serwis nie wyświetla banera: żaden plik cookie inny niż techniczny nie jest zapisywany bez Twojego działania.
        </p>
        <p>
          Linki do Instagrama, TikToka i WhatsAppa otwierają usługi zewnętrzne, które stosują własne zasady dotyczące
          danych i plików cookie.
        </p>

        <h2>8. Osoby niepełnoletnie</h2>
        <p>
          Rezerwacji musi dokonać osoba pełnoletnia. Dane niepełnoletnich uczestników rejsu
          przekazuje nam osoba sprawująca władzę rodzicielską.
        </p>

        <h2>9. Zmiany</h2>
        <p>
          Jeśli zmienimy sposób przetwarzania danych, zaktualizujemy tę stronę. Ostatnia aktualizacja: 12 października 2026 r.
        </p>
      </>
    ),
  },
}

export default pl
