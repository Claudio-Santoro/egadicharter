import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import TourGrid from '../components/TourGrid'
import AboutBlock from '../components/AboutBlock'
import FleetGrid from '../components/FleetGrid'
import IslandCards from '../components/IslandCards'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'
import { tours } from '../data/tours'
import { islands } from '../data/islands'
import { faq } from '../data/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TourGrid tours={tours} />
      <AboutBlock />
      <FleetGrid />
      <IslandCards islands={islands} />
      <HowItWorks />
      <Faq items={faq} />
      <FinalCta />
    </>
  )
}
