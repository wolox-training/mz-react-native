import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

import { DONE, DELETE } from '../../strings';

import styles from './styles';

export default class Todo extends Component {
  handleToggleComplete = () => {
    this.props.onToggleComplete(this.props.toDo.id);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.toDo.id);
  };

  render() {
    return (
      <View style={styles.toDoContainer}>
        <Text style={this.props.toDo.completed && styles.lineThroughText}>{this.props.toDo.text}</Text>
        <View style={styles.toDoOptions}>
          <Button onPress={this.handleToggleComplete} title={DONE} />
          <Button onPress={this.handleDelete} title={DELETE} />
        </View>
      </View>
    );
  }
}
