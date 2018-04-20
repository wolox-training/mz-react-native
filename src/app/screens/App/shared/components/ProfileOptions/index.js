import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROFILE, LOG_OUT } from '../../strings';
import './styles.css';

class ProfileOptions extends Component {
  logOut = () => {
    localStorage.clear();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <div className="arrow" />
        <div className="profile-options">
          <span className="profile-option">{PROFILE}</span>
          <span className="profile-option" onClick={this.logOut}>
            {LOG_OUT}
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileOptions);
