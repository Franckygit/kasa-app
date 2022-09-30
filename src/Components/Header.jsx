import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">Kasa</div>
                <nav className="navbar">
                    <ul>
                        <NavLink>Accueil</NavLink>
                        <NavLink>A propos</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
