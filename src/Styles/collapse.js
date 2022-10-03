import styled from 'styled-components'

const CollapseContainer = styled.div`
    overflow: hidden;
    width: 100%;
    border-radius: 5px;
    /* width: ${(props) => (props.page === 'about' ? '100%' : '582px')}; */

    @media (min-width: 1024px) {
        border-radius: ${(props) => (props.page === 'about' ? '5px' : '10px')};
        max-width: ${(props) => (props.page === 'about' ? '1023px' : '582px')};
    }
`

const CollapseHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 0 11.5px;

    color: #fff;
    background: #ff6060;

    @media (min-width: 1024px) {
        padding: 0 20px;
        height: ${(props) => (props.page === 'about' ? '47px' : '52px')};
    }
`

const CollapseTitle = styled.div`
    font-size: 13px;
    font-weight: 500;
    font-style: normal;

    @media (min-width: 1024px) {
        font-size: ${(props) => (props.page === 'about' ? '24px' : '18px')};
    }
`

const CollapseImage = styled.img`
    width: 18.4px;
    height: 18.4px;

    @media (min-width: 1024px) {
        height: 28.9px;
        width: 28.9px;
    }
`

const CollapseContent = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    letter-spacing: 0em;

    color: #ff6060;
    background-color: #f7f7f7;
    padding: 17px 11px 1px;
    height: 100%;

    ul {
        padding: 0;
        list-style-type: none;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 26px;
        padding: 30px 20px;
    }
`

export {
    CollapseContainer,
    CollapseHeader,
    CollapseTitle,
    CollapseImage,
    CollapseContent,
}
