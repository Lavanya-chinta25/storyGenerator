import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Mythos from "./pages/mythos"
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mythos" element={<Mythos/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
