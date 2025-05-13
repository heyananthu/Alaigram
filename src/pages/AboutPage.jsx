import React, { useEffect } from 'react'
import Navbar from '../Components/LandinPage/Navbar'
import Section1 from '../Components/Aboutus/Section1'
import Section2 from '../Components/Aboutus/Section2'
import Footer from '../Components/LandinPage/Footer'
import Section3 from '../Components/Aboutus/Section3'
import AboutSection from '../Components/LandinPage/AboutSection'
import BusinessActivities from '../Components/LandinPage/BusinessActivities'
function AboutPage() {
        useEffect(() => {
            window.scrollTo(0, 0); // Scrolls to top when the component mounts
        }, []);
        return (
            <div className='font-poppins'>
                <Navbar />
                <Section1 />
                {/* <AboutSection /> */}
                <Section2 />
                <BusinessActivities />

                <Section3 />
                <Footer />

            </div>
        )
    }

    export default AboutPage
