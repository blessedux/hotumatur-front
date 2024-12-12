import { Metadata } from "next"
import AboutHero from "./components/about-hero"
import PlanTrip from "./components/plan-trip"
import Services from "./components/services"
import Team from "./components/team"
import Testimonials from "./components/testimonials"
import Partners from "./components/partners"
import Gallery from "./components/gallery"
import { FlightMap } from '@/components/flight-map'

export const metadata: Metadata = {
  title: "Nosotros | Hotumatur",
  description: "Conoce más sobre nuestro equipo y servicios en Rapa Nui",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d14]">
      <AboutHero />
      <PlanTrip />
      <Services />  
      <Team />
      <Testimonials />
      <FlightMap />
      <Gallery />
    </main>
  )
}

