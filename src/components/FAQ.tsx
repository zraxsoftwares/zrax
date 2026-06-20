"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative flex items-center py-24">
      <div className="mx-auto max-w-3xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Questions?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Frequently{" "}
            <span className="animate-gold-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {siteConfig.faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={cn(
                  "rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-primary/30 bg-card-bg"
                    : "border-card-border hover:border-border"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      "shrink-0 text-muted transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
