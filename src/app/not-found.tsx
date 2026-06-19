import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
          <span className="relative text-8xl sm:text-9xl font-bold font-serif text-primary/30">
            404
          </span>
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          The page you seek is beyond this realm
        </h1>
        <p className="text-secondary text-sm sm:text-base mb-8 max-w-md mx-auto">
          Like a misplaced treasure, this page has been lost to the depths.
          Let us guide you back.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-glow"
        >
          Return Home
        </Link>
        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="h-1 w-1 rounded-full bg-primary/40" />
          <span className="h-1 w-1 rounded-full bg-primary/40" />
          <span className="h-1 w-1 rounded-full bg-primary/40" />
        </div>
      </div>
    </div>
  )
}
