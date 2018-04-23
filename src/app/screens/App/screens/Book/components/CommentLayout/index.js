import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../../../../shared/components/ProfileImage';
import './styles.css';

export default function CommentLayout({ image, children }) {
  return (
    <div className="comment-container">
      <ProfileImage image={image} />
      <div className="comment-info">{children}</div>
    </div>
  );
}

CommentLayout.propTypes = {
  image: PropTypes.string
};
