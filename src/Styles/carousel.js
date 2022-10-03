import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: center;
`

const CarouselWrapper = styled.div`
    position: relative;
    width: 80%;
    border-radius: 25px;
    overflow: hidden;
    margin-top: 20px;
    height: 255px;

    @media (min-width: 1024px) {
        height: 415px;
    }
`

const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const CarouselContainer = styled.div`
    inset: 0px;
    display: flex;
    position: absolute;
    align-items: center;
    padding: 5px;
    justify-content: space-between;

    @media (min-width: 1024px) {
        padding: 25px 23.36px;
    }
`

const CarouselArrow = styled.img`
    cursor: pointer;
    width: 24px;
    height: 24px;

    @media (min-width: 1024px) {
        width: 46.68px;
        height: 79.2px;
    }
`

const CarouselText = styled.span`
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    align-self: flex-end;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

export {
    Flex,
    CarouselWrapper,
    CarouselContainer,
    CarouselImage,
    CarouselArrow,
    CarouselText,
}
