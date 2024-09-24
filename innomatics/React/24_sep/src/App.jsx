import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'
import Reviews from './pages/Reviews'
import Specification from './pages/Specification'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductDetails/>}>
         <Route path='reviews' element={<Reviews/>} />
         <Route path='specifications' element={<Specification/>}/>
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App