import React from 'react';
import profileImage from '../../../../../../assets/ASSETS/profile-pic.jpg';
import { PROFILE_IMAGE_ALT_TEXT } from '../../strings';
import PropTypes from 'prop-types';
import './styles.css';

export default function ProfileImage({ image }) {
  return <img src={image} className="profile-image" alt={PROFILE_IMAGE_ALT_TEXT} />;
}

ProfileImage.propTypes = {
  image: PropTypes.string
};

ProfileImage.defaultProps = {
  image: profileImage
};
