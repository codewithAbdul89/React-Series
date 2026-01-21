import React from 'react'
import AddUserForm from './Components/AddUserForm'
import UserList from '../src/Components/UserList'

function App() {
  return (
    <div className="p-10 flex gap-10">
        <AddUserForm/>
        <UserList/>
    </div>
  )
}

export default App
