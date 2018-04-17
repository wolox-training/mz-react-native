import React from 'react';
import wBooksLogo from '../../../../../assets/ASSETS/wbooks_logo.svg';
import { LOGO_ALT_TEXT, LOGIN_WITH_GOOGLE } from '../Home/strings';
import './styles.css';

export default function Landing() {
  return (
    <div className="landing">
      <img src={wBooksLogo} alt={LOGO_ALT_TEXT} className="wbooks-logo" />
      <button className="login-button">{LOGIN_WITH_GOOGLE}</button>
    </div>
  );
}
