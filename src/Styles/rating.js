import styled from 'styled-components'

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Star = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 5px;

    @media (min-width: 1024px) {
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }
`

export { RatingContainer, Star }
