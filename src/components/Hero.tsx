"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Code2, Cpu } from "lucide-react"
import { siteConfig } from "@/data/site"

const floatingIcons = [
  { Icon: Shield, x: "10%", y: "20%", delay: 0, size: 20 },
  { Icon: Code2, x: "85%", y: "30%", delay: 1, size: 24 },
  { Icon: Cpu, x: "15%", y: "70%", delay: 2, size: 28 },
  { Icon: Shield, x: "80%", y: "75%", delay: 0.5, size: 18 },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0v80M0 40h80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
            <circle cx="40" cy="40" r="2" fill="currentColor" className="text-primary" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="80" r="1.5" fill="currentColor" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {floatingIcons.map(({ Icon, x, y, delay, size }) => (
        <motion.div
          key={delay}
          className="absolute hidden lg:block text-primary/20 pointer-events-none"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary-light mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
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
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Custom Websites,
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
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
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 active:scale-95"
          >
            Get Started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-white/5 active:scale-95"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-8 text-xs text-muted"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            React / Next.js
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Node.js / Go
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            PostgreSQL / Redis
          </span>
        </motion.div>
      </div>
    </section>
  )
}
