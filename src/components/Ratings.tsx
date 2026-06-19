"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { siteConfig } from "@/data/site"

export function Ratings() {
  const { score, max, count, label } = siteConfig.rating
  const testimonials = siteConfig.testimonials
  const [current, setCurrent] = useState(0)
  const fullStars = Math.floor(score)
  const fraction = score - fullStars

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const testimonial = testimonials[current]

  return (
    <section className="relative min-h-screen snap-start flex items-center py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-3xl px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Social Proof
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={i} size={28} className="fill-primary text-primary" />
          ))}
          {fraction > 0 && (
            <span className="relative">
              <Star size={28} className="text-muted" />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fraction * 100}%` }}
              >
                <Star size={28} className="fill-primary text-primary" />
              </span>
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          <span className="text-5xl sm:text-6xl font-bold text-foreground">
            {score}
          </span>
          <span className="text-2xl text-muted">/{max}</span>
          <p className="mt-2 text-sm font-medium text-secondary">{label}</p>
          <p className="text-xs text-muted">
            Based on {count}+ verified client reviews
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative mt-12 mx-auto max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-primary/30 mb-2 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-base sm:text-lg text-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setCurrent(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted/30 hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % testimonials.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
