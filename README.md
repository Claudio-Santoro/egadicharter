# Bellavia Egadi Charter

Sito vetrina per escursioni in gommone alle Isole Egadi (Favignana e Levanzo) con partenza
da Trapani. React + TypeScript, CSS puro (CSS Modules), nessun backend.

## Avviare il sito

Serve solo Docker Desktop (o Docker Engine + Docker Compose) installato sul computer.

**Sviluppo, con ricarica automatica ad ogni modifica:**

```bash
docker compose --profile dev up
```

Il sito è visibile su http://localhost:5173. Le modifiche ai file si vedono subito nel
browser, non serve riavviare nulla.

**Produzione, versione ottimizzata:**

```bash
docker compose up -d --build
```

Il sito è visibile su http://localhost:8080. Da rilanciare (con `--build`) ogni volta che
si vuole pubblicare una modifica.

## Come aggiungere le foto

Le immagini vanno messe nella cartella `public/images/`, con questi nomi esatti (sono già
presenti come segnaposto colorati, da sostituire con le foto vere mantenendo lo stesso
nome file):

| File | Dimensioni consigliate | Dove viene usata |
|---|---|---|
| `hero.jpg` | 1440×820 | Foto grande in cima alla home |
| `chi-siamo.jpg` | 1000×800 | Sezione "Chi siamo" |
| `tour-favignana-levanzo.jpg` | 800×600 | Card escursione "Favignana e Levanzo, giornata intera" |
| `tour-favignana-mezza-giornata.jpg` | 800×600 | Card escursione "Favignana, mezza giornata" |
| `tour-aperitivo-tramonto.jpg` | 800×600 | Card escursione "Aperitivo al tramonto" |
| `tour-charter-privato.jpg` | 800×600 | Card escursione "Charter privato alle Egadi" |
| `tour-mezza-giornata-privata.jpg` | 800×600 | Card escursione "Mezza giornata privata" |
| `isola-favignana.jpg` | 1400×1040 | Card isola Favignana |
| `isola-levanzo.jpg` | 1400×1040 | Card isola Levanzo |
| `barca-gommone.jpg` | 800×500 | Scheda gommone |
| `barca-motobarca.jpg` | 800×500 | Scheda motobarca |
| `finale-tramonto.jpg` | 1440×520 | Sfondo della sezione finale "Il mare domani è previsto calmo" |

Se manca un file o il nome non corrisponde, il sito non si rompe: al suo posto resta
uno sfondo colorato delle stesse proporzioni.

## Come aggiungere o modificare un'escursione

Tutte le escursioni sono nel file [`src/data/tours.ts`](src/data/tours.ts): è una lista di
oggetti, uno per escursione. Per modificarne una, cambia i valori esistenti. Per
aggiungerne una nuova, copia un blocco `{ ... }` esistente, incollalo nella lista e
cambia i valori (in particolare `id` e `slug` devono essere unici e senza spazi).

Ogni escursione genera automaticamente la propria pagina di dettaglio all'indirizzo
`/escursioni/<slug>` e compare nella griglia della home. Non serve toccare nessun
componente grafico.

Allo stesso modo:
- le barche della flotta sono in [`src/data/boats.ts`](src/data/boats.ts)
- le isole sono in [`src/data/islands.ts`](src/data/islands.ts)
- le recensioni sono in [`src/data/reviews.ts`](src/data/reviews.ts)
- le domande frequenti sono in [`src/data/faq.ts`](src/data/faq.ts)

## Dove cambiare telefono, WhatsApp, email e indirizzo

Tutto nel file [`src/data/site.ts`](src/data/site.ts), in cima al file:

- `telefono` / `telefonoHref`: il numero mostrato e il link `tel:`
- `whatsappNumero`: il numero per il pulsante WhatsApp, in formato internazionale senza
  `+` né spazi (es. `393331234567`)
- `email`: l'indirizzo mostrato in fondo al sito e usato dal form contatti
- `indirizzo`, `orari`, `partitaIva`: i dati mostrati nel footer e nella pagina Contatti
- `mappaSrc`: l'indirizzo della mappa Google mostrata nella pagina Contatti

## Il form dei contatti

Per impostazione predefinita, quando qualcuno invia il form gli si apre un'email già
compilata verso l'indirizzo in `site.ts`. Se invece si vuole ricevere le richieste
direttamente (via email o su un foglio Google, per esempio con [Formspree](https://formspree.io)),
basta impostare la variabile `VITE_FORM_ENDPOINT` nel file `.env` (copia `.env.example`
in `.env` e incolla l'indirizzo fornito dal servizio scelto).

Attenzione: questa variabile viene "cotta" dentro il sito quando viene fatta la build, non
può essere cambiata su un sito già pubblicato senza ricostruirlo. In produzione va quindi
impostata **prima** di lanciare `docker compose up -d --build`.

## Pubblicare il sito su un server (VPS)

Occorre un server con un indirizzo IP pubblico e Docker installato, e un dominio che
punti a quell'IP.

1. Collegarsi al server e clonare il repository:

   ```bash
   git clone <url-del-repository> bellavia-egadi-charter
   cd bellavia-egadi-charter
   ```

2. Creare il file `.env` a partire dall'esempio e inserire il proprio dominio:

   ```bash
   cp .env.example .env
   ```

   Poi modificare `.env` impostando `DOMAIN=iltuodominio.it` (ed eventualmente
   `VITE_FORM_ENDPOINT` se si usa un servizio esterno per il form).

3. Puntare il DNS del dominio verso l'IP del server (record A), e assicurarsi che le
   porte **80** e **443** siano aperte nel firewall / security group del provider.

4. Avviare il sito con certificato HTTPS automatico (Let's Encrypt, gestito da Caddy):

   ```bash
   docker compose --profile prod-tls up -d --build
   ```

   Al primo avvio Caddy richiede da solo il certificato per il dominio indicato in
   `DOMAIN`: perché funzioni, il DNS deve già puntare al server.

5. Per pubblicare un aggiornamento in futuro: `git pull` seguito di nuovo dal comando al
   punto 4.

## Struttura del progetto

```
src/
  main.tsx, App.tsx        punto di ingresso e instradamento delle pagine
  styles/                  variabili grafiche globali (colori, font, spaziature)
  data/                    tutti i testi e i contenuti (escursioni, barche, isole, ...)
  components/              i pezzi grafici riutilizzabili
  pages/                   le tre pagine del sito (Home, dettaglio escursione, Contatti)
```

## Comandi utili in locale (senza Docker)

Se si preferisce lavorare senza Docker, serve Node.js 20+:

```bash
npm install
npm run dev      # sviluppo, http://localhost:5173
npm run build    # crea la versione di produzione nella cartella dist/
npm run lint     # controlla il codice
```
