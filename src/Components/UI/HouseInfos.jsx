import React from 'react'
import PropTypes from 'prop-types'
import '../../Styles/HouseInfos.js'
import {
    LocationInfos,
    TitleInfos,
    HouseInfosBox,
} from '../../Styles/HouseInfos.js'

const HouseInfos = ({ title, location }) => {
    return (
        <HouseInfosBox>
            <TitleInfos>{title}</TitleInfos>
            <LocationInfos>{location}</LocationInfos>
        </HouseInfosBox>
    )
}

HouseInfos.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default HouseInfos
