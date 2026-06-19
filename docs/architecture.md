# Architecture Overview

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
│   ├── layout.tsx    # Root layout (fonts, metadata, theme)
│   ├── page.tsx      # Home page (assembles all sections)
│   └── globals.css   # Tailwind theme & custom animations
├── components/       # Reusable UI components (one per section)
│   ├── Header.tsx    # Sticky nav with mobile menu
│   ├── Hero.tsx      # Full-screen hero with animations
│   ├── Services.tsx  # Services grid section
│   ├── WhyChooseUs.tsx
│   ├── Portfolio.tsx
│   ├── Ratings.tsx
│   ├── ContactForm.tsx  # Inline form with validation
│   └── Footer.tsx    # Contact info + form + legal
├── data/
│   └── site.ts       # Single source of truth for content
└── lib/
    ├── env.ts        # Env var helper with fallbacks
    └── utils.ts      # cn() utility for Tailwind merging
```

## Key Patterns

### Scroll-Snap Layout
The page uses CSS `snap-y snap-mandatory` so each section fills the viewport. Every section component has `min-h-screen snap-start`.

### Content Configuration
All text content lives in `src/data/site.ts`, imported by components. Sensible defaults are used, overridable via `NEXT_PUBLIC_*` environment variables.

### Client Components
All section components use `"use client"` for Framer Motion animations. Data fetching is not needed since content is static.

### Component Architecture
- Each section is a standalone component with its own animation variants
- Consistent pattern: section wrapper → header (eyebrow + title + description) → content grid
- Framer Motion `whileInView` triggers staggered entry animations

## Security

- Security headers (CSP, HSTS, X-Frame-Options) configured in `next.config.ts`
- No secrets committed; all configurable values use environment variables
- Contact form validates input client-side before submission
- Form action endpoint should be replaced with a real form service (Formspree, etc.)

## Performance

- Static site (no server-side data fetching)
- CSS scroll-snap instead of JS for section snapping
- Framer Motion animations use GPU-accelerated properties
- Font optimization via `next/font/google`
