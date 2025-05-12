import React, { useEffect } from 'react'
import Navbar from '../../LandinPage/Navbar'
import HeroSection from './HeroSection'
import Footer from '../../LandinPage/Footer'
import Books from './Books'

function Main() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
    }, []);
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Books />
            <Footer />

        </div>
    )
}

export default Main

