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
    const email = this.state.email;
    const password = this.state.password;
    const passwordConfirmation = this.state.passwordConfirmation;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    const validEmail = emailIsValid(email);
    const validPassword = passwordIsValid(password);
    const validPasswordConfirmation = password === passwordConfirmation;
    const validFirstName = hasLettersOnly(firstName);
    const validLastNameError = hasLettersOnly(lastName);

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
      this.requestAuthentication();
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
