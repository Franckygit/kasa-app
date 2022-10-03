import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/error.css'

const Error = () => {
    return (
        <div className="error">
            <div className="number-error">404</div>
            <div className="text-error">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <NavLink className="link-error" as={NavLink} to="/">
                Retournez sur la page d'accueil
            </NavLink>
        </div>
    )
}

export default Error
