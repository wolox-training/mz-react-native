import React from 'react';
import { SIGNUP, PASSWORD_CONFIRMATION, FIRST_NAME, LAST_NAME } from './strings';
import { EMAIL, PASSWORD } from '../../shared/strings';

export default function Signup(props) {
  return (
    <form className="login" onSubmit={props.onSubmit}>
      <h1 className="title">{SIGNUP}</h1>
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
      {props.emailError && <span className="error-message">{props.emailError}</span>}
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
      {props.passwordError && <span className="error-message">{props.passwordError}</span>}
      <label className="label" htmlFor="passwordConfirmation">
        {PASSWORD_CONFIRMATION}
      </label>
      <input
        required
        type="password"
        className={`input ${props.passwordError ? 'error' : ''}`}
        name="passwordConfirmation"
        onChange={props.onInputChange}
      />
      {props.passwordError && <span className="error-message">{props.passwordError}</span>}
      <label className="label" htmlFor="firstName">
        {FIRST_NAME}
      </label>
      <input
        required
        type="password"
        className={`input ${props.passwordError ? 'error' : ''}`}
        name="firstName"
        onChange={props.onInputChange}
      />
      {props.passwordError && <span className="error-message">{props.passwordError}</span>}
      <label className="label" htmlFor="lastName">
        {LAST_NAME}
      </label>
      <input
        required
        type="password"
        className={`input ${props.passwordError ? 'error' : ''}`}
        name="lastName"
        onChange={props.onInputChange}
      />
      {props.passwordError && <span className="error-message">{props.passwordError}</span>}
      <input type="submit" className="login-button" value={SIGNUP} onClick={props.onSubmit} />
    </form>
  );
}
