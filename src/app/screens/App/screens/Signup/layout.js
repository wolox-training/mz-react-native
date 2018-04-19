import React from 'react';
import { SIGNUP, PASSWORD_CONFIRMATION, FIRST_NAME, LAST_NAME } from './strings';
import { EMAIL, PASSWORD } from '../../shared/strings';
import Input from '../../shared/components/Input';

export default function Signup(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <h1 className="title">{SIGNUP}</h1>
      <Input
        name="email"
        type="email"
        label={EMAIL}
        error={props.emailError}
        onInputChange={props.onInputChange}
      />
      <Input
        name="password"
        type="password"
        label={PASSWORD}
        error={props.passwordError}
        onInputChange={props.onInputChange}
      />
      <Input
        name="passwordConfirmation"
        type="password"
        label={PASSWORD_CONFIRMATION}
        error={props.passwordConfirmationError}
        onInputChange={props.onInputChange}
      />
      <Input
        name="firstName"
        type="text"
        label={FIRST_NAME}
        error={props.firstNameError}
        onInputChange={props.onInputChange}
      />
      <Input
        name="lastName"
        type="text"
        label={LAST_NAME}
        error={props.lastNameError}
        onInputChange={props.onInputChange}
      />
      <input type="submit" className="button" value={SIGNUP} />
    </form>
  );
}
