import React from 'react'
import PropTypes from 'prop-types'
import {
    ProfileContainer,
    ProfileName,
    ProfilePicture,
} from '../../Styles/ProfileInfos.js'

import '../../Styles/ProfileInfos.js'

const ProfileInfos = ({ host }) => {
    return (
        <ProfileContainer>
            <ProfileName>{host.name}</ProfileName>
            <ProfilePicture src={host.picture} alt={host.name} />
        </ProfileContainer>
    )
}

ProfileInfos.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
}

export default ProfileInfos
