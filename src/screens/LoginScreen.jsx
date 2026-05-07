import { useState } from 'react'
import BasketballIcon from '../components/BasketballIcon.jsx'
import { emptyAuthForm } from '../data/mockData.js'

// LoginScreen handles the mock welcome, sign-up, and log-in flow before Supabase is added.
function LoginScreen({ onAuthenticate }) {
  const [authMode, setAuthMode] = useState('welcome')
  const [formValues, setFormValues] = useState(emptyAuthForm)

  function updateFormValue(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function switchAuthMode(nextMode) {
    setFormValues(emptyAuthForm)
    setAuthMode(nextMode)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAuthenticate(formValues)
  }

  if (authMode === 'signUp') {
    return (
      <AuthForm
        title="Create your account"
        description="Save your name now so you can join tonight's run with one tap."
        submitLabel="Create Account"
        switchText="Already have an account?"
        switchLabel="Log In"
        onSwitch={() => switchAuthMode('logIn')}
        onBack={() => switchAuthMode('welcome')}
        onSubmit={handleSubmit}
        formValues={formValues}
        onChange={updateFormValue}
        showNameField
      />
    )
  }

  if (authMode === 'logIn') {
    return (
      <AuthForm
        title="Welcome back"
        description="Log in with mock credentials to jump back into tonight's run."
        submitLabel="Log In"
        switchText="Need an account?"
        switchLabel="Sign Up"
        onSwitch={() => switchAuthMode('signUp')}
        onBack={() => switchAuthMode('welcome')}
        onSubmit={handleSubmit}
        formValues={formValues}
        onChange={updateFormValue}
      />
    )
  }

  return <WelcomeScreen onSignUp={() => switchAuthMode('signUp')} onLogIn={() => switchAuthMode('logIn')} />
}

function WelcomeScreen({ onSignUp, onLogIn }) {
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
          onClick={onSignUp}
          className="w-full rounded-2xl bg-hoop-500 px-5 py-4 text-lg font-black text-court-950 transition hover:bg-hoop-400 focus:outline-none focus:ring-4 focus:ring-hoop-300/40"
        >
          Sign Up
        </button>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
          <p className="text-sm text-white/60">Already have an account?</p>
          <button
            type="button"
            onClick={onLogIn}
            className="mt-2 font-bold text-hoop-300 transition hover:text-hoop-400"
          >
            Log In
          </button>
        </div>
      </div>
    </section>
  )
}

function AuthForm({
  title,
  description,
  submitLabel,
  switchText,
  switchLabel,
  onSwitch,
  onBack,
  onSubmit,
  formValues,
  onChange,
  showNameField = false,
}) {
  return (
    <section className="flex flex-1 flex-col p-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 self-start rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-hoop-400 hover:text-hoop-300"
      >
        Back
      </button>

      <div>
        <BasketballIcon />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-hoop-300">
          Your Hoop Tracker
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-white/65">{description}</p>
      </div>

      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        {showNameField && (
          <FormField
            label="Name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={onChange}
            placeholder="Your name"
          />
        )}

        <FormField
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={onChange}
          placeholder="you@example.com"
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={onChange}
          placeholder="Enter a password"
        />

        <button
          type="submit"
          className="w-full rounded-2xl bg-hoop-500 px-5 py-4 text-lg font-black text-court-950 transition hover:bg-hoop-400 focus:outline-none focus:ring-4 focus:ring-hoop-300/40"
        >
          {submitLabel}
        </button>
      </form>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
        <p className="text-sm text-white/60">{switchText}</p>
        <button
          type="button"
          onClick={onSwitch}
          className="mt-2 font-bold text-hoop-300 transition hover:text-hoop-400"
        >
          {switchLabel}
        </button>
      </div>
    </section>
  )
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-white/80">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-white placeholder:text-white/30 focus:border-hoop-400 focus:outline-none focus:ring-4 focus:ring-hoop-300/20"
      />
    </label>
  )
}

export default LoginScreen
