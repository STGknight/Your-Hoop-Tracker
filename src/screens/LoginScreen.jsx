import BasketballIcon from '../components/BasketballIcon.jsx'

// LoginScreen is a mock auth landing page; Supabase auth can replace these buttons later.
function LoginScreen({ onContinue }) {
  return (
    <section className="flex flex-1 flex-col justify-between p-6">
      <div className="pt-8">
        <BasketballIcon />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-hoop-300">
          Your Hoop Tracker
        </p>
        <h1 className="mt-3 text-5xl font-black leading-tight tracking-tight">
          Track runs. Join games. Hoop tonight.
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/70">
          Create an account, grab your spot, and let the organizer know you are ready for the next local run.
        </p>
      </div>

      <div className="space-y-4 pb-4">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-hoop-500 px-5 py-4 text-lg font-black text-court-950 transition hover:bg-hoop-400 focus:outline-none focus:ring-4 focus:ring-hoop-300/40"
        >
          Sign Up
        </button>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
          <p className="text-sm text-white/60">Already have an account?</p>
          <button
            type="button"
            onClick={onContinue}
            className="mt-2 font-bold text-hoop-300 transition hover:text-hoop-400"
          >
            Log In
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoginScreen
