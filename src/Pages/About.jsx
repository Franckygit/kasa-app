import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner/Banner_about'
import AboutInfos from '../Components/About'

const About = () => {
    return (
        <>
            <div className="content">
                <Header />
                <Banner />
                <AboutInfos />
            </div>
            <Footer />
        </>
    )
}

export default About
