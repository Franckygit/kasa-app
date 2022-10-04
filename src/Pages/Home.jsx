import React from 'react'
import Banner from '../Components/Banner/Banner_home'
import '../Styles/home.js'
import Card from '../Components/Card'
import data from '../Data/logements.json'
import { Section, Houses } from '../Styles/home.js'

const Home = () => {
    return (
        <>
            <Banner />
            <Section>
                <Houses>
                    {data.map((logement) => {
                        return <Card logement={logement} key={logement.id} />
                    })}
                </Houses>
            </Section>
        </>
    )
}

export default Home
