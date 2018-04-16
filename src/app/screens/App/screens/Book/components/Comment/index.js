import React from 'react';
import './styles.css';
import profileImage from '../../../../../../../assets/ASSETS/profile-pic.jpg';

export default function Comment(props) {
  return (
    <div className="comment-container">
      <img src={profileImage} className="comment-image" />
      <div className="comment-info">
        <span className="comment-name">Harold</span>
        <span className="comment-date">20/03/18</span>
        <span className="comment-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>
    </div>
  );
}
