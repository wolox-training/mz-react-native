import React, { Component } from 'react';
import Login from './layout';
import { WRONG_PASSWORD } from './strings';
import { EMAIL_ERROR, PASSWORD_ERROR } from '../../shared/strings';
import { emailIsValid, passwordIsValid } from '../../../../utils/validationUtils';
import { logIn } from '../../../../../service/service';
import { setAuthToken } from '../../../../../config/api';

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
    const validEmail = emailIsValid(this.state.email);
    const validPassword = passwordIsValid(this.state.password);

    this.setState({
      emailError: !validEmail && EMAIL_ERROR, //set either EMAIL_ERROR or false
      passwordError: !validPassword && PASSWORD_ERROR
    });

    if (validEmail && validPassword) {
      logIn(this.state.email, this.state.password)
        .then(response => {
          localStorage.setItem('currentUser', this.state.email);
          setAuthToken(response.data.access_token);
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
