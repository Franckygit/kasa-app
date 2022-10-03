import React from 'react'
import '../Styles/card.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Card = ({ logement }) => {
    return (
        <NavLink className="card" to={`/logement/${logement.id}`}>
            <img
                className="card-image"
                src={logement.cover}
                alt={logement.title}
            />
            <div className="card-overlay">
                <div className="card-name">{logement.title}</div>
            </div>
        </NavLink>
    )
}

Card.propTypes = {
    logement: PropTypes.object.isRequired,
}

export default Card
