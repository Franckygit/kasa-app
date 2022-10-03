import React from 'react'
import PropTypes from 'prop-types'
import '../../Styles/HouseInfos.css'

const HouseInfos = ({ title, location }) => {
    return (
        <div className="house-infos-box">
            <div className="title-infos">{title}</div>
            <div className="location-infos">{location}</div>
        </div>
    )
}

HouseInfos.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default HouseInfos
