import React from 'react'
import Navbar from '../Components/LandinPage/Navbar'
import Herosection from '../Components/LandinPage/Herosection'
import CatagorySection from '../Components/LandinPage/CatagorySection'
import Newarraival from '../Components/LandinPage/Newarraival'
import Footer from '../Components/LandinPage/Footer'
import Contact from '../Components/LandinPage/Contact'
import About from '../Components/LandinPage/AboutSection'
import BusinessActivities from '../Components/LandinPage/BusinessActivities'
import ProductCategories from '../Components/LandinPage/ProductCategories'
import ValuePropositions from '../Components/LandinPage/ValuePropositions'
import StrategicGoals from '../Components/LandinPage/StrategicGoals'
import CallToAction from '../Components/LandinPage/CallToAction'
function Landingpage() {
    return (
        <div className='bg-white h-full font-poppins'>
            <Navbar />
            <Herosection />
            <About />
            <CatagorySection />

            {/* <BusinessActivities /> */}
            <ProductCategories />
            <ValuePropositions />

            <Newarraival />

            <StrategicGoals />
            <CallToAction />

            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default Landingpage
