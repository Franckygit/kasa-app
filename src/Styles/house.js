import styled from 'styled-components'

const Flex = styled.div``

const Container = styled.article`
    padding-top: 15px;
    padding-bottom: 24px;
    margin: 0px 10%;

    @media (min-width: 1024px) {
        padding-top: 30px;
    }
`

const Columns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > * {
        flex: 1;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const InfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ProfilWrapper = styled.div`
    display: flex;
    padding: 16px 0;
    vertical-align: middle;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media (min-width: 1024px) {
        padding: 0;
        flex-direction: column;
    }
`

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > * {
        margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
        margin-top: 24px;
        gap: 40px;
        flex-direction: row;
    }
`

export {
    Flex,
    Container,
    Columns,
    CollapseWrapper,
    InfosWrapper,
    ProfilWrapper,
}
