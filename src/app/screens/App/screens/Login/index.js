import React, { Component } from 'react';
import axios from 'axios';
import Login from './layout';
import { SESSION_URL } from '../../../../constants/urls';
import { WRONG_PASSWORD } from './strings';
import { EMAIL_ERROR, PASSWORD_ERROR } from '../../shared/strings';
import { emailIsValid, passwordIsValid } from '../../../../utils/validationUtils';

class LoginContainer extends Component {
  state = {
    emailError: false,
    passwordError: false,
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    const validEmail = emailIsValid(email);
    const validPassword = passwordIsValid(password);

    this.setState({
      emailError: !validEmail && EMAIL_ERROR, //set either EMAIL_ERROR or false
      passwordError: !validPassword && PASSWORD_ERROR
    });

    if (validEmail && validPassword) {
      this.requestAuthentication();
    }
  };

  requestAuthentication = async () => {
    const email = this.state.email;
    const password = this.state.password;

    axios
      .post(SESSION_URL, { email, password })
      .then(response => {
        localStorage.setItem('currentUser', email);
        this.props.history.push('/dashboard');
      })
      .catch(error => this.setState({ passwordError: WRONG_PASSWORD }));
  };

  render() {
    return (
      <Login
        onInputChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

export default LoginContainer;
