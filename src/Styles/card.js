import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Card = styled(NavLink)`
    display: flex;
    border-radius: 10px;
    background-color: #ff6060;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        width: 100%;
        height: 340px;
    }

    @media (min-width: 1280px) {
        width: 340px;
        height: 340px;
    }
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`

const CardName = styled.div`
    color: #fff;
    padding: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: flex-end;
`

const CardOverlay = styled.div`
    inset: 0px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
    );
`

export { Card, CardImage, CardName, CardOverlay }
