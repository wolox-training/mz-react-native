import Cover from '../Cover';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Notification({ text, title, author, alert }) {
  return (
    <div className="notification">
      <Cover size="notification" />
      <div className="notification-info">
        <span className="notification-text">{text}</span>
        <span className="notification-title">{title}</span>
        <span className="notification-author">{author}</span>
        <span className="notification-alert">{alert}</span>
      </div>
    </div>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  alert: PropTypes.string
};
