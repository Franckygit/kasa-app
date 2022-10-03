import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import '../Styles/carousel.css'

import arrowLeft from '../Assets/arrow-left.svg'
import arrowRight from '../Assets/arrow-right.svg'

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const plusSlides = (n) => {
        let index

        if (n === 1 || n === -1) {
            index = currentIndex + n
        }

        if (index >= images.length) {
            index = 0
        }

        if (index < 0) {
            index = images.length - 1
        }

        setCurrentIndex(index)
    }

    return (
        <div className="carousel-flex">
            <div className="carousel-container">
                <img
                    src={images[currentIndex]}
                    alt={'slide-' + currentIndex}
                    className="carousel-image"
                />
                <div className="carousel">
                    <img
                        className="carousel-arrow"
                        src={arrowLeft}
                        alt=""
                        onClick={() => plusSlides(-1)}
                    />
                    <span className="carousel-text">
                        {currentIndex + 1}/{images.length}
                    </span>
                    <img
                        className="carousel-arrow"
                        src={arrowRight}
                        alt=""
                        onClick={() => plusSlides(1)}
                    />
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
}

export default Carousel
