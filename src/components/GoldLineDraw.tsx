"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface GoldLineDrawProps {
  children: ReactNode
  className?: string
}

export function GoldLineDraw({ children, className }: GoldLineDrawProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const line = el.querySelector(".section-gold-line") as HTMLElement | null
    if (!line) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add("visible")
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <div className="section-gold-line" />
      <div className="pl-4 md:pl-8 lg:pl-12">{children}</div>
    </div>
  )
}
