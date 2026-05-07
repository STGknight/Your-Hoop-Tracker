import { useState } from 'react'
import AppShell from './components/AppShell.jsx'
import Header from './components/Header.jsx'
import { initialRun, mockUser } from './data/mockData.js'
import AdminScreen from './screens/AdminScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import SessionDetailsScreen from './screens/SessionDetailsScreen.jsx'
import SignUpScreen from './screens/SignUpScreen.jsx'
import WelcomeScreen from './screens/WelcomeScreen.jsx'

// App owns the MVP state: mock auth, selected screen, joined players, and payments.
function App() {
  const [activeScreen, setActiveScreen] = useState('welcome')
  const [currentUser, setCurrentUser] = useState(null)
  const [run, setRun] = useState(initialRun)

  const hasJoined = currentUser
    ? run.players.some((player) => player.id === currentUser.id)
    : false

  function finishMockAuth(userDetails) {
    setCurrentUser({
      ...mockUser,
      ...userDetails,
      paymentStatus: 'Unpaid',
    })
    setActiveScreen('home')
  }

  function handleJoinRun() {
    if (!currentUser) {
      setActiveScreen('welcome')
      return
    }

    if (hasJoined || run.players.length >= run.maxSpots) {
      setActiveScreen('details')
      return
    }

    setRun((currentRun) => ({
      ...currentRun,
      players: [...currentRun.players, currentUser],
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
    if (activeScreen === 'welcome') {
      return (
        <WelcomeScreen
          onSignUp={() => setActiveScreen('signup')}
          onLogIn={() => setActiveScreen('login')}
        />
      )
    }

    if (activeScreen === 'signup') {
      return (
        <SignUpScreen
          onBack={() => setActiveScreen('welcome')}
          onLogIn={() => setActiveScreen('login')}
          onCreateAccount={finishMockAuth}
        />
      )
    }

    if (activeScreen === 'login') {
      return (
        <LoginScreen
          onBack={() => setActiveScreen('welcome')}
          onSignUp={() => setActiveScreen('signup')}
          onLogIn={finishMockAuth}
        />
      )
    }

    if (activeScreen === 'details') {
      return (
        <SessionDetailsScreen
          run={run}
          currentUser={currentUser}
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

  const isAuthScreen = ['welcome', 'signup', 'login'].includes(activeScreen)

  return (
    <AppShell>
      {!isAuthScreen && <Header activeScreen={activeScreen} onNavigate={setActiveScreen} />}
      {renderScreen()}
    </AppShell>
  )
}

export default App
