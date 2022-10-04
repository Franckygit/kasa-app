import styled from 'styled-components'

const TagsContainer = styled.div`
    gap: 10px;
    flex-wrap: wrap;
    display: inline-flex;
    align-items: center;
`

const Tag = styled.span`
    height: 18px;
    min-width: 84px;
    padding: 3px 22px;
    box-sizing: border-box;

    color: #fff;
    border-radius: 5px;
    background-color: #ff6060;

    font-size: 10px;
    font-weight: 500;

    @media (min-width: 1024px) {
        height: 25px;
        font-size: 14px;
        min-width: 115px;
        padding: 3px 30px;
        border-radius: 10px;
    }
`

export { TagsContainer, Tag }
