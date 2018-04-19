import React from 'react';
import './styles.css';

export default function Input(props) {
  return (
    <div className="input-container">
      <label className="label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        required
        type={props.type}
        className={`input ${props.error ? 'error' : ''}`}
        name={props.name}
        onChange={props.onInputChange}
      />
      <span className="error-message">{props.error}</span>
    </div>
  );
}
