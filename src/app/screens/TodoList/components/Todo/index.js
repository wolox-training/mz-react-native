import { View, Text, Button } from 'react-native';
import React from 'react';

import { DONE, DELETE } from '../../strings';

import styles from './styles';

export default function Todo({ onDelete, onToggleComplete, toDo }) {
  return (
    <View style={styles.toDoContainer}>
      <Text style={toDo.completed && styles.lineThroughText}>{toDo.text}</Text>
      <View style={styles.toDoOptions}>
        <Button onPress={() => onToggleComplete(toDo.id)} title={DONE} />
        <Button onPress={() => onDelete(toDo.id)} title={DELETE} />
      </View>
    </View>
  );
}
