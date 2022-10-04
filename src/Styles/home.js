import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

const Houses = styled.div`
    display: grid;
    justify-items: center;
    min-width: 80%;
    grid-gap: 20px;
    grid-template-columns: 1fr;

    @media (max-width: 640px) {
        margin: 20px;
    }

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 20px;
    }

    @media (min-width: 1024px) {
        margin: 20px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1280px) {
        padding-top: 20px;
        grid-gap: 10px;
        overflow: hidden;
        border-radius: 25px;
        background-color: #f7f7f7;
    }
`

export { Section, Houses }
