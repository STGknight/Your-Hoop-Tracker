import { useState } from 'react'

// SignUpScreen uses local React state for mock auth until real auth is added later.
function SignUpScreen({ onBack, onLogIn, onCreateAccount }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    onCreateAccount({
      name: name.trim() || 'You',
      email,
    })
  }

  return (
    <section className="flex flex-1 flex-col p-6">
      <button
        type="button"
        onClick={onBack}
        className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white"
      >
        ← Back
      </button>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-hoop-300">
          Sign Up
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Create your account</h1>
        <p className="mt-3 text-white/65">
          Mock auth keeps this beginner-friendly while the app flow is built out.
        </p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-bold text-white/80">Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jordan Smith"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-white/35 focus:border-hoop-300 focus:outline-none focus:ring-4 focus:ring-hoop-300/20"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/80">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-white/35 focus:border-hoop-300 focus:outline-none focus:ring-4 focus:ring-hoop-300/20"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/80">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create a password"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-white/35 focus:border-hoop-300 focus:outline-none focus:ring-4 focus:ring-hoop-300/20"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-hoop-500 px-5 py-4 text-lg font-black text-court-950 transition hover:bg-hoop-400 focus:outline-none focus:ring-4 focus:ring-hoop-300/40"
        >
          Create Account
        </button>
      </form>

      <div className="mt-auto pt-8 text-center">
        <button
          type="button"
          onClick={onLogIn}
          className="font-bold text-hoop-300 transition hover:text-hoop-400"
        >
          Already have an account? Log In
        </button>
      </div>
    </section>
  )
}

export default SignUpScreen
