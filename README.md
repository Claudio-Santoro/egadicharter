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
| `flotta-1.jpg` … `flotta-9.jpg` | 1000×1250 / 1000×1500 | Foto dello slideshow della flotta (Breva 800) |
| `isola-favignana.jpg` | 1400×1040 | Card isola Favignana |
| `isola-levanzo.jpg` | 1400×1040 | Card isola Levanzo |

Se manca un file o il nome non corrisponde, il sito non si rompe: al suo posto resta
uno sfondo colorato delle stesse proporzioni.

## Come aggiungere o modificare un'escursione

Ogni escursione ha due parti:

- prezzo, foto, durata massima, tipo e orario sono in
  [`src/data/tours.condivisi.ts`](src/data/tours.condivisi.ts) e
  [`src/data/tours.privati.ts`](src/data/tours.privati.ts);
- i testi (titolo, descrizioni, itinerario, incluso/non incluso) sono in
  `src/i18n/<lingua>.tsx`, sotto `tours`, con lo `slug` come chiave.

Per aggiungerne una nuova, copia un blocco `{ ... }` esistente nel file dati e cambia i
valori (`id` e `slug` devono essere unici e senza spazi). Poi aggiungi i testi con lo stesso
`slug` in **tutti** i file di lingua: se ne manca uno, la build si ferma e dice quale.

Ogni escursione genera automaticamente la propria pagina all'indirizzo
`/escursioni/<slug>` (e `/en/escursioni/<slug>`, `/de/...` nelle altre lingue) e compare
nella griglia della home. Non serve toccare nessun componente grafico.

## Lingue e testi

Il sito è in italiano (indirizzi senza prefisso) e in inglese, polacco, spagnolo, francese,
tedesco e cinese (indirizzi con prefisso `/en`, `/pl`, `/es`, `/fr`, `/de`, `/zh`).
Tutti i testi visibili sono in `src/i18n/`, un file per lingua:
[`it.tsx`](src/i18n/it.tsx) è il riferimento e gli altri devono avere le stesse voci.
Le foto, i prezzi e i contatti sono invece in `src/data/` e valgono per tutte le lingue.

Le traduzioni dell'informativa privacy indicano che, in caso di dubbio, vale la versione
italiana.

In fase di build ogni pagina viene generata come HTML statico in ogni lingua, con i tag
`hreflang` e `canonical`, e vengono creati `sitemap.xml` e `robots.txt`. Per questo la
build ha bisogno dell'indirizzo pubblico del sito nella variabile `SITE_URL` (vedi
`.env.example`).

## Dove cambiare telefono, WhatsApp, email e indirizzo

Tutto nel file [`src/data/site.tsx`](src/data/site.tsx), in cima al file:

- `telefono` / `telefonoHref`: il numero mostrato e il link `tel:`
- `whatsappNumero`: il numero per il pulsante WhatsApp, in formato internazionale senza
  `+` né spazi (es. `393331234567`)
- `email`: l'indirizzo mostrato in fondo al sito e usato dal form contatti
- `indirizzo`, `partitaIva`: i dati mostrati nel footer e nella pagina Contatti (gli orari
  sono testo tradotto, in `src/i18n/<lingua>.tsx` → `footer.orari`)
- `mappaSrc`: l'indirizzo della mappa Google mostrata nella pagina Contatti

## Il form dei contatti

Per impostazione predefinita, quando qualcuno invia il form gli si apre un'email già
compilata verso l'indirizzo in `site.tsx`. Se invece si vuole ricevere le richieste
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

   Poi modificare `.env` impostando `DOMAIN=iltuodominio.it`, `SITE_URL=https://iltuodominio.it` (ed eventualmente
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
  data/                    contenuti uguali in tutte le lingue (prezzi, foto, contatti, ...)
  i18n/                    i testi, un file per lingua
  components/              i pezzi grafici riutilizzabili
  pages/                   le pagine del sito (Home, dettaglio escursione, Contatti, Privacy)
  seo.ts, entry-server.tsx <head> per pagina e lingua, prerender in fase di build
scripts/prerender.js       genera l'HTML statico di ogni pagina, sitemap.xml e robots.txt
```

## Comandi utili in locale (senza Docker)

Se si preferisce lavorare senza Docker, serve Node.js 20+:

```bash
npm install
npm run dev      # sviluppo, http://localhost:5173
SITE_URL=https://iltuodominio.it npm run build    # versione di produzione in dist/
npm run lint     # controlla il codice
```
