import { useState ,useCallback,useEffect,useRef} from "react"
// import './App.css'
function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(true);
  const [password, setpassword] = useState("");
  // useRef hook
  const passwordref = useRef(null)
  


  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "@#&_!"
    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random() * str.length )
      pass+=str.charAt(char)
    }
    setpassword(pass)
    
  }, [length, number, char])
  const copypass = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(()=>{passwordgenerator()},[passwordgenerator])
  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-500 bg-gray-700">
      <h1 className=" mb-6 text-center text-3xl font-bold">
        Password Generator</h1>
      <div className="text-4xl text-red-500 flex-shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          className="min-w-0 flex-1 rounded-lg border border-slate-600 bg-slate-800 px-3 py-3 font-mono text-emerald-400 outline-none"
        placeholder="Password"
          readOnly
          ref={passwordref}
        />
        <button onClick={copypass} className="rounded-lg bg-blue-600 px-4 font-semibold hover:bg-blue-500 disabled:opacity-50">copy</button>
      </div>
      <div className="flex text-5m gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length}
            className="cursor-pointer" onChange={(e)=>{setlength(e.target.value)}}/>
          <label>length :{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={number}
            id="numberinput" onChange={()=>{setnumber((prev)=>!prev)} } />
        <label htmlFor="numberinput">Number</label>
        </div>
      
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={char}
            id="charinput" onChange={()=>{setchar((prev)=>!prev)} } />
        <label htmlFor="charinput">Char</label>
        </div>
      </div>
    </div>
    
  )
}

export default App