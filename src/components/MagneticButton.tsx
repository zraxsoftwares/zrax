"use client"

import { useMagnetic } from "@/hooks/useMagnetic"
import { cn } from "@/lib/utils"

interface MagneticButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function MagneticButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>()

  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold active:scale-95 cursor-pointer"

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-glow transition-colors duration-300",
    secondary:
      "border border-border text-foreground hover:bg-surface-hover transition-colors duration-300",
    ghost: "text-secondary hover:text-foreground",
  }

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(base, variants[variant], sizes[size], className)}
      style={{ willChange: "transform" }}
      {...props}
    >
      {children}
    </a>
  )
}
