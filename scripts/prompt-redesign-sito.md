# Prompt: restyling del sito con le skill di progetto

> Da incollare in una nuova sessione di Claude Code, aperta nella root del repo `egadicharter`,
> in auto mode.

---

## Modalità di lavoro

Lavora in **completa autonomia**: non farmi domande, non fermarti a chiedere conferme. Dove
c'è una scelta, prendi tu quella migliore e scrivila nel riepilogo finale con il perché.
Ti fermi solo alla consegna, per mostrarmi le anteprime.

## Contesto

Bellavia Egadi Charter è il sito vetrina per escursioni in gommone alle Isole Egadi
(Favignana e Levanzo) con partenza da Trapani. Quasi tutti arrivano da telefono, spesso da
Instagram o Google, e l'obiettivo del sito è uno solo: far prenotare (WhatsApp, contatti).

Stack:

- React 18 + TypeScript + Vite, React Router. **CSS Modules + CSS puro**, niente Tailwind.
- La build fa anche SSR e prerender (`vite build --ssr src/entry-server.tsx` +
  `scripts/prerender.js`): tutto quello che aggiungi deve funzionare lato server (niente
  `window`/`document` durante il render, effetti solo in `useEffect`) e non deve creare
  differenze di hydration.
- Token in `src/styles/tokens.css` (blu, blu-scuro, blu-notte, turchese, turchese-chiaro,
  sabbia, ambra…), stili globali in `src/styles/global.css`. Tema chiaro e scuro
  (`prefers-color-scheme` + `data-theme`): vanno curati **tutti e due**.
- Font self-hosted in `public/fonts/` (Schibsted Grotesk per i titoli, Inter per il testo).
- Home in `src/pages/Home.tsx`: Hero (video), TrustBar, TourGrid (caroselli condivisi /
  privati), AboutBlock, FleetGrid + Slideshow, IslandCards, HowItWorks, Faq, FinalCta
  (video), più Header, Footer, WhatsAppButton. Pagine: TourDetail, Contact, Privacy, NotFound.
- **7 lingue** in `src/i18n/` (it, en, de, es, fr, pl, zh): nessun testo nuovo nel JSX senza la
  sua chiave in **tutti e sette** i dizionari.
- Dev: `npm run dev` (porta 5173, configurata in `.claude/launch.json`) o
  `docker compose --profile dev up`.

## Fase 0: le skill

1. Installa **find-skills** (`npx skills add vercel-labs/skills --skill find-skills`) e usala
   per cercare le skill utili a questo progetto: design frontend anti-slop, animazioni e
   motion, React/Vite, accessibilità, Core Web Vitals, SEO, Playwright, eventuali skill su
   CSS moderno (scroll-driven animations, View Transitions, container query).
2. Prendi spunto da quelle già usate negli altri progetti:
   - `~/repo/workspaceVS/Leo_Appartamenti` (`skills-lock.json`): **apple-design**
     (`emilkowalski/skills`) e **design-taste-frontend** (`Leonxlnx/taste-skill`).
   - `~/repo/workspaceVS/Progetto1/HangingAround/.claude/skills/`: impeccable,
     web-design-guidelines, accessibility, core-web-vitals, seo-audit,
     playwright-best-practices, find-skills.
   Scarta quelle che non c'entrano (NestJS, Postgres, Tailwind: qui non ci sono).
3. Installale nel progetto in `.claude/skills/`, con `skills-lock.json` versionato. Se una
   skill porta con sé decine di MB di asset (taste-skill pesa ~40 MB), mettila nel
   `.gitignore` e lascia solo il lock per ripristinarla.
4. Leggi davvero le skill installate prima di toccare il codice. Se impeccable ha un comando
   `context`/`init`/`document`, usalo per scrivere `PRODUCT.md` e `DESIGN.md` dallo stato
   attuale del sito.

## Obiettivo

Partendo **dal sito che c'è adesso**, migliorarlo: meno "look da AI", più accattivante, più
ottimizzato, animato, interattivo, con un tocco futuristico.

Non è un rifacimento: in un altro progetto tre direzioni completamente nuove sono state
scartate perché troppo incisive. Qui si **raffina dentro l'identità attuale** (palette
blu/turchese/sabbia, logo, struttura delle sezioni, tono dei testi), alzando il livello di
ogni dettaglio.

Cosa intendo, per non lasciarlo al caso:

- **Meno slop** = via i tic da template: card tutte uguali in griglia, kicker sopra ogni
  titolo, icone generiche in cerchi colorati, sezioni tutte con lo stesso ritmo
  titolo-sottotitolo-griglia, gradienti decorativi, glow, glassmorphism ovunque, testo con
  gradiente, emoji come icone, ombre morbide su tutto, CTA duplicate. Gerarchia tipografica
  vera, spazi con un ritmo, layout che variano da una sezione all'altra.
- **Futuristico** = profondità, materiali, movimento fisico; il mare come materia (luce,
  riflessi, onde, orizzonte), non come cartolina. Risposte immediate al tocco.
- **Animato e interattivo** = scroll-driven animations CSS dove servono, View Transitions
  tra home e dettaglio tour, micro-interazioni sui caroselli, sulle card, sullo slideshow
  della flotta, sulle FAQ, sul bottone WhatsApp. Ogni animazione ha uno scopo (orientare,
  confermare, dare continuità), è interrompibile, usa solo `transform`/`opacity`, rispetta
  `prefers-reduced-motion`.
- **Ottimizzato** = LCP, CLS e INP non peggiorano, anzi: preload giusti, `fetchpriority`
  sull'immagine/video del primo schermo, `loading="lazy"` e `decoding="async"` sotto la
  piega, dimensioni esplicite, niente JavaScript per quello che fa il CSS.

## Vincoli

- **Immagini e video non si toccano**: stessi file in `public/images/` e `public/videos/`,
  stessi soggetti, nessuna sostituzione, nessuna immagine generata o stock aggiunta.
  Puoi cambiare come vengono inquadrati e presentati (ritaglio, `object-position`,
  maschere, transizioni), non il contenuto.
- **Le funzioni restano tutte**: stessi tour, prezzi, link WhatsApp, contatti, cambio
  lingua, routing, SEO (`src/Head.tsx`, `src/seo.ts`: titoli, meta, dati strutturati,
  hreflang).
- **Mobile prima di tutto** (390px), poi 768, 1024, 1440. Tema chiaro e scuro.
- **Testi**: non inventare claim, numeri, recensioni o anni di esperienza. Copy nuovo solo
  dove migliora davvero, sempre in tutte e 7 le lingue.
- **Dipendenze**: niente framework nuovi. CSS moderno, View Transitions, Web Animations API.
  Al massimo **una** libreria piccola (< 15 kB gzip) se fa qualcosa che il CSS non può fare,
  motivata nel riepilogo.
- **Accessibilità**: WCAG 2.2 AA, contrasto in entrambi i temi, focus visibile, caroselli
  usabili da tastiera.
- **Pulizia**: i CSS alla fine devono essere più ordinati e non più lunghi del necessario;
  quello che non serve più si cancella.
- **Git**: branch `feat/redesign` da `main`, un commit per componente o gruppo di sezioni,
  messaggi in italiano nello stile dei commit esistenti (`feat(...)`, `content(...)`). Non
  fare push e non fare merge.
- `npm run build` e `npm run lint` devono passare prima di ogni commit.

## Fase 1: punto di partenza

1. Screenshot di tutte le pagine (home, un TourDetail, Contact, Privacy, 404) a 390 e 1440,
   tema chiaro e scuro, con Playwright via `npx` (non aggiungerlo alle dipendenze del
   progetto). Salvali nella scratchpad in `anteprime/prima/`: servono per il confronto, non
   vanno committati. Prima di generare tanti file controlla lo spazio su C:
   (`df -h /mnt/c`).
2. Critica e audit del sito attuale con le skill installate (impeccable, design-taste-frontend,
   web-design-guidelines). Lighthouse mobile sulla home: annota LCP, CLS, INP, peso pagina.

## Fase 2: tre anteprime, poi la scelta

Prima di toccare il codice, prepara **tre anteprime della home** come file HTML autonomi in
`<scratchpad>/anteprime/`:

- `a-<nome>.html`, `b-<nome>.html`, `c-<nome>.html`
- tutte e tre **dentro l'identità attuale**, a tre intensità diverse (dalla più sobria alla
  più audace), con le immagini e i video veri (copiali in `anteprime/media/`, percorsi
  relativi) e i testi italiani veri presi da `src/i18n/it.tsx`
- animazioni e interazioni funzionanti, non disegnate: devono far capire come si muove il
  sito, non solo come appare
- devono aprirsi con doppio clic da Windows (`\\wsl$\...`) senza server

Poi **scegli tu** quella più adatta (non chiedermelo), scrivi in due righe perché, e
applicala al sito vero.

## Fase 3: il sistema

Token in `tokens.css` (colori, ombre, raggi, scala tipografica fluida con `clamp`, durate e
curve di movimento), componenti condivisi (Button, Section, card tour, carosello), sistema
di movimento (entrate in scroll, View Transitions, stati hover/press/focus).

## Fase 4: le sezioni e le pagine

In quest'ordine: Header, Hero, TrustBar, TourGrid + TourCard, AboutBlock, FleetGrid +
Slideshow, IslandCards, HowItWorks, Faq, FinalCta, Footer, WhatsAppButton; poi TourDetail,
Contact, Privacy, NotFound.

Per ogni blocco, prima del commit: screenshot a 390 e 1440 in entrambi i temi,
`web-design-guidelines` + accessibilità, gate di `design-taste-frontend`, build e lint verdi.

## Fase 5: verifica finale

- audit e polish di impeccable su tutto il sito
- Lighthouse mobile su home e un TourDetail, prima e dopo: nessun peggioramento di LCP, CLS,
  INP
- SEO: titoli, meta, dati strutturati e hreflang ancora a posto in tutte le 7 lingue (anche
  nell'HTML prerenderizzato in `dist/`)
- `prefers-reduced-motion` attivo: niente si muove senza motivo, nulla si rompe
- nessun errore di hydration in console

## Consegna: le anteprime

Come in HangingAround, mostrami tutto come **file HTML da aprire nel browser**, con i
**percorsi completi** nella scratchpad:

1. le tre anteprime `a-`, `b-`, `c-` della Fase 2, indicando quale hai scelto e perché;
2. `anteprime/confronto.html`: una pagina sola con gli screenshot prima/dopo affiancati per
   ogni sezione e pagina (390 e 1440, chiaro e scuro), autonoma, apribile con doppio clic;
3. `anteprime/sito/`: la build del sito nuovo resa apribile senza server (oppure, se non è
   possibile per via del routing, il comando esatto per vederla: `npm run dev` su
   http://localhost:5173).

Poi un riepilogo breve: cosa è cambiato per sezione, le skill installate e quelle scartate,
la libreria aggiunta (se c'è) e perché, i numeri di Lighthouse prima/dopo, i commit sul
branch e cosa resta aperto.
