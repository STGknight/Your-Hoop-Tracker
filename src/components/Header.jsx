// Header shows the app name and simple navigation for the mock MVP screens.
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'details', label: 'Run' },
  { id: 'admin', label: 'Admin' },
]

function Header({ activeScreen, onNavigate }) {
  return (
    <header className="border-b border-white/10 bg-court-800/70 px-5 py-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-hoop-300">
            Your Hoop Tracker
          </p>
          <h1 className="text-2xl font-black tracking-tight">Hoop Tonight</h1>
        </div>
        <div className="rounded-full bg-hoop-500 px-3 py-1 text-sm font-bold text-court-950">
          MVP
        </div>
      </div>

      <nav className="mt-4 grid grid-cols-3 gap-2 rounded-full bg-black/20 p-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
              activeScreen === item.id
                ? 'bg-hoop-500 text-court-950'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
