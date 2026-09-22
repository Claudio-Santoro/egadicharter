import { Link } from 'react-router-dom'
import { site } from '../data/site'
import styles from './Footer.module.css'

const crediti = [
  { autore: 'Ugeorge', licenza: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0/', file: 'https://commons.wikimedia.org/wiki/File:Favignana_(1).jpg' },
  { autore: 'A. Farricelli', licenza: 'CC BY-SA 4.0', url: 'https://creativecommons.org/licenses/by-sa/4.0/', file: 'https://commons.wikimedia.org/wiki/File:Sea_and_rocks_of_Favignana_Island.jpg' },
  { autore: 'Verbavolan', licenza: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0/', file: 'https://commons.wikimedia.org/wiki/File:Levanzo,_Egadi.jpg' },
  { autore: 'Dantadd', licenza: 'CC BY-SA 2.5', url: 'https://creativecommons.org/licenses/by-sa/2.5/', file: 'https://commons.wikimedia.org/wiki/File:Levanzo_e_Favignana.jpg' },
  { autore: 'Norbert Nagel', licenza: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0/', file: 'https://commons.wikimedia.org/wiki/File:Levanzo_Italy_04.jpg' },
  { autore: 'Tommie Hansen', licenza: 'CC BY 3.0', url: 'https://creativecommons.org/licenses/by/3.0/', file: 'https://commons.wikimedia.org/wiki/File:Sunrise_at_Favignana_Island,_Sicily_(Italy)_-_panoramio.jpg' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.griglia}`}>
        <div>
          <Link className={styles.marchio} to="/">
            <img className={styles.segno} src="/brand/logo-bianco.svg" alt="" width="46" height="36" />
            <span className={styles.testo}>
              {site.nome}
              <span>{site.claim}</span>
            </span>
          </Link>
          <p className={styles.descrizione}>{site.footer.descrizione}</p>
          <div className={styles.social}>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.8-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg></a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg></a>
            <a href={`https://wa.me/${site.whatsappNumero}`} aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-3-.2-.3A8 8 0 1112 20zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.3.9 2.4c.1.2 1.6 2.6 4 3.5 1.7.6 2 .5 2.4.5.4 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1z" /></svg></a>
          </div>
        </div>

        <div>
          <h4>Escursioni</h4>
          {site.footer.colonnaEscursioni.map((v) => (
            <Link key={v.href} to={v.href}>{v.label}</Link>
          ))}
        </div>

        <div>
          <h4>Informazioni</h4>
          {site.footer.colonnaInfo.map((v) => (
            v.href.startsWith('/#')
              ? <a key={v.href} href={v.href}>{v.label}</a>
              : <Link key={v.href} to={v.href}>{v.label}</Link>
          ))}
        </div>

        <div>
          <h4>Dove siamo</h4>
          <a className={styles.indirizzo} href={site.mappaLink} target="_blank" rel="noopener noreferrer">
            {site.indirizzo.riga1}<br />{site.indirizzo.riga2}<br />{site.indirizzo.riga3}
          </a>
          <p className={styles.orari}>{site.orari}</p>
          <a className={styles.telefono} href={site.telefonoHref}>{site.telefono}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>

      <div className={`wrap ${styles.nota}`}>
        <span>{site.ragioneSociale} — {site.partitaIva}</span>
        <span className={styles.crediti}>
          Foto (ridimensionate e ritagliate) da Wikimedia Commons:{' '}
          {crediti.map((c, i) => (
            <span key={c.file}>
              <a href={c.file} target="_blank" rel="noopener noreferrer">{c.autore}</a>{' '}
              (<a href={c.url} target="_blank" rel="noopener noreferrer">{c.licenza}</a>)
              {i < crediti.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </span>
      </div>
    </footer>
  )
}
