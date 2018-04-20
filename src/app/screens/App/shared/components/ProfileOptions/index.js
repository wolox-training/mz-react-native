import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';

class ProfileOptions extends Component {
  logOut = () => {
    localStorage.clear();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="profile-options">
        <span className="profile-option">Perfil</span>
        <span className="profile-option" onClick={this.logOut}>
          Cerrar sesión
        </span>
      </div>
    );
  }
}

export default withRouter(ProfileOptions);
