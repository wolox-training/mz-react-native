import React, { Component } from 'react';
import Login from './layout';
import { EMAIL_REGEX, HAS_NUMBER_REGEX } from '../../../../constants/regex';
import { SESSION_URL } from '../../../../constants/urls';
import { EMAIL_ERROR, PASSWORD_ERROR, WRONG_PASSWORD } from './strings';

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

    const invalidEmail = !EMAIL_REGEX.test(email);
    const invalidPassword =
      password.length < 8 || password.length > 52 || !HAS_NUMBER_REGEX.test(password);

    this.setState({
      emailError: invalidEmail && EMAIL_ERROR, //set either EMAIL_ERROR or false
      passwordError: invalidPassword && PASSWORD_ERROR
    });

    if (!invalidEmail && !invalidPassword) {
      this.requestAuthentication();
    }
  };

  requestAuthentication = async () => {
    const email = this.state.email;
    const password = this.state.password;

    const response = await fetch(SESSION_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    if (response.ok) {
      localStorage.setItem('currentUser', email);
      this.props.history.push('/dashboard');
    } else {
      this.setState({ passwordError: WRONG_PASSWORD });
    }
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
