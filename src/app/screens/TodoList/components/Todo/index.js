import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../../../redux/toDos/actions';

import styles from './styles';

class TodoContainer extends Component {
  toggleComplete = () => {
    const action = actionCreators.toggleToDoComplete(this.props.toDo.id);
    this.props.dispatch(action);
  };

  delete = () => {
    const action = actionCreators.delete(this.props.toDo.id);
    this.props.dispatch(action);
  };

  render() {
    return (
      <View style={styles.toDoContainer}>
        <Text style={this.props.toDo.completed && styles.toDoText}>{this.props.toDo.text}</Text>
        <View style={styles.toDoOptions}>
          <Button onPress={this.toggleComplete} title="Done" />
          <Button onPress={this.delete} title="Delete" />
        </View>
      </View>
    );
  }
}

export default connect()(TodoContainer);
