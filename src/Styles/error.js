import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 195px 0;
    color: #ff6060;

    @media (min-width: 1024px) {
        padding: 10px 0; // custom
        /* padding: 169px 0; */ //on figma
    }
`

const ErrorTitle = styled.h1`
    font-size: 96px;
    font-weight: 700;
    line-height: 137px;
    margin-bottom: 11px;

    @media (min-width: 1024px) {
        font-size: 288px;
        line-height: 411px;
        margin-bottom: 66px;
    }
`

const ErrorContent = styled.h3`
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 133px;

    @media (min-width: 1024px) {
        font-size: 36px;
        line-height: 51px;
        margin-bottom: 182px;
    }
`

const HomeLink = styled(Link)`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #ff6060;

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 159px;
    }
`

export { ErrorContainer, ErrorTitle, ErrorContent, HomeLink }
