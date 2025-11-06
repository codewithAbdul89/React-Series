
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'


function App() {

const c1=document.getElementById("c1")
const c2=document.getElementById("c2")
const lengthinput=document.getElementById("lengthinput")
  const CopyBtn = document.getElementById("CopyBtn")
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacterr] = useState(false)
  const [password, setPassword] = useState("")
  const PassworRef = useRef(null)
  const mainInput = document.getElementById('mainInput')
  // button function
  const copyPasswordfn = useCallback(() => {
    PassworRef.current?.select()
    window.navigator.clipboard.writeText(password)
    CopyBtn.innerHTML = "Copied"
    CopyBtn.disabled = true
    CopyBtn.classList.add("opacity-50","bg-red-500")
    CopyBtn.classList.remove("hover:opacity-35")
    mainInput.classList.remove("sm:w-[55%]")
    mainInput.classList.add("sm:w-[50%]")
    lengthinput.disabled=true
    c1.disabled=true
    c2.disabled=true
    
  }, [password])
  // new password
  function NewPassword() {
    location.reload()
  }

  const passwordGenrator = useCallback(() => {
    let Pass = ""

    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz"

    if (number) str += "1234567890"
    if (character) str += "!@#$%^&*()_{}[]()!@#$%^&*()_{}[]()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      Pass += str.charAt(char)
    }

    setPassword(Pass)

  }, [length, number, character])

  useEffect(() => {
    passwordGenrator()

  }, [length, number, character, passwordGenrator])

 

  return (
    <>
      <style>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>

      <div className='w-full flex h-screen bg-blue-400 justify-center items-center'>
        <div className='bg-gray-800 w-[40%] sm:w-[90%] mx-auto mt-10 shadow-lg rounded-xl md:p-5 sm:px-1 sm:py-5 pb-4 '>
          <div className='text-red-500 underline decoration-blue-500 font-bold px-2 py-5 sm:text-3xl text-4xl text-center italic'> Password Generator</div>

          <div className="w-full flex gap-2 justify-center items-center   py-3 ">
            <input
              id='mainInput'
              type="text"
              value={password}
              readOnly
              ref={PassworRef}
              className="sm:w-[55%] md:flex-1 rounded px-2  py-2 sm:py-1 outline-none border border-gray-300"
            />
            <div className='flex  justify-center items-center gap-3'>
              <button id='CopyBtn'  onClick={copyPasswordfn} className="bg-blue-500 hover:opacity-35 text-white sm:py-1 rounded px-4 py-2">
                Copy
              </button>
              <button id='CopyBtn' onClick={NewPassword} className=" right-2 bg-green-500 hover:opacity-35 text-white sm:py-1 rounded px-4 py-2">
                New
              </button>
            </div>

          </div>


          <div className='flex items-center md:justify-between justify-between md:px-5  px-2 pb-5 py-3 '>
            <div className=' '>
              <label className='text-white' >Length : <span className='text-red-300'><input
                placeholder='08'
                onFocus={()=>{
                  CopyBtn.disabled = true
                }}
                id='lengthinput'
                onChange={(e) => {
                  setLength(e.target.value)
                }}

                value={length}
                className='w-10 rounded  placeholder:text-blue-500 focus:placeholder:text-white text-center text-blue-500 font-bold'
                type="number" /></span> </label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox"
              id='c1'
                className='cursor-pointer w-5 h-5 '
                onChange={() => {
                  setNumber((prev) => !prev)
                }}
              />
              <label className='text-white' >Number</label>
            </div>
            <div className='flex items-center gap-2'>
              
              <input type="checkbox"
              id='c2'
                className='cursor-pointer w-5 h-5 '
                onChange={() => {
                  setCharacterr((prev) => !prev)
                }}
              />
              <label className='text-white' >Character</label>
            </div>
          </div>

        </div>
      </div>




    </>
  )
}

export default App
