import {Routes, Route} from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/contact" element={<Contact/>}>Contact</Route>
      <Route path="/about" element={<About/>}>About</Route>
    </Routes>
    </>
  )
}

export default App
