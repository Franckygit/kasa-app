import React from 'react'
import PropTypes from 'prop-types'
import '../../Styles/HouseTags.css'

const HouseTags = ({ tags }) => {
    return (
        <div>
            <div className="tags-container">
                {tags.length > 0 &&
                    tags.map((tag) => (
                        <span className="tag" key={tag}>
                            {tag}
                        </span>
                    ))}
            </div>
        </div>
    )
}

HouseTags.propTypes = {
    tags: PropTypes.array.isRequired,
}

export default HouseTags
