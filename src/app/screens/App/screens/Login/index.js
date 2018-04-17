import React from 'react';
import { LOGIN, EMAIL, PASSWORD } from './strings';
import './styles.css';

export default function Login() {
  return (
    <div className="login">
      <h1 className="title">{LOGIN}</h1>
      <label className="label">{EMAIL}</label>
      <input type="email" className="input" />
      <label className="label">{PASSWORD}</label>
      <input type="password" className="input" />
      <button className="login-button">{LOGIN}</button>
    </div>
  );
}
