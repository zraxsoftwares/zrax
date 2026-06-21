"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/site"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Team() {
  return (
    <section className="relative min-h-screen snap-start flex items-center py-24">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Behind the Brand
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            The People{" "}
            <span className="animate-gold-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Behind the Code
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-secondary text-sm sm:text-base">
            We are engineers, designers, and problem-solvers who care deeply
            about what we build.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {siteConfig.team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group flex items-start gap-6 p-6 sm:p-8 rounded-2xl border border-card-border bg-card-bg transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-glow"
            >
              <div className="shrink-0 relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-light font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-secondary mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
