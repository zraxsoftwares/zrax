"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light"

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored === "dark" || stored === "light") return stored
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  function toggle() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
