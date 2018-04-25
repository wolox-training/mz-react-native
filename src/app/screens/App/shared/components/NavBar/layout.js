import React from 'react';
import { Link } from 'react-router-dom';
import {
  LOGO_ALT_TEXT,
  NOTIFICATIONS_ICON_ALT_TEXT,
  BOOK_SUGGESTIONS_ICON_ALT_TEXT
} from '../../strings';
import ProfileImage from '../ProfileImage';
import Notifications from '../Notifications';
import Droppable from '../Droppable';
import './styles.css';
import wBooksLogo from '../../../../../../assets/ASSETS/wbooks_logo.svg';
import notifications from '../../../../../../assets/ASSETS/notifications.svg';
import add_book from '../../../../../../assets/ASSETS/add_book.svg';
import ProfileOptions from '../ProfileOptions';

function NavBar({
  showNotifications,
  showProfileOptions,
  toggleShowProfileOptions,
  toggleShowNotifications
}) {
  return (
    <nav className="navbar">
      <Link to="/dashboard">
        <img src={wBooksLogo} className="navbar-logo" alt={LOGO_ALT_TEXT} />
      </Link>
      <div className="menu">
        <Droppable showDropdown={showNotifications} dropdown={<Notifications />}>
          <img
            src={notifications}
            alt={NOTIFICATIONS_ICON_ALT_TEXT}
            onClick={toggleShowNotifications}
          />
        </Droppable>
        <img src={add_book} alt={BOOK_SUGGESTIONS_ICON_ALT_TEXT} />
        <Droppable showDropdown={showProfileOptions} dropdown={<ProfileOptions />}>
          <ProfileImage onClick={toggleShowProfileOptions} />
        </Droppable>
      </div>
    </nav>
  );
}

export default NavBar;
