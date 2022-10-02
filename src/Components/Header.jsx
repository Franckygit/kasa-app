import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/header.css'
import logo from '../Assets/logo.svg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo-header">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <nav className="navbar">
                    <ul>
                        <NavLink className="link" as={NavLink} to="/">
                            Accueil
                        </NavLink>
                        <NavLink className="link" as={NavLink} to="/about">
                            A propos
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
