// AdminScreen lets the organizer review confirmed players and toggle paid/unpaid status.
function AdminScreen({ run, onTogglePayment }) {
  const paidCount = run.players.filter((player) => player.paymentStatus === 'Paid').length

  return (
    <section className="flex-1 space-y-5 p-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hoop-300">
          Admin view
        </p>
        <h2 className="mt-2 text-3xl font-black">Confirmed players</h2>
        <p className="mt-2 text-white/65">
          {paidCount} of {run.players.length} players have paid for {run.title}.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
        <div className="space-y-3">
          {run.players.map((player) => {
            const isPaid = player.paymentStatus === 'Paid'

            return (
              <div
                key={player.id}
                className="rounded-2xl bg-black/20 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold">{player.name}</p>
                    <p className="text-sm text-white/50">Confirmed player</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-black ${
                      isPaid
                        ? 'bg-emerald-400/15 text-emerald-300'
                        : 'bg-hoop-500/15 text-hoop-300'
                    }`}
                  >
                    {player.paymentStatus}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onTogglePayment(player.id)}
                  className="mt-4 w-full rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-white transition hover:border-hoop-400 hover:text-hoop-300"
                >
                  Mark as {isPaid ? 'Unpaid' : 'Paid'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AdminScreen
