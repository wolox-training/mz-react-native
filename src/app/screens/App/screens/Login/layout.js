import React from 'react';
import { LOGIN } from './strings';
import { EMAIL, PASSWORD } from '../../shared/strings';
import Input from '../../shared/components/Input';

export default function Login({ onSubmit, emailError, onInputChange, passwordError }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="title">{LOGIN}</h1>
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
      <input type="submit" className="button" value={LOGIN} />
    </form>
  );
}
