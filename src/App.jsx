import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import AboutPage from './pages/AboutPage'
import Contactus from './pages/Contactus'
import WhatsappChat from './pages/WhatsappChat'
import Main from './Components/Products/Books/Main'
import Blog from './pages/Blog'
import FirstBlog from './Components/Blogs/firstBlog'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/books' element={<Main />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/wave-of-change' element={<FirstBlog />} />
        </Routes>
        <WhatsappChat />
      </div>
    </BrowserRouter>
  )
}

export default App
