import { useState } from 'react'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'








function App() {
  let [count, countValue] = useState(5)
  function AddValue() {
    if (count === 100) {
      countValue(10)
    }
    else {
      
    
      countValue(counter=> counter+ 1)
      countValue(counter=> counter+ 1)
      countValue(counter=> counter+ 1)
      countValue(counter=> counter+ 1)
      countValue(counter=> counter+ 1)

    }



  }

  const RemoveValue = () => {
    if (count === 0) {
      countValue(0)
    }
    else {
      countValue(count - 1)

    }
  }


  return (
    <>
      <h1>Abdul and chai!</h1>
      <h1>Counter Value : {count}</h1>

      <button onClick={AddValue}>Add Value</button>
      <br />
      <button onClick={RemoveValue}>Remove Value</button>

    </>
  )
}

export default App
