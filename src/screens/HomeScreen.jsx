import RunCard from '../components/RunCard.jsx'

// HomeScreen is the session list. The MVP shows one nightly basketball run.
function HomeScreen({ run, onJoinRun }) {
  return (
    <section className="flex-1 space-y-5 p-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hoop-300">
          Session list
        </p>
        <h2 className="mt-2 text-3xl font-black">Tonight's basketball run</h2>
        <p className="mt-2 text-white/65">
          Review the run, join your spot, and pay your portion later.
        </p>
      </div>

      <RunCard run={run} onPrimaryAction={onJoinRun} />
    </section>
  )
}

export default HomeScreen
