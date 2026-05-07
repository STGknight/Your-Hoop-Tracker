// AppShell gives every screen the same mobile-first phone layout and background.
function AppShell({ children }) {
  return (
    <main className="min-h-screen bg-court-950 px-4 py-6 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-court-900 shadow-glow">
        {children}
      </div>
    </main>
  )
}

export default AppShell
