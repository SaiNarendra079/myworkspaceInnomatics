import React from 'react'
import './App.css'
import { UserProvider } from './UserProvider'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'

const App = () => {
  return (
    <div>
      <UserProvider>
      <UserProfile/>
      <UpdateUser/>
    </UserProvider>
    </div>
  )
}

export default App