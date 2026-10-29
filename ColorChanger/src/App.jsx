import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const colors=["red","blue","green"]
  return (
    // <>
    //   <div className="w-full min-h-screen"
    //     style={{ backgroundColor: color }}>
    //     <div className='fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4 bg-black p-4 rounded-full'>
    //       <button onClick={()=>setColor("red")} className='bg-red-500 text-white px-4 py-2 rounded-full'>red</button>
    //       <button onClick={()=>setColor("blue")} className='bg-blue-500 text-blue px-4 py-2 rounded-full'>blue</button>
    //       <button onClick={()=>setColor("green")} className='bg-green-500 text-green px-4 py-2 rounded-full'>green</button>
          
    //     </div>
    //   </div>
    // </>
    <>
      <div className='w-full min-h-screen duration-200'
        style={{
          backgroundColor: color
        }}
      >
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2
                      flex gap-50 bg-black px-4 py-3
                      rounded-full shadow-lg color-yellow" >

          {colors.map((btnColor) => (
            <button
              key={btnColor}
              onClick={() => setColor(btnColor)}
              className="px-4 py-2 rounded-full text-white
                       capitalize"
              style={{ backgroundColor: btnColor }}
            >
              {btnColor}
            </button>
          ))}

        </div>

      </div>
    </>
  )
}

export default App
