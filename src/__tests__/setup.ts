import "@testing-library/jest-dom/vitest"
import { vi, beforeEach } from "vitest"
import React from "react"

class MockIntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ""
  readonly thresholds: ReadonlyArray<number> = [0]
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

beforeEach(() => {
  const mediaQuery = {
    matches: false,
    media: "",
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({ ...mediaQuery, media: query }),
  })
  const store: Record<string, string> = {}
  Object.defineProperty(window, "localStorage", {
    writable: true,
    value: {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v },
      removeItem: (k: string) => { delete store[k] },
      clear: () => { for (const k in store) delete store[k] },
      length: 0,
      key: () => null,
    },
  })
})

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill, ...rest } = props
    return React.createElement("img", { ...rest, "data-fill": fill ? "true" : undefined })
  },
}))
