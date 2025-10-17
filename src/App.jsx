import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ModernNavbar from './Components/Navbar'
import Footer from "./Components/Footer"
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Video from './pages/Video'
import Certificates from './pages/Certificates'
import ServiceDetailPage from './pages/ServiceDetail'
import FloatingButtons from "./Components/FloatingButtons"

const App = () => {
  return (
    <BrowserRouter>
    <ModernNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
        <Route path='/services/:route' element={<ServiceDetailPage/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/video' element={<Video/>}/>
       <Route path='/certificates' element={<Certificates/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App