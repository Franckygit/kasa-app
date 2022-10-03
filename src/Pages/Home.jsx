import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Banner from '../Components/Banner/Banner_home'
import '../Styles/home.css'
import Card from '../Components/Card'
import data from '../Data/logements.json'

const Home = () => {
    return (
        <>
            <div className="content">
                <Header />
                <Banner />
                <div className="section">
                    <div className="houses">
                        {data.map((logement) => {
                            return (
                                <Card logement={logement} key={logement.id} />
                            )
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
