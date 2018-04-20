import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export default function Input({ name, label, type, error, onInputChange }) {
  return (
    <div className="input-container">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        required
        type={type}
        className={`input ${error ? 'error' : ''}`}
        name={name}
        onChange={onInputChange}
      />
      <span className="error-message">{error}</span>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
