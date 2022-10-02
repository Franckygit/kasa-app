import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Banner from '../Components/Banner/Banner_home'
import '../Styles/home.css'

const Home = () => {
    return (
        <>
            <div className="content">
                <Header />
                <Banner />
            </div>
            <Footer />
        </>
    )
}

export default Home
