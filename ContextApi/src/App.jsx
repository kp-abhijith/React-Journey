import UsercontextProvider from './context/Usercontext.jsx'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  return (
    <UsercontextProvider>
      <h1>React with Chai aur Code</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App