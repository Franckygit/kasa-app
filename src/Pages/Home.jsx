import React from 'react'
import Banner from '../Components/Banner/Banner_home'
import '../Styles/home.css'
import Card from '../Components/Card'
import data from '../Data/logements.json'

const Home = () => {
    return (
        <>
            <div className="content">
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
        </>
    )
}

export default Home
