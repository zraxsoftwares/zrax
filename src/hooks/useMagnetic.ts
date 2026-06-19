import { useRef, useCallback, type RefObject } from "react"

export function useMagnetic<T extends HTMLElement>(): {
  ref: RefObject<T | null>
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
} {
  const ref = useRef<T | null>(null)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const dist = Math.sqrt(x * x + y * y)
    const maxDist = 150
    const strength = Math.max(0, 1 - dist / maxDist)
    const maxPull = 4
    ref.current.style.transform = `translate(${x * strength * (maxPull / 50)}px, ${y * strength * (maxPull / 50)}px)`
  }, [])

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0px, 0px)"
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
