import { useState } from 'react'
import AppShell from './components/AppShell.jsx'
import Header from './components/Header.jsx'
import { initialMockUser, initialRun } from './data/mockData.js'
import AdminScreen from './screens/AdminScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import SessionDetailsScreen from './screens/SessionDetailsScreen.jsx'

// App owns the MVP state: mock auth, selected screen, joined players, and payments.
function App() {
  const [activeScreen, setActiveScreen] = useState('auth')
  const [currentUser, setCurrentUser] = useState(null)
  const [run, setRun] = useState(initialRun)

  const playerForRun = currentUser || initialMockUser
  const hasJoined = run.players.some((player) => player.id === playerForRun.id)

  function handleMockAuth(formValues) {
    const mockCurrentUser = {
      ...initialMockUser,
      name: formValues.name || initialMockUser.name,
      email: formValues.email || initialMockUser.email,
    }

    setCurrentUser(mockCurrentUser)
    setActiveScreen('home')
  }

  function handleJoinRun() {
    if (hasJoined || run.players.length >= run.maxSpots) {
      setActiveScreen('details')
      return
    }

    setRun((currentRun) => ({
      ...currentRun,
      players: [...currentRun.players, playerForRun],
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
    if (activeScreen === 'auth') {
      return <LoginScreen onAuthenticate={handleMockAuth} />
    }

    if (activeScreen === 'details') {
      return (
        <SessionDetailsScreen
          run={run}
          currentUser={playerForRun}
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
      {activeScreen !== 'auth' && (
        <Header activeScreen={activeScreen} onNavigate={setActiveScreen} />
      )}
      {renderScreen()}
    </AppShell>
  )
}

export default App
