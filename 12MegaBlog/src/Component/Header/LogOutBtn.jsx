import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appWrite/Auth'
import { logOut } from '../../Store/authSlice'
function LogOutBtn() {
  const dispatch = useDispatch()
  const logOutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logOut)
    })
  }
  return (
    <button className='px-6 py-2 hover:bg-blue-100 duration-200 bg-blue-500 rounded-lg text-white hover:text-blue-500 hover:font-semibold'
      onClick={logOutHandler}>Log Out</button>
  )
}

export default LogOutBtn