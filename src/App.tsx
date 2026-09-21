import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import TourDetail from './pages/TourDetail'
import Contact from './pages/Contact'

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
  const isTourDetail = pathname.startsWith('/escursioni/')

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escursioni/:slug" element={<TourDetail />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton elevato={isTourDetail} />
    </>
  )
}
