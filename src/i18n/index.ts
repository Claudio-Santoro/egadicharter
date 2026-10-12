import { useLocation } from 'react-router-dom'
import it from './it'
import en from './en'
import pl from './pl'
import es from './es'
import fr from './fr'
import de from './de'
import zh from './zh'

export type Dict = typeof it

// ponytail: tutti i dizionari finiscono nel bundle; import dinamico per lingua se il peso diventa un problema
export const dicts = { it, en, pl, es, fr, de, zh } satisfies Record<string, Dict>

export type Lang = keyof typeof dicts
export const LANGS = Object.keys(dicts) as Lang[]
export const LANG_DEFAULT: Lang = 'it'

export const NOMI: Record<Lang, string> = {
  it: 'Italiano', en: 'English', pl: 'Polski', es: 'Español', fr: 'Français', de: 'Deutsch', zh: '中文',
}
export const HREFLANG: Record<Lang, string> = {
  it: 'it', en: 'en', pl: 'pl', es: 'es', fr: 'fr', de: 'de', zh: 'zh-Hans',
}
export const LOCALE: Record<Lang, string> = {
  it: 'it-IT', en: 'en-GB', pl: 'pl-PL', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', zh: 'zh-CN',
}
export const OG_LOCALE: Record<Lang, string> = {
  it: 'it_IT', en: 'en_GB', pl: 'pl_PL', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', zh: 'zh_CN',
}

const isLang = (s: string): s is Lang => (LANGS as string[]).includes(s)

/** "/en/contatti" → { lang: 'en', path: '/contatti' }; l'italiano non ha prefisso */
export function splitPath(pathname: string): { lang: Lang; path: string } {
  const [, primo, ...resto] = pathname.split('/')
  if (primo !== LANG_DEFAULT && isLang(primo)) return { lang: primo, path: '/' + resto.join('/') }
  return { lang: LANG_DEFAULT, path: pathname || '/' }
}

/** path italiano ("/contatti", "/#faq") → stesso path nella lingua data */
// ponytail: path e slug restano in italiano in tutte le lingue; slug tradotti se servono keyword locali
export function lp(path: string, lang: Lang): string {
  if (lang === LANG_DEFAULT) return path
  if (path === '/') return `/${lang}`
  if (path.startsWith('/#')) return `/${lang}${path.slice(1)}`
  return `/${lang}${path}`
}

// La lingua viene solo dall'URL: niente redirect da navigator.language, rovinerebbero l'indicizzazione.
export function useLang(): Lang {
  return splitPath(useLocation().pathname).lang
}

export function useT(): Dict {
  return dicts[useLang()]
}
