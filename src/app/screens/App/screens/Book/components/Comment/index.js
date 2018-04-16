import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import profileImage from '../../../../../../../assets/ASSETS/profile-pic.jpg';

export default function Comment(props) {
  return (
    <div className="comment-container">
      <img src={props.image} className="comment-image" />
      <div className="comment-info">
        <span className="comment-name">{props.name}</span>
        <span className="comment-date">{props.date}</span>
        <span className="comment-content">{props.content}</span>
      </div>
    </div>
  );
}

Comment.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
};

Comment.defaultProps = {
  image: profileImage,
  name: 'Harold',
  date: '20/03/18',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
};
