import React, { Component } from 'react';


import CustomTextInput from '../../../../components/CustomTextInput';

import styles from './styles';

export default class TodoInput extends Component {
  state = {
    inputText: ''
  };

  handleSubmit = () => {
    // todo save todo
    console.warn(this.state.inputText);
    this.setState({ inputText: '' });
  };

  handleTextChange = text => {
    // this.setState({ inputText: text });
    console.warn(text.nativeEvent.text);
  };

  render() {
    return (
      <CustomTextInput
        placeholder="Enter an item!"
        style={styles.fullWidth}
        // onSubmitEditing={this.handleSubmit}
        onChange={this.handleTextChange}
        bottomBorder
      />
    );
  }
}
