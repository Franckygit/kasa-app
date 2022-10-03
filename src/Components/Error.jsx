import React from 'react'
import '../Styles/error.js'
import {
    ErrorContainer,
    ErrorTitle,
    ErrorContent,
    HomeLink,
} from '../Styles/error'

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorContent>
                Oups! La page que vous demandez n'existe pas.
            </ErrorContent>

            <HomeLink to="/">Retourner sur la page d’accueil</HomeLink>
        </ErrorContainer>
    )
}

export default Error
