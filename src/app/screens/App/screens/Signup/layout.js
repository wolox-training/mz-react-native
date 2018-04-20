import React from 'react';
import { SIGNUP, PASSWORD_CONFIRMATION, FIRST_NAME, LAST_NAME } from './strings';
import { EMAIL, PASSWORD } from '../../shared/strings';
import Input from '../../shared/components/Input';

export default function Signup({
  onSubmit,
  emailError,
  onInputChange,
  passwordError,
  passwordConfirmationError,
  firstNameError,
  lastNameError
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="title">{SIGNUP}</h1>
      <Input
        name="email"
        type="email"
        label={EMAIL}
        error={emailError}
        onInputChange={onInputChange}
      />
      <Input
        name="password"
        type="password"
        label={PASSWORD}
        error={passwordError}
        onInputChange={onInputChange}
      />
      <Input
        name="passwordConfirmation"
        type="password"
        label={PASSWORD_CONFIRMATION}
        error={passwordConfirmationError}
        onInputChange={onInputChange}
      />
      <Input
        name="firstName"
        type="text"
        label={FIRST_NAME}
        error={firstNameError}
        onInputChange={onInputChange}
      />
      <Input
        name="lastName"
        type="text"
        label={LAST_NAME}
        error={lastNameError}
        onInputChange={onInputChange}
      />
      <input type="submit" className="button" value={SIGNUP} />
    </form>
  );
}
