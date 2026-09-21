export type FaqItem = {
  id: string
  domanda: string
  risposta: string
  apertaDiDefault?: boolean
}

export const faq: FaqItem[] = [
  {
    id: 'f1',
    domanda: 'Da dove si parte?',
    risposta: "Dal porticciolo di Nautica Cordaro, a Salinagrande (TP). Alla conferma ti mandiamo la posizione su Google Maps.",
    apertaDiDefault: true,
  },
  {
    id: 'f2',
    domanda: 'Cosa è compreso nel prezzo?',
    risposta: "Carburante, skipper, pranzo a bordo, acqua e bibite, maschere e boccagli, ombreggiatura e assicurazione. Non sono comprese le tasse di sbarco a Favignana e l'ingresso alla Grotta del Genovese.",
  },
  {
    id: 'f3',
    domanda: 'Cosa devo portare?',
    risposta: "Costume, telo, crema solare, un cappello e una felpa leggera per il rientro. A bordo si sta scalzi, le scarpe si lasciano in una cesta all'imbarco.",
  },
  {
    id: 'f4',
    domanda: 'E se il tempo è brutto?',
    risposta: 'Decidiamo la sera prima entro le 20:00. Se non si esce, si sposta a un altro giorno o si annulla senza costi. Non usciamo mai con mare oltre forza 3.',
  },
  {
    id: 'f5',
    domanda: 'Si può venire con bambini piccoli?',
    risposta: 'Sì, abbiamo giubbotti dalla taglia 0. Per i bimbi sotto i tre anni scriveteci: valutiamo insieme giornata, mare e itinerario.',
  },
  {
    id: 'f6',
    domanda: 'Bisogna saper nuotare?',
    risposta: 'No. Le soste bagno sono facoltative e in acque basse, e a bordo ci sono ciambelle e giubbotti per chi vuole entrare in acqua in sicurezza.',
  },
]
