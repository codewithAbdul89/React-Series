import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500 '>Hello my name is abdul rehman.</h1>
      <Card username='Abdul rehman' btnvalue="Abdul profile" />
      <Card username='Abid' btnvalue="Abid profile" />
    </>
  )
}

export default App
