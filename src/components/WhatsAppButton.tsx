import { site } from '../data/site'
import styles from './WhatsAppButton.module.css'

type Props = {
  messaggio?: string
  elevato?: boolean
}

export default function WhatsAppButton({ messaggio, elevato }: Props) {
  const testo = messaggio ?? 'Ciao! Vorrei avere informazioni sulle escursioni.'
  const href = `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(testo)}`
  const classi = [styles.wa, elevato && styles.elevato].filter(Boolean).join(' ')

  return (
    <a className={classi} href={href} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm4.4 12.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.3.9 2.4c.1.2 1.6 2.6 4 3.5 1.7.6 2 .5 2.4.5.4 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1z" /></svg>
    </a>
  )
}
