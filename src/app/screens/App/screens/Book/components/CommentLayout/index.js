import React from 'react';
import { PROFILE_IMAGE_ALT_TEXT } from '../../strings';
import profileImage from '../../../../../../../assets/ASSETS/profile-pic.jpg';
import PropTypes from 'prop-types';
import './styles.css';

export default function CommentLayout({ image, children }) {
  return (
    <div className="comment-container">
      <img src={image} className="comment-image" alt={PROFILE_IMAGE_ALT_TEXT} />
      <div className="comment-info">{children}</div>
    </div>
  );
}

CommentLayout.propTypes = {
  image: PropTypes.string
};

CommentLayout.defaultProps = {
  image: profileImage
};
