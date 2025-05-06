import React from 'react'
import Navbar from '../Components/LandinPage/Navbar'
import Herosection from '../Components/LandinPage/Herosection'
import CatagorySection from '../Components/LandinPage/CatagorySection'
import Newarraival from '../Components/LandinPage/Newarraival'
import Footer from '../Components/LandinPage/Footer'
import Contact from '../Components/LandinPage/Contact'
function Landingpage() {
    return (
        <div className='bg-white h-full font-poppins'>
            <Navbar />
            <Herosection />
            <CatagorySection />
            <Newarraival />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landingpage
