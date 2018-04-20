import React from 'react';
import CommentLayout from '../CommentLayout';
import './styles.css';
import PropTypes from 'prop-types';

export default function Comment({ name, date, content }) {
  return (
    <CommentLayout>
      <span className="comment-name">{name}</span>
      <span className="comment-date">{date}</span>
      <span className="comment-content">{content}</span>
    </CommentLayout>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
};

Comment.defaultProps = {
  name: 'Harold',
  date: '20/03/18',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
};
