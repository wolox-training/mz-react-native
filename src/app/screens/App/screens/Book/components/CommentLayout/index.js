import React from 'react';
import { PROFILE_IMAGE_ALT_TEXT } from '../../strings';
import profileImage from '../../../../../../../assets/ASSETS/profile-pic.jpg';
import PropTypes from 'prop-types';
import './styles.css';

export default function CommentLayout(props) {
  return (
    <div className="comment-container">
      <img src={props.image} className="comment-image" alt={PROFILE_IMAGE_ALT_TEXT} />
      <div className="comment-info">{props.children}</div>
    </div>
  );
}

CommentLayout.propTypes = {
  image: PropTypes.string
};

CommentLayout.defaultProps = {
  image: profileImage
};
