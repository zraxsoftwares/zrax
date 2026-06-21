import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { TrustBar } from "@/components/TrustBar"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Portfolio } from "@/components/Portfolio"
import { Team } from "@/components/Team"
import { Ratings } from "@/components/Ratings"
import { FAQ } from "@/components/FAQ"
import { Pricing } from "@/components/Pricing"
import { Footer } from "@/components/Footer"
import { GoldLineDraw } from "@/components/GoldLineDraw"
import { FloatingCTA } from "@/components/FloatingCTA"

export default function Home() {
  return (
    <div id="main-content" className="snap-y snap-mandatory overflow-y-auto max-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <GoldLineDraw>
        <TrustBar />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <Services />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <Process />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <WhyChooseUs />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <Portfolio />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <Team />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <Ratings />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <FAQ />
      </GoldLineDraw>
      <GoldLineDraw className="snap-start min-h-screen">
        <Pricing />
      </GoldLineDraw>
      <GoldLineDraw>
        <Footer />
      </GoldLineDraw>
      <FloatingCTA />
    </div>
  )
}
