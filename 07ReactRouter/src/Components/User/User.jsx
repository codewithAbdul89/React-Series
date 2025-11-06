import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {USERID}=useParams()
  return (
    <div  className='bg-gray-600 text-white p-4 text-center '>User  {USERID}</div>
  )
}

export default User