import React, { Component } from 'react';
import Signup from './layout';

class SignupContainer extends Component {
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return <Signup onInputChange={this.handleInputChange} />;
  }
}

export default SignupContainer;
