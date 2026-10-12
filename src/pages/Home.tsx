import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import TourGrid from '../components/TourGrid'
import AboutBlock from '../components/AboutBlock'
import FleetGrid from '../components/FleetGrid'
import IslandCards from '../components/IslandCards'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TourGrid />
      <AboutBlock />
      <FleetGrid />
      <IslandCards />
      <HowItWorks />
      <Faq />
      <FinalCta />
    </>
  )
}
