import React from 'react'
import data from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import Error from '../Components/Error'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const House = () => {
    const params = useParams()
    const logement = data.find((lgmt) => lgmt.id === params.id)

    if (!logement) return <Error />
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

export default House
