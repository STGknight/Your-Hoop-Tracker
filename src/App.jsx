import { useState } from 'react'
import AppShell from './components/AppShell.jsx'
import Header from './components/Header.jsx'
import { initialRun, mockUser } from './data/mockData.js'
import AdminScreen from './screens/AdminScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import SessionDetailsScreen from './screens/SessionDetailsScreen.jsx'

// App owns the MVP state: mock login, selected screen, joined players, and payments.
function App() {
  const [activeScreen, setActiveScreen] = useState('login')
  const [run, setRun] = useState(initialRun)

  const hasJoined = run.players.some((player) => player.id === mockUser.id)

  function handleJoinRun() {
    if (hasJoined || run.players.length >= run.maxSpots) {
      setActiveScreen('details')
      return
    }

    setRun((currentRun) => ({
      ...currentRun,
      players: [...currentRun.players, mockUser],
    }))
    setActiveScreen('details')
  }

  function handleTogglePayment(playerId) {
    setRun((currentRun) => ({
      ...currentRun,
      players: currentRun.players.map((player) =>
        player.id === playerId
          ? {
              ...player,
              paymentStatus: player.paymentStatus === 'Paid' ? 'Unpaid' : 'Paid',
            }
          : player,
      ),
    }))
  }

  function renderScreen() {
    if (activeScreen === 'login') {
      return <LoginScreen onContinue={() => setActiveScreen('home')} />
    }

    if (activeScreen === 'details') {
      return (
        <SessionDetailsScreen
          run={run}
          currentUser={mockUser}
          hasJoined={hasJoined}
          onJoinRun={handleJoinRun}
        />
      )
    }

    if (activeScreen === 'admin') {
      return <AdminScreen run={run} onTogglePayment={handleTogglePayment} />
    }

    return <HomeScreen run={run} onJoinRun={handleJoinRun} />
  }

  return (
    <AppShell>
      {activeScreen !== 'login' && (
        <Header activeScreen={activeScreen} onNavigate={setActiveScreen} />
      )}
      {renderScreen()}
    </AppShell>
  )
}

export default App
