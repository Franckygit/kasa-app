import data from '../Data/logements.json'
import { useParams } from 'react-router-dom'

import Error from '../Components/Error'
import Carousel from '../Components/Carousel'
import Collapse from '../Components/Collapse'
import Tags from '../Components/UI/HouseTags'
import Rating from '../Components/UI/Rating'
import HouseInfos from '../Components/UI/HouseInfos'
import HostProfile from '../Components/UI/ProfileInfos'

import {
    Flex,
    Container,
    Columns,
    CollapseWrapper,
    InfosWrapper,
    ProfilWrapper,
} from '../Styles/house'

const House = () => {
    const params = useParams()
    const logement = data.find((lgmt) => lgmt.id === params.id)

    if (!logement) return <Error />

    return (
        <>
            <Carousel images={logement.pictures} />
            <Flex>
                <Container>
                    <Columns>
                        <InfosWrapper>
                            <HouseInfos
                                title={logement.title}
                                location={logement.location}
                            />
                            <Tags tags={logement.tags} />
                        </InfosWrapper>

                        <ProfilWrapper>
                            <HostProfile host={logement.host} />
                            <Rating rating={logement.rating} />
                        </ProfilWrapper>
                    </Columns>

                    <CollapseWrapper>
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
                    </CollapseWrapper>
                </Container>
            </Flex>
        </>
    )
}

export default House
