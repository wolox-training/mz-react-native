import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../../../redux/toDos/actions';

import styles from './styles';

class TodoContainer extends Component {
  toggleComplete = () => {
    this.props.dispatch(actionCreators.toggleToDoComplete(this.props.toDo.id));
  };

  render() {
    return (
      <View>
        <Text style={this.props.toDo.completed && styles.toDoText}>{this.props.toDo.text}</Text>
        <Button onPress={this.toggleComplete} title="Done" />
      </View>
    );
  }
}

export default connect()(TodoContainer);
