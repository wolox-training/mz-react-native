import React from 'react';
import { COMMENTS } from '../../strings';
import Comment from '../Comment';
import './styles.css';

export default function Comments(props) {
  return (
    <div className="comments-container">
      <h1 className="subtitle">{COMMENTS}</h1>
      <Comment />
    </div>
  );
}
