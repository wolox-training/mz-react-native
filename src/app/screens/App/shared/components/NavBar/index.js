import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  LOGO_ALT_TEXT,
  NOTIFICATIONS_ICON_ALT_TEXT,
  BOOK_SUGGESTIONS_ICON_ALT_TEXT
} from '../../strings';
import ProfileImage from '../ProfileImage';
import Notifications from '../Notifications';
import './styles.css';
import wBooksLogo from '../../../../../../assets/ASSETS/wbooks_logo.svg';
import notifications from '../../../../../../assets/ASSETS/notifications.svg';
import add_book from '../../../../../../assets/ASSETS/add_book.svg';
import ProfileOptions from '../ProfileOptions';

class NavBar extends Component {
  state = { showProfileOptions: false, toggleShowNotifications: false };

  toggleShowProfileOptions = () => {
    this.setState(prevState => ({
      showProfileOptions: !prevState.showProfileOptions
    }));
  };

  toggleShowNotifications = () => {
    this.setState(prevState => ({
      toggleShowNotifications: !prevState.toggleShowNotifications
    }));
  };

  render() {
    return (
      <nav className="navbar">
        <Link to="/dashboard">
          <img src={wBooksLogo} className="navbar-logo" alt={LOGO_ALT_TEXT} />
        </Link>
        <div className="menu">
          <img
            src={notifications}
            alt={NOTIFICATIONS_ICON_ALT_TEXT}
            onClick={this.toggleShowNotifications}
          />
          {this.state.toggleShowNotifications && <Notifications />}
          <img src={add_book} alt={BOOK_SUGGESTIONS_ICON_ALT_TEXT} />
          <ProfileImage onClick={this.toggleShowProfileOptions} />
          {this.state.showProfileOptions && <ProfileOptions />}
        </div>
      </nav>
    );
  }
}

export default NavBar;
