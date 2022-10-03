import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import '../Styles/collapse.js'

import {
    CollapseContainer,
    CollapseHeader,
    CollapseTitle,
    CollapseImage,
    CollapseContent,
} from '../Styles/collapse'

import arrowUp from '../Assets/arrow-up.svg'
import arrowDown from '../Assets/arrow-down.svg'

const Collapse = ({ title, children, page }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <CollapseContainer page={page}>
            <CollapseHeader page={page} onClick={() => setIsOpen(!isOpen)}>
                <CollapseTitle>{title}</CollapseTitle>
                <CollapseImage src={isOpen ? arrowUp : arrowDown} alt="arrow" />
            </CollapseHeader>
            {isOpen && <CollapseContent>{children}</CollapseContent>}
        </CollapseContainer>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    page: PropTypes.string,
}

export default Collapse
