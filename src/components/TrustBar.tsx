"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/site"

export function TrustBar() {
  return (
    <section className="relative py-16 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-8"
        >
          Trusted by Industry Leaders
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {siteConfig.clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={50}
                className="h-10 w-auto opacity-40 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
