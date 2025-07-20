import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [color, setColor] = useState("red")
  return (
    <div style={{backgroundColor:color}} className='w-full h-screen'>
      <div className='w-full flex justify-center'>
        <div className='w-[80%] fixed bottom-3 flex justify-center bg-white rounded-xl p-2  '>
          <div className=' w-auto flex justify-around gap-6 flex-wrap    items-center'>
            <button onClick={()=>setColor("red")} className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "red" }}>Red</button>
            <button  onClick={()=>setColor("green")} className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=>setColor("blue")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={()=>setColor("olive")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "olive" }}>Olive</button>
            <button onClick={()=>setColor("aqua")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "aqua" }}>Aqua</button>
            <button onClick={()=>setColor("pink")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "Pink" }}>Pink</button>
            <button onClick={()=>setColor("purple")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={()=>setColor("brown")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "brown" }}>Brown</button>
            <button onClick={()=>setColor("black")}  className='py-2 px-4 text-white rounded-xl' style={{ backgroundColor: "black" }}>Black</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
