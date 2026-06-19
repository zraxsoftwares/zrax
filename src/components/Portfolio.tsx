"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/data/site"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
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
            Products We Delivered
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Scale & Impact
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-secondary text-sm sm:text-base">
            Production-grade systems serving thousands of users daily.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {siteConfig.portfolio.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-card-border bg-card-bg transition-all duration-500 hover:bg-surface-hover hover:border-primary/30 hover:shadow-lg hover:shadow-glow hover:scale-[1.02] cursor-default flex flex-col overflow-hidden"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted group-hover:text-primary transition-colors"
                  />
                </div>

                <p className="text-sm text-secondary leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
