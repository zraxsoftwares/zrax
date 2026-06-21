"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket, Diamond } from "lucide-react"
import { siteConfig } from "@/data/site"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Search,
  PenTool,
  Code2,
  Rocket,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Process() {
  return (
    <section
      id="process"
      className="relative min-h-screen snap-start flex items-center py-24"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Our Craftsmanship
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            The{" "}
            <span className="animate-gold-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Zrax Atelier
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-secondary text-sm sm:text-base">
            A proven 4-phase process refined over years of delivering
            high-stakes software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {siteConfig.process.map((step, i) => {
              const Icon = iconMap[step.icon] || Code2
              const content = (
                <div className="relative flex items-start gap-6 p-6 sm:p-8 rounded-2xl border border-card-border bg-card-bg transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-glow">
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold tracking-widest text-primary">
                        STEP {step.step}
                      </span>
                      <Diamond size={10} className="text-primary/40" />
                      <span className="text-xs text-muted">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary-light font-medium mt-1">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-secondary mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className={i % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}
                >
                  {content}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
