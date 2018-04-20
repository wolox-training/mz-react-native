import React from 'react';
import { ADD_COMMENT, SEND_COMMENT } from '../../strings';
import CommentLayout from '../CommentLayout';
import './styles.css';

export default function Comment() {
  return (
    <CommentLayout>
      <span className="add-comment">{ADD_COMMENT}</span>
      <textarea className="comment-input" />
      <button className="send-comment">{SEND_COMMENT}</button>
    </CommentLayout>
  );
}
