import React, { Component } from 'react';
import NavBar from './layout';
import './styles.css';

class NavBarContainer extends Component {
  state = { showProfileOptions: false, showNotifications: false };

  toggleShowProfileOptions = () => {
    this.setState(prevState => ({
      showProfileOptions: !prevState.showProfileOptions,
      showNotifications: false
    }));
  };

  toggleShowNotifications = () => {
    this.setState(prevState => ({
      showNotifications: !prevState.showNotifications,
      showProfileOptions: false
    }));
  };

  render() {
    return (
      <NavBar
        showNotifications={this.state.showNotifications}
        showProfileOptions={this.state.showProfileOptions}
        toggleShowProfileOptions={this.toggleShowProfileOptions}
        toggleShowNotifications={this.toggleShowNotifications}
      />
    );
  }
}

export default NavBarContainer;
