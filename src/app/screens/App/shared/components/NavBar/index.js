import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_ALT_TEXT } from '../../strings';
import ProfileImage from '../ProfileImage';
import './styles.css';
import wBooksLogo from '../../../../../../assets/ASSETS/wbooks_logo.svg';
import notifications from '../../../../../../assets/ASSETS/notifications.svg';
import add_book from '../../../../../../assets/ASSETS/add_book.svg';

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar">
        <Link to="/dashboard">
          <img src={wBooksLogo} className="navbar-logo" alt={LOGO_ALT_TEXT} />
        </Link>
        <div className="menu">
          <img src={notifications} />
          <img src={add_book} />
          <ProfileImage />
        </div>
      </nav>
      {props.children}
    </div>
  );
}
