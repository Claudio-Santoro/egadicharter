import { Link } from 'react-router-dom'
import { site } from '../data/site'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.griglia}`}>
        <div>
          <Link className={styles.marchio} to="/">
            <svg className={styles.segno} viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="24" cy="24" r="23" fill="none" stroke="#37B7CE" strokeWidth="1.6" />
              <path d="M9 30c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 6 3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M24 10l8 15H16l8-15z" fill="#fff" />
              <path d="M24 25v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={styles.testo}>
              {site.nome}
              <span>{site.claim}</span>
            </span>
          </Link>
          <p className={styles.descrizione}>{site.footer.descrizione}</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.8-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.7v8z" /></svg></a>
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
          <p>{site.indirizzo.riga1}<br />{site.indirizzo.riga2}<br />{site.indirizzo.riga3}</p>
          <p className={styles.orari}>{site.orari}</p>
          <a className={styles.telefono} href={site.telefonoHref}>{site.telefono}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>

      <div className={`wrap ${styles.nota}`}>
        <span>Bellavia Egadi Charter — {site.partitaIva}</span>
      </div>
    </footer>
  )
}
