import RunCard from '../components/RunCard.jsx'

// SessionDetailsScreen shows full run info and the live mock player list.
function SessionDetailsScreen({ run, currentUser, hasJoined, onJoinRun }) {
  return (
    <section className="flex-1 space-y-5 p-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hoop-300">
          Run details
        </p>
        <h2 className="mt-2 text-3xl font-black">{run.title}</h2>
        <p className="mt-2 text-white/65">
          Join once to add {currentUser.name} to the confirmed player list.
        </p>
      </div>

      <RunCard
        run={run}
        onPrimaryAction={onJoinRun}
        primaryActionLabel={hasJoined ? 'You Joined' : 'Join Run'}
      />

      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
        <h3 className="text-xl font-black">Players who joined</h3>
        <div className="mt-4 space-y-3">
          {run.players.map((player, index) => (
            <div
              key={player.id}
              className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3"
            >
              <div>
                <p className="font-bold">{player.name}</p>
                <p className="text-sm text-white/50">Spot #{index + 1}</p>
              </div>
              <span className="rounded-full bg-hoop-500/15 px-3 py-1 text-sm font-bold text-hoop-300">
                Confirmed
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SessionDetailsScreen
