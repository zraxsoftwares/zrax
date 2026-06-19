"use client"

import { useState, useEffect } from "react"

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-700 md:bottom-6 md:right-6 ${
        visible
          ? "opacity-100 translate-y-0 bottom-24 md:bottom-6"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
      >
        <span className="h-2 w-2 rounded-full bg-white animate-pulse-glow" />
        Book a Consultation
      </a>
    </div>
  )
}
