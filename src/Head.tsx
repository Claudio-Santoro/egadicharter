import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { headHtml } from './seo'

/** aggiorna lang e <head> quando si naviga lato client; al primo caricamento li ha già scritti il prerender */
export default function Head() {
  const { pathname } = useLocation()
  const primo = useRef(true)

  useEffect(() => {
    const prerenderizzato = primo.current && document.head.querySelector('[data-head]')
    primo.current = false
    if (prerenderizzato) return

    const { lang, html } = headHtml(pathname, location.origin)
    document.documentElement.lang = lang
    document.head.querySelectorAll('[data-head]').forEach((el) => el.remove())
    document.head.insertAdjacentHTML('beforeend', html)
  }, [pathname])

  return null
}
