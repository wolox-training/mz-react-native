import { View, Text, Button } from 'react-native';
import React from 'react';

import styles from './styles';

export default function Todo({ onDelete, onToggleComplete, toDo }) {
  return (
    <View style={styles.toDoContainer}>
      <Text style={toDo.completed && styles.toDoText}>{toDo.text}</Text>
      <View style={styles.toDoOptions}>
        <Button onPress={() => onToggleComplete(toDo.id)} title="Done" />
        <Button onPress={() => onDelete(toDo.id)} title="Delete" />
      </View>
    </View>
  );
}
