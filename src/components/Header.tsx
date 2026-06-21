"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/data/site"
import { useTheme } from "@/components/ThemeProvider"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const container = document.querySelector("#main-content")
    if (!container) return
    const onScroll = () => setScrolled(container.scrollTop > 20)
    onScroll()
    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-nav-bg backdrop-blur-2xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all">
            <picture>
              <source
                srcSet={theme === "dark" ? "/darkmode.webp" : "/lightmode.webp"}
                type="image/webp"
              />
              <Image
                key={theme}
                src={theme === "dark" ? "/darkmode.jpeg" : "/lightmode.jpeg"}
                alt="ZRAX SOFTWARES"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </picture>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground block font-serif">
            ZRAX TECH
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-glow active:scale-95"
          >
            Book a Consultation
          </a>

          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-all"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-b border-border",
          mobileOpen ? "max-h-80 bg-nav-bg backdrop-blur-2xl" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-light"
          >
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  )
}
