import React from 'react';
import './styles.css';

export default function Login() {
  return (
    <div className="login">
      <h1 className="title">Login</h1>
      <label className="label">Email</label>
      <input type="email" className="input" />
      <label className="label">Password</label>
      <input type="password" className="input" />
      <button className="login-button">Login</button>
    </div>
  );
}
