import React from 'react'
import CustomNavbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'

const App = () => {
  return (
    <>
    <CustomNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about-us" element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App