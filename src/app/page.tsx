import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Portfolio } from "@/components/Portfolio"
import { Ratings } from "@/components/Ratings"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto max-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Ratings />
      <Footer />
    </div>
  )
}
