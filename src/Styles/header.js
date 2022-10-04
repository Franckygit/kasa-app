import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Navbar = styled.div`
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    width: 90%;

    @media (min-width: 1280px) {
        padding-top: 40px;
        width: 80%;
    }
`

const Image = styled.img`
    width: 145px;
    height: 47px;

    @media (min-width: 1280px) {
        height: 68px;
    }
`

const Container = styled.div`
    flex-shrink: 0;
`

const Navlink = styled(NavLink)`
    font-size: 18px;
    line-height: 34px;
    margin-right: 57px;
    font-weight: 500;
    text-decoration: none;
    color: #ff6060;

    &:hover {
        text-decoration: underline;
    }

    &:last-child {
        margin-right: 0px;
    }

    @media (min-width: 1280px) {
        text-transform: none;
        font-size: 24px;
        line-height: 34px;
        margin-right: 57px;
    }
`

export { HeaderContainer, Container, Image, Navlink, Navbar }
