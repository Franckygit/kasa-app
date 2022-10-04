import React from 'react'
import PropTypes from 'prop-types'
import '../../Styles/HouseTags.js'
import { TagsContainer, Tag } from '../../Styles/HouseTags.js'

const HouseTags = ({ tags }) => {
    return (
        <TagsContainer>
            {tags.length > 0 && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </TagsContainer>
    )
}

HouseTags.propTypes = {
    tags: PropTypes.array.isRequired,
}

export default HouseTags
