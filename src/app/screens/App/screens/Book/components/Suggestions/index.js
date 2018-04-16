import React from 'react';
import Cover from '../../../../shared/components/Cover';
import { SUGGESTIONS } from '../../strings';
import './styles.css';

export default function Suggestions(props) {
  return (
    <div className="suggestions-container">
      <h1 className="subtitle">{SUGGESTIONS}</h1>
      <div className="suggestions">
        <Cover size="suggestion" />
        <Cover size="suggestion" />
        <Cover size="suggestion" />
        <Cover size="suggestion" />
      </div>
    </div>
  );
}
