// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard.jsx'
import Contact from './pages/Contact.jsx'
import ContactUs from './components/Contactus.jsx'
import Address from './components/Address.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='contact' element={<Contact/>}>
        <Route path='contact-us' element={<ContactUs/>} />
        <Route path='address' element={<Address/>} />
      </Route>
      <Route path='dashboard' element={<Dashboard/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
