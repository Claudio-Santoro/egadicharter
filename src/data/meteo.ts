// Previsioni mare/vento da Open-Meteo (gratuito, senza API key, CC BY 4.0).
// Punto in mare tra Trapani e Favignana.
const LAT = 37.97
const LON = 12.25

// Soglie per il gommone: da tarare con lo skipper.
export const SOGLIE = {
  perfetto: { onda: 0.5, vento: 10, raffiche: 15, pioggia: 20 },
  buono: { onda: 1.0, vento: 15, raffiche: 20, pioggia: 40 },
} as const

export type Stato = 'perfetto' | 'buono' | 'sconsigliato'

export type Giorno = {
  data: string // YYYY-MM-DD, ora di Roma
  onda: number | null // m
  vento: number | null // kn
  raffiche: number | null // kn
  pioggia: number | null // %
  stato: Stato
}

type Valori = Omit<Giorno, 'data' | 'stato'>

export function classifica({ onda, vento, raffiche, pioggia }: Valori): Stato {
  // Dato mancante = non promettiamo niente.
  if (onda == null || vento == null || raffiche == null) return 'sconsigliato'
  const p = pioggia ?? 0
  const sotto = (s: (typeof SOGLIE)[keyof typeof SOGLIE]) =>
    onda < s.onda && vento < s.vento && raffiche < s.raffiche && p < s.pioggia
  if (sotto(SOGLIE.perfetto)) return 'perfetto'
  if (sotto(SOGLIE.buono)) return 'buono'
  return 'sconsigliato'
}

const CACHE_KEY = 'meteo-egadi'
const CACHE_MS = 60 * 60 * 1000

export async function caricaPrevisioni(signal: AbortSignal): Promise<Giorno[]> {
  try {
    const c = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? 'null')
    if (c && Date.now() - c.t < CACHE_MS) return c.giorni
  } catch { /* storage non disponibile */ }

  const base = `latitude=${LAT}&longitude=${LON}&timezone=Europe%2FRome&forecast_days=7`
  const [mare, vento] = await Promise.all([
    fetch(`https://marine-api.open-meteo.com/v1/marine?${base}&daily=wave_height_max`, { signal }),
    fetch(`https://api.open-meteo.com/v1/forecast?${base}&wind_speed_unit=kn&daily=wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max`, { signal }),
  ].map(p => p.then(r => {
    if (!r.ok) throw new Error(`Open-Meteo ${r.status}`)
    return r.json()
  })))

  const giorni: Giorno[] = (vento.daily.time as string[]).map((data, i) => {
    const v: Valori = {
      onda: mare.daily.wave_height_max?.[i] ?? null,
      vento: vento.daily.wind_speed_10m_max?.[i] ?? null,
      raffiche: vento.daily.wind_gusts_10m_max?.[i] ?? null,
      pioggia: vento.daily.precipitation_probability_max?.[i] ?? null,
    }
    return { data, ...v, stato: classifica(v) }
  })

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), giorni }))
  } catch { /* storage non disponibile */ }
  return giorni
}
