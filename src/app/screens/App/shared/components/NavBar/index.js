import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  LOGO_ALT_TEXT,
  NOTIFICATIONS_ICON_ALT_TEXT,
  BOOK_SUGGESTIONS_ICON_ALT_TEXT
} from '../../strings';
import ProfileImage from '../ProfileImage';
import './styles.css';
import wBooksLogo from '../../../../../../assets/ASSETS/wbooks_logo.svg';
import notifications from '../../../../../../assets/ASSETS/notifications.svg';
import add_book from '../../../../../../assets/ASSETS/add_book.svg';
import ProfileOptions from '../ProfileOptions';

class NavBar extends Component {
  state = { showProfileOptions: false };

  onClick = () => {
    this.setState(prevState => ({
      showProfileOptions: !prevState.showProfileOptions
    }));
  };

  render() {
    return (
      <nav className="navbar">
        <Link to="/dashboard">
          <img src={wBooksLogo} className="navbar-logo" alt={LOGO_ALT_TEXT} />
        </Link>
        <div className="menu">
          <img src={notifications} alt={NOTIFICATIONS_ICON_ALT_TEXT} />
          <img src={add_book} alt={BOOK_SUGGESTIONS_ICON_ALT_TEXT} />
          <ProfileImage onClick={this.onClick} />
          {this.state.showProfileOptions && <ProfileOptions />}
        </div>
      </nav>
    );
  }
}

export default NavBar;
