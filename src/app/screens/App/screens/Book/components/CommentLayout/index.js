import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../../../../shared/components/ProfileImage';
import './styles.css';

export default function CommentLayout(props) {
  return (
    <div className="comment-container">
      <ProfileImage image={props.image} />
      <div className="comment-info">{props.children}</div>
    </div>
  );
}

CommentLayout.propTypes = {
  image: PropTypes.string
};
