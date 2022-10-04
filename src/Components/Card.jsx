import React from 'react'
import '../Styles/card.js'
import PropTypes from 'prop-types'
import { Card, CardName, CardOverlay, CardImage } from '../Styles/card.js'

const oneCard = ({ logement }) => {
    return (
        <Card to={`/logement/${logement.id}`}>
            <CardImage src={logement.cover} alt={logement.title} />
            <CardOverlay>
                <CardName>{logement.title}</CardName>
            </CardOverlay>
        </Card>
    )
}

oneCard.propTypes = {
    logement: PropTypes.object.isRequired,
}

export default oneCard
