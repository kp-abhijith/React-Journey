import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  let [messange,setmessage]= useState("")
  const addvalue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    if (counter < 20) {
      setcounter(counter + 1);
    }
    else {
      setmessage(">20 is not allow")
    }
  }
  const decrease = () => {
    console.log("clicked", counter);
    if (counter > 0) {
      setcounter(counter - 1);
      setmessage(" ")
    }
    else {
      setmessage("neg not allowed")
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={decrease}>decrease value {counter}</button>
      <p>{ messange}</p>
    </>
  )
}

export default App
