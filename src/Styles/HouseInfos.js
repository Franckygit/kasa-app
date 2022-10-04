import styled from 'styled-components'

const HouseInfosBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: #ff6060;

    @media (min-width: 1024px) {
        margin-bottom: 20px;
    }
`

const TitleInfos = styled.div`
    font-size: 24px;
    font-weight: 500;
    line-height: 26px;
    display: flex;
    align-items: flex-end;

    @media (min-width: 1024px) {
        font-size: 36px;
        line-height: 51px;
    }
`

const LocationInfos = styled.div`
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
    }
`

export { LocationInfos, HouseInfosBox, TitleInfos }
