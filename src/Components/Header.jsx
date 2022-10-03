import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/header.css'
import logo from '../Assets/logo.svg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="navbar">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>

                <div className="container">
                    <NavLink className="link" as={NavLink} to="/">
                        Accueil
                    </NavLink>
                    <NavLink className="link" as={NavLink} to="/about">
                        A propos
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
