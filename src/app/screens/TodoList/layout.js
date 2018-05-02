import React from 'react';
import { View } from 'react-native';

import TodoInputForm from './components/TodoInput';
import styles from './styles';
import TodoListing from './components/TodoList';

export default function TodoList({ onToggleComplete, onDelete }) {
  return (
    <View style={styles.container}>
      <TodoInputForm />
      <TodoListing onToggleComplete={onToggleComplete} onDelete={onDelete} />
    </View>
  );
}
