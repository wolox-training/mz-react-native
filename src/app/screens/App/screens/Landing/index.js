import React from 'react';
import wBooksLogo from '../../../../../assets/ASSETS/wbooks_logo.svg';
import { LOGIN_WITH_GOOGLE, SIGN_UP } from './strings';
import { LOGO_ALT_TEXT } from '../../shared/strings';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing">
      <img src={wBooksLogo} alt={LOGO_ALT_TEXT} className="wbooks-logo" />
      <Link to="/login">
        <button className="landing-button">{LOGIN_WITH_GOOGLE}</button>
      </Link>
      <Link to="/signup">
        <button className="landing-button">{SIGN_UP}</button>
      </Link>
    </div>
  );
}
