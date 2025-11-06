import React, { useEffect, useState } from 'react'
import authService  from "./appWrite/Auth"
import { useDispatch, useSelector } from "react-redux"
import { logOut, login } from "./Store/authSlice"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import { Outlet } from "react-router-dom"


function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  // For state Checking

  useEffect(() => {

     authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logOut())
        }

      })
      .catch((err) => {
        console.log("Error occur in app useEffect for stateChecking.", err);

      })
      .finally(() => setLoading(false))

  }, [])


  return loading ? (<div className='fixed w-full h-screen top-0 left-0 bg-black flex justify-center items-center bg-opacity-50 z-[1000]'>
    <div className='h-16 w-16 border-t-blue-500 border-4 rounded-full animate-spin border-white'></div>
  </div>) : (

    <div className='w-full min-h-screen flex flex-wrap content-between  bg-gray-400'>
      <div className='block w-full'>
        <Header />
        <main >
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>





  )
}

export default App