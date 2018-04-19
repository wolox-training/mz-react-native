import React, { Component } from 'react';
import Login from './layout';
import { EMAIL_REGEX, HAS_NUMBER_REGEX } from '../../../../constants/regex';
import { EMAIL_ERROR, PASSWORD_ERROR, WRONG_PASSWORD } from './strings';
import { logIn } from '../../../../../service/service';

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
      logIn(this.state.email, this.state.password)
        .then(response => {
          localStorage.setItem('currentUser', email);
          this.props.history.push('/dashboard');
        })
        .catch(error => this.setState({ passwordError: WRONG_PASSWORD }));
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
