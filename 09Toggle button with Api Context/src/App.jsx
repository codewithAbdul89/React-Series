import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import useTheme from './Contexts/Theme';



function App() {



  return (


    <ThemeProvider >
      <div className="flex flex-wrap min-h-screen dark:bg-black items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />

          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />

          </div>
        </div>
      </div>


    </ThemeProvider>

  )
}

export default App


