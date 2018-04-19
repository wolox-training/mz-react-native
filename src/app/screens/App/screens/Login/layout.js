import React from 'react';
import { LOGIN } from './strings';
import { EMAIL, PASSWORD } from '../../shared/strings';

export default function Login(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <h1 className="title">{LOGIN}</h1>
      <label className="label" htmlFor="email">
        {EMAIL}
      </label>
      <input
        required
        type="email"
        className={`input ${props.emailError ? 'error' : ''}`}
        name="email"
        onChange={props.onInputChange}
      />
      <span className="error-message">{props.emailError}</span>
      <label className="label" htmlFor="password">
        {PASSWORD}
      </label>
      <input
        required
        type="password"
        className={`input ${props.passwordError ? 'error' : ''}`}
        name="password"
        onChange={props.onInputChange}
      />
      <span className="error-message">{props.passwordError}</span>
      <input type="submit" className="login-button" value={LOGIN} />
    </form>
  );
}
