import React from 'react'
import PropTypes from 'prop-types'
import { RatingContainer, Star } from '../../Styles/rating'

import '../../Styles/rating.js'

import starIcon from '../../Assets/star.svg'
import starActiveIcon from '../../Assets/star-active.svg'

const Rating = ({ rating }) => {
    const array = Array(5).fill(0)
    const stars = array.fill(1, 0, rating)
    return (
        <RatingContainer>
            {stars.map((star, index) => (
                <Star
                    className="star"
                    key={index}
                    src={star ? starActiveIcon : starIcon}
                    alt="star"
                />
            ))}
        </RatingContainer>
    )
}

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default Rating
