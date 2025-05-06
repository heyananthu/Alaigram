import React from 'react'
import Navbar from '../Components/LandinPage/Navbar'
import Mainsection from '../Components/Contactus/Mainsection'
import Footer from '../Components/LandinPage/Footer'
import Section1 from '../Components/Contactus/Section1'
function Contactus() {
    return (
        <div className='font-poppins'>
            <Navbar />
            <Section1/>
            <Mainsection />
            <Footer />
        </div>
    )
}

export default Contactus
