import { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Variante = 'primario' | 'chiaro' | 'linea'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variante?: Variante
  /** freccia dopo il testo: per le azioni che portano avanti (vedi, prenota) */
  freccia?: boolean
  children: ReactNode
}

export default function Button({ href, variante = 'primario', freccia, children: testo, className, ...rest }: Props) {
  const classi = [styles.btn, styles[variante], className].filter(Boolean).join(' ')
  const children = freccia ? (
    <>
      {testo}
      <svg className={styles.freccia} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </>
  ) : testo
  const isHttp = href.startsWith('http')
  const isEsterno = isHttp || href.startsWith('mailto:') || href.startsWith('tel:')
  const isAncora = href.includes('#')

  if (isEsterno || isAncora) {
    return (
      <a
        className={classi}
        href={href}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link className={classi} to={href} {...(rest as Record<string, unknown>)}>
      {children}
    </Link>
  )
}
