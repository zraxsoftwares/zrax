"use client"

import { motion } from "framer-motion"
import { Check, Crown, Diamond } from "lucide-react"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Pricing() {
  return (
    <section className="relative flex items-center py-24">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Investment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Engagement Model
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-secondary text-sm sm:text-base">
            Every project is unique. Select the tier that fits your needs or
            contact us for a custom proposal.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {siteConfig.pricing.map((tier) => (
            <motion.div
              key={tier.tier}
              variants={cardVariants}
              className={cn(
                "relative rounded-2xl border p-8 transition-all duration-500 flex flex-col",
                tier.featured
                  ? "border-primary bg-card-bg shadow-lg shadow-glow scale-[1.02] md:scale-105"
                  : "border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-glow"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-dark px-4 py-1 text-xs font-bold text-white">
                    <Crown size={12} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-2">
                <Diamond size={14} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  {tier.tier}
                </h3>
              </div>
              <p className="text-sm text-muted mb-4">{tier.description}</p>
              <p className="text-2xl font-bold text-foreground mb-6">
                {tier.price}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-secondary"
                  >
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all text-center",
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-glow"
                    : "border border-border text-foreground hover:bg-surface-hover"
                )}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
