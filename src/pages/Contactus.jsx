import React, { useEffect } from 'react'
import Navbar from '../Components/LandinPage/Navbar'
import Mainsection from '../Components/Contactus/Mainsection'
import Footer from '../Components/LandinPage/Footer'
import Section1 from '../Components/Contactus/Section1'
function Contactus() {
        useEffect(() => {
            window.scrollTo(0, 0); // Scrolls to top when the component mounts
        }, []);
        return (
            <div className='font-poppins'>
                <Navbar />
                <Section1 />
                <Mainsection />
                <Footer />
            </div>
        )
    }

    export default Contactus
