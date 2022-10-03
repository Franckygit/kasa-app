import React from 'react'
import '../Styles/about.css'
import Collapse from './Collapse'
import styled from 'styled-components'

import data from '../Data/about.json'

const Container = styled.div`
    width: 80%;
    max-width: 1023px;
    margin: 0 auto;

    > * {
        margin-top: 20px;
    }

    @media (min-width: 1024px) {
        > * {
            margin-top: 31px;
        }
    }
`

const AboutInfos = () => {
    return (
        <Container>
            {data.map((info, index) => {
                return (
                    <Collapse key={index} title={info.title} page="about">
                        <p>{info.content}</p>
                    </Collapse>
                )
            })}
        </Container>
    )
}

export default AboutInfos
