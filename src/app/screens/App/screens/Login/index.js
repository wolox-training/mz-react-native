import React, { Component } from 'react';
import Login from './layout';
import { EMAIL_REGEX, HAS_LETTER_REGEX, HAS_NUMBER_REGEX } from '../../../../constants/regex';

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

    const emailError = !EMAIL_REGEX.test(email);
    const passwordError =
      password.length < 8 ||
      password.length > 52 ||
      !HAS_LETTER_REGEX.test(password) ||
      !HAS_NUMBER_REGEX.test(password);

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
    } else {
      localStorage.setItem('currentUser', email);
      this.props.history.push('/dashboard');
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
