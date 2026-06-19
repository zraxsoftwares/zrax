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
    <div id="main-content" className="snap-y snap-mandatory overflow-y-auto max-h-screen">
      <Header />
      <Hero />
      <GoldLineDraw>
        <TrustBar />
      </GoldLineDraw>
      <GoldLineDraw>
        <Services />
      </GoldLineDraw>
      <GoldLineDraw>
        <Process />
      </GoldLineDraw>
      <GoldLineDraw>
        <WhyChooseUs />
      </GoldLineDraw>
      <GoldLineDraw>
        <Portfolio />
      </GoldLineDraw>
      <GoldLineDraw>
        <Team />
      </GoldLineDraw>
      <GoldLineDraw>
        <Ratings />
      </GoldLineDraw>
      <GoldLineDraw>
        <FAQ />
      </GoldLineDraw>
      <GoldLineDraw>
        <Pricing />
      </GoldLineDraw>
      <GoldLineDraw>
        <Footer />
      </GoldLineDraw>
      <FloatingCTA />
    </div>
  )
}
