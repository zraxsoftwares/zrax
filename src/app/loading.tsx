export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6 px-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full skeleton" />
        <div className="h-6 w-24 skeleton" />
      </div>
      <div className="h-4 w-64 skeleton mt-8" />
      <div className="h-4 w-48 skeleton" />
      <div className="h-4 w-56 skeleton" />
      <div className="flex gap-4 mt-8">
        <div className="h-12 w-36 skeleton rounded-full" />
        <div className="h-12 w-36 skeleton rounded-full" />
      </div>
    </div>
  )
}
