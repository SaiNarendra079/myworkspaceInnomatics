import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App