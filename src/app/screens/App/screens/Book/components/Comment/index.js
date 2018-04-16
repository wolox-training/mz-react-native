import React from 'react';
import CommentLayout from '../CommentLayout';
import './styles.css';
import PropTypes from 'prop-types';

export default function Comment(props) {
  return (
    <CommentLayout>
      <span className="comment-name">{props.name}</span>
      <span className="comment-date">{props.date}</span>
      <span className="comment-content">{props.content}</span>
    </CommentLayout>
  );
}

Comment.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
};

Comment.defaultProps = {
  name: 'Harold',
  date: '20/03/18',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
};
