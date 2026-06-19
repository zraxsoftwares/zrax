"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  PenTool,
  type LucideIcon,
} from "lucide-react"
import { siteConfig } from "@/data/site"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  PenTool,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen snap-start flex items-center py-24"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Full-Scale{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Software Engineering
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-secondary text-sm sm:text-base">
            From concept to launch — we deliver production-ready software at
            every layer of the stack.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] || Code2
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8 transition-all duration-500 hover:bg-surface-hover hover:border-primary/30 hover:shadow-lg hover:shadow-glow"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
