import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import TourDetail from './pages/TourDetail'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import { LANGS, lp, splitPath } from './i18n'
import Head from './Head'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isTourDetail = splitPath(pathname).path.startsWith('/escursioni/')

  return (
    <>
      <ScrollToTop />
      <Head />
      <Header />
      <main>
        <Routes>
          {/* italiano senza prefisso, le altre lingue con /en, /pl, ...: la lingua la legge useLang() dall'URL */}
          {LANGS.flatMap((l) => [
            <Route key={`${l}/`} path={lp('/', l)} element={<Home />} />,
            <Route key={`${l}/e`} path={lp('/escursioni/:slug', l)} element={<TourDetail />} />,
            <Route key={`${l}/c`} path={lp('/contatti', l)} element={<Contact />} />,
            <Route key={`${l}/p`} path={lp('/privacy', l)} element={<Privacy />} />,
          ])}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {/* la pagina escursione ha già il suo bottone WhatsApp sempre visibile (barra mobile / aside sticky) */}
      {!isTourDetail && <WhatsAppButton />}
    </>
  )
}
