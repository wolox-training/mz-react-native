import React from 'react';
import { LOGIN } from './strings';
import { EMAIL, PASSWORD } from '../../shared/strings';
import Input from '../../shared/components/Input';

export default function Login(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <h1 className="title">{LOGIN}</h1>
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
      <input type="submit" className="button" value={LOGIN} />
    </form>
  );
}
