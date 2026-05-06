// A lightweight CSS basketball mark used instead of an image asset.
function BasketballIcon() {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-hoop-300 bg-hoop-500 shadow-glow">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-court-900/70" />
      <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-court-900/70" />
      <div className="absolute -left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border-4 border-court-900/70" />
      <div className="absolute -right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border-4 border-court-900/70" />
    </div>
  )
}

export default BasketballIcon
