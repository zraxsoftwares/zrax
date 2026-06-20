export default function TermsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <div className="skeleton h-6 w-36" />
          <div className="skeleton h-5 w-24" />
        </div>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="skeleton h-10 w-64 mb-2" />
          <div className="skeleton h-4 w-48 mb-12" />

          <div className="skeleton h-6 w-48 mb-6" />
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 mb-3">
              <div className="skeleton h-4 w-6" />
              <div className="skeleton h-4 w-64" />
            </div>
          ))}

          <div className="mt-16 space-y-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <div className="skeleton h-8 w-48 mb-4" />
                <div className="skeleton h-4 w-full mb-2" />
                <div className="skeleton h-4 w-5/6 mb-2" />
                <div className="skeleton h-4 w-4/6" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
