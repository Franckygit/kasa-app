import React from 'react'
import data from '../Data/logements.json'
import { useParams } from 'react-router-dom'

import '../Styles/house.css'

import Error from '../Components/Error'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import Collapse from '../Components/Collapse'
import HouseInfos from '../Components/UI/HouseInfos'
import HouseTags from '../Components/UI/HouseTags'
import ProfileInfos from '../Components/UI/ProfileInfos'

const House = () => {
    const params = useParams()
    const logement = data.find((lgmt) => lgmt.id === params.id)

    if (!logement) return <Error />
    return (
        <>
            <Header />
            <Carousel images={logement.pictures} />
            <div className="flex">
                <div className="house-container">
                    <div className="boxes">
                        <div className="house-infos-box">
                            <HouseInfos
                                title={logement.title}
                                location={logement.location}
                            />
                            <HouseTags tags={logement.tags} />
                        </div>

                        <div className="profile-infos-box">
                            <ProfileInfos host={logement.host} />
                            <div className="profile-rating"></div>
                        </div>
                    </div>

                    <div className="collapse-container">
                        <Collapse title="Description">
                            <p>{logement.description}</p>
                        </Collapse>

                        <Collapse title="Équipements">
                            <ul>
                                {logement.equipments.map((equipment) => {
                                    return <li key={equipment}>{equipment}</li>
                                })}
                            </ul>
                        </Collapse>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default House
