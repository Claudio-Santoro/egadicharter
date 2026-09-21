import { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Variante = 'primario' | 'chiaro' | 'linea'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variante?: Variante
  children: ReactNode
}

export default function Button({ href, variante = 'primario', children, className, ...rest }: Props) {
  const classi = [styles.btn, styles[variante], className].filter(Boolean).join(' ')
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
