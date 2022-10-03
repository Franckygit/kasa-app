import { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Flex,
    CarouselWrapper,
    CarouselContainer,
    CarouselImage,
    CarouselArrow,
    CarouselText,
} from '../Styles/carousel'

import arrowLeft from '../Assets/arrow-left.svg'
import arrowRight from '../Assets/arrow-right.svg'

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const plusSlides = (n) => {
        let index

        if (n === 1 || n === -1) {
            index = currentIndex + n
        }

        // check up loop
        if (index >= images.length) {
            index = 0
        }

        if (index < 0) {
            index = images.length - 1
        }

        setCurrentIndex(index)
    }

    return (
        <Flex>
            <CarouselWrapper>
                <CarouselImage
                    src={images[currentIndex]}
                    alt={'silde-' + currentIndex}
                />

                <CarouselContainer>
                    <CarouselArrow
                        src={arrowLeft}
                        alt=""
                        onClick={() => plusSlides(-1)}
                    />

                    <CarouselText>
                        {currentIndex + 1}/{images.length}
                    </CarouselText>

                    <CarouselArrow
                        src={arrowRight}
                        alt=""
                        onClick={() => plusSlides(1)}
                    />
                </CarouselContainer>
            </CarouselWrapper>
        </Flex>
    )
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
}

export default Carousel
