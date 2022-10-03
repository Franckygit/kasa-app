import React from 'react'
import PropTypes from 'prop-types'

import '../../Styles/ProfileInfos.css'

const ProfileInfos = ({ host }) => {
    return (
        <div className="profile-container">
            <div className="profile-name">{host.name}</div>
            <img
                className="profile-picture"
                src={host.picture}
                alt={host.name}
            />
        </div>
    )
}

ProfileInfos.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
}

export default ProfileInfos
