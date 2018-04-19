import React, { Component } from 'react';
import Signup from './layout';
import { EMAIL_ERROR, PASSWORD_ERROR } from '../../shared/strings';
import { PASSWORD_CONFIRMATION_ERROR, FIRST_NAME_ERROR, LAST_NAME_ERROR } from './strings';
import { emailIsValid, passwordIsValid, hasLettersOnly } from '../../../../utils/validationUtils';

class SignupContainer extends Component {
  state = {
    emailError: false,
    passwordError: false,
    passwordConfirmationError: false,
    firstNameError: false,
    lastNameError: false
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
    const validPasswordConfirmation = this.state.password === this.state.passwordConfirmation;
    const validFirstName = hasLettersOnly(this.state.firstName);
    const validLastNameError = hasLettersOnly(this.state.lastName);

    this.setState({
      emailError: !validEmail && EMAIL_ERROR, //set either EMAIL_ERROR or false
      passwordError: !validPassword && PASSWORD_ERROR,
      passwordConfirmationError: !validPasswordConfirmation && PASSWORD_CONFIRMATION_ERROR,
      firstNameError: !validFirstName && FIRST_NAME_ERROR,
      lastNameError: !validLastNameError && LAST_NAME_ERROR
    });

    if (
      validEmail &&
      validPassword &&
      validPasswordConfirmation &&
      validFirstName &&
      validLastNameError
    ) {
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <Signup
        onInputChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
        passwordConfirmationError={this.state.passwordConfirmationError}
        firstNameError={this.state.firstNameError}
        lastNameError={this.state.lastNameError}
      />
    );
  }
}

export default SignupContainer;
