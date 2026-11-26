# Design system

Il riferimento visivo del sito. Si raffina dentro questa identità, non si sostituisce.

## Mondo

Il mare delle Egadi visto da un gommone: acqua turchese, blu profondo al largo, tufo e
sabbia chiara, luce forte. Le foto e i video sono veri e non si cambiano: il design li
inquadra, non li decora.

## Colori (`src/styles/tokens.css`)

| Token | Valore | Uso |
|---|---|---|
| `--blu` | #0A3A52 | header pieno, footer, fasce scure |
| `--blu-scuro` / `--blu-notte` | #062B3D / #052635 | menu mobile, finale, fondi profondi |
| `--turchese` | #128FAE | azione primaria, accenti |
| `--turchese-chiaro` | #37B7CE | accento su scuro, focus |
| `--sabbia` / `--sabbia-scura` | #F3EEE4 / #E6DDCC | sezioni alternate (tema chiaro) |
| `--ambra` | #E08A2E | solo l'etichetta "tour privato" |

Tema chiaro e scuro (`prefers-color-scheme` + `data-theme`), entrambi curati. Niente viola,
niente gradienti decorativi, niente testo con gradiente.

## Tipografia

- Titoli: Schibsted Grotesk (variabile 400–700), tracking negativo che cresce con la taglia
  (da -0.01em a -0.035em), interlinea stretta.
- Testo: Inter (400–600), 17px, interlinea 1.6, misura massima ~65ch.
- Numeri (prezzi, specifiche, meteo): cifre tabellari.

## Forma

- Raggio card 16px, controlli 12px, pillole solo per chip piccoli.
- Profondità: o bordo o ombra, mai entrambi. Ombre con offset e sfocatura morbida, tinte di blu.
- Il contenuto sta nel `.wrap` (max 1240px, margini 22px); i media possono andare a filo
  schermo (`--fuori-wrap`).

## Movimento

- Curva base `--ease-out: cubic-bezier(.16, 1, .3, 1)`; durate `--t-veloce` 160ms (feedback),
  `--t-medio` 320ms (stato), `--t-lento` 700ms (entrate).
- Un'entrata d'autore all'apertura (hero), poi movimento solo dove spiega qualcosa: rotta dei
  passi che si disegna, foto che si apre, previsioni del mare che crescono.
- Hover sui figli, non sull'elemento: la card resta ferma, si muovono foto e freccia.
- Pressione immediata (`:active` scala .97). Niente rimbalzi, niente fade-in su ogni sezione.
- `prefers-reduced-motion`: nessuno spostamento, restano i cambi di colore e opacità.

## Componenti

Button (primario turchese, chiaro su foto, linea), Section + SectionIntro, TourCard,
Slideshow, carosello orizzontale con scroll-snap, accordion FAQ su `<details>`, striscia
meteo, bottone WhatsApp fisso.
