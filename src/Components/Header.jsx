import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/header.js'
import logo from '../Assets/logo.svg'
import {
    HeaderContainer,
    Container,
    Navbar,
    Navlink,
    Image,
} from '../Styles/header.js'

const Header = () => {
    return (
        <HeaderContainer>
            <Navbar>
                <Navlink to="/">
                    <Image src={logo} alt="logo" />
                </Navlink>

                <Container>
                    <Navlink as={NavLink} to="/">
                        Accueil
                    </Navlink>
                    <Navlink as={NavLink} to="/about">
                        A propos
                    </Navlink>
                </Container>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
