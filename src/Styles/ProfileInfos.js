import styled from 'styled-components'

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProfileName = styled.div`
    font-weight: 500;
    text-align: right;
    font-size: 18px;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: right;

    color: #ff6060;
    margin-right: 10px;
    word-spacing: 9999999px;

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
    }
`

const ProfilePicture = styled.img`
    width: 46px;
    height: 46px;
    border-radius: 100%;
    object-fit: cover;

    @media (min-width: 1024px) {
        width: 64px;
        height: 64px;
    }
`

export { ProfileContainer, ProfileName, ProfilePicture }
