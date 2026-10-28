import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let user ="kp abhi"
  let xyz="hari"
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind Test</h1>
      <Card  name= {user} btntxt="view profile"/>
      <Card name={xyz} btntxt="visit profile" />
    </>
  )
}

export default App
