import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import TourGrid from '../components/TourGrid'
import AboutBlock from '../components/AboutBlock'
import FleetGrid from '../components/FleetGrid'
import IslandCards from '../components/IslandCards'
import HowItWorks from '../components/HowItWorks'
import Reviews from '../components/Reviews'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'
import { tours } from '../data/tours'
import { boats } from '../data/boats'
import { islands } from '../data/islands'
import { reviews, riepilogoRecensioni } from '../data/reviews'
import { faq } from '../data/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TourGrid tours={tours} />
      <AboutBlock />
      <FleetGrid boats={boats} />
      <IslandCards islands={islands} />
      <HowItWorks />
      <Reviews reviews={reviews} voto={riepilogoRecensioni.voto} totale={riepilogoRecensioni.totale} />
      <Faq items={faq} />
      <FinalCta />
    </>
  )
}
