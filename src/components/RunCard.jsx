// RunCard summarizes one basketball session and can be reused for future run lists.
function RunCard({ run, onPrimaryAction, primaryActionLabel = 'Join Run' }) {
  const filledSpots = run.players.length
  const spotsRemaining = run.maxSpots - filledSpots

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-hoop-300">
            Tonight
          </p>
          <h2 className="mt-2 text-3xl font-black">{run.title}</h2>
        </div>
        <div className="rounded-2xl bg-hoop-500 px-3 py-2 text-center text-court-950">
          <p className="text-xs font-bold uppercase">Price</p>
          <p className="text-lg font-black">${run.price}</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-white/85">
        <p className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
          <span>Time</span>
          <strong className="text-white">{run.time}</strong>
        </p>
        <p className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
          <span>Location</span>
          <strong className="text-white">{run.location}</strong>
        </p>
        <p className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
          <span>Spots</span>
          <strong className="text-white">
            {filledSpots}/{run.maxSpots}
          </strong>
        </p>
      </div>

      <div className="mt-5">
        <div className="h-3 overflow-hidden rounded-full bg-black/30">
          <div
            className="h-full rounded-full bg-hoop-500 transition-all"
            style={{ width: `${(filledSpots / run.maxSpots) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-white/60">
          {spotsRemaining > 0 ? `${spotsRemaining} spots left` : 'Run is full'}
        </p>
      </div>

      <button
        type="button"
        onClick={onPrimaryAction}
        className="mt-6 w-full rounded-2xl bg-hoop-500 px-5 py-4 text-base font-black text-court-950 transition hover:bg-hoop-400 focus:outline-none focus:ring-4 focus:ring-hoop-300/40"
      >
        {primaryActionLabel}
      </button>
    </article>
  )
}

export default RunCard
