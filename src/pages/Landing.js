import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function Landing() {
    return (
        <div>
            <div className="h-screen">
                <Navbar />
                <Hero />
            </div>
            <Services />
            <Products />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Landing
