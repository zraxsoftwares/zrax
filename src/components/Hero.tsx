"use client"

import { useEffect } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"
import { Crown, Code2, Shield } from "lucide-react"
import { MagneticButton } from "@/components/MagneticButton"
import { siteConfig } from "@/data/site"

const floatingIcons = [
  { Icon: Crown, x: "10%", y: "20%", delay: 0, size: 22 },
  { Icon: Code2, x: "85%", y: "30%", delay: 1, size: 24 },
  { Icon: Shield, x: "15%", y: "70%", delay: 2, size: 28 },
  { Icon: Crown, x: "80%", y: "75%", delay: 0.5, size: 18 },
]

export function Hero() {
  const scrollY = useMotionValue(0)

  useEffect(() => {
    const container = document.querySelector("#main-content")
    if (!container) return
    const onScroll = () => scrollY.set(container.scrollTop)
    onScroll()
    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [scrollY])

  const bgY = useTransform(scrollY, [0, 800], [0, -200])
  const fgY = useTransform(scrollY, [0, 800], [0, 60])

  return (
    <section
      id="hero"
      className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Parallax background layer */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hero-glow-1 blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-hero-glow-2 blur-3xl opacity-30" />
      </motion.div>

      {/* Diamond SVG pattern — parallax */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y: bgY }}
      >
        <defs>
          <pattern id="diamond" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <polygon points="40,5 75,40 40,75 5,40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
            <circle cx="40" cy="40" r="1.5" fill="currentColor" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond)" />
      </motion.svg>

      {/* Floating icons — slowed */}
      {floatingIcons.map(({ Icon, x, y, delay, size }) => (
        <motion.div
          key={delay}
          className="absolute hidden lg:block text-primary/20 pointer-events-none"
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Parallax foreground content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        style={{ y: fgY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary-light mb-8">
            <Crown size={12} className="text-primary-light" />
            Trusted by 100+ clients worldwide
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-balance"
        >
          Building{" "}
          <span className="animate-gold-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Custom Websites,
          </span>
          <br />
          <span className="animate-gold-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Applications,
          </span>
          <br />
          & Innovative Software Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-secondary leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contact"
            variant="primary"
            size="lg"
            className="group"
          >
            Get Started
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </MagneticButton>
          <MagneticButton
            href="#portfolio"
            variant="secondary"
            size="lg"
            className="group"
          >
            Begin Your Legacy
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-8 text-xs text-muted"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            React / Next.js
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Node.js / Go
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            PostgreSQL / Redis
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
