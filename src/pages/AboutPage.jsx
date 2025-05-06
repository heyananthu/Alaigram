import React from 'react'
import Navbar from '../Components/LandinPage/Navbar'
import Section1 from '../Components/Aboutus/Section1'
import Section2 from '../Components/Aboutus/Section2'
import Footer from '../Components/LandinPage/Footer'
import Section3 from '../Components/Aboutus/Section3'

function AboutPage() {
    return (
        <div className='font-poppins'>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />

        </div>
    )
}

export default AboutPage
