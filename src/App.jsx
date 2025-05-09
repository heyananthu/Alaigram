import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import AboutPage from './pages/AboutPage'
import Contactus from './pages/Contactus'
import WhatsappChat from './pages/WhatsappChat'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
        <WhatsappChat />
      </div>
    </BrowserRouter>
  )
}

export default App
