import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import TodoListing from './components/TodoList';

export default function TodoList({ onToggleComplete, onDelete }) {
  return (
    <View style={styles.container}>
      <TodoListing onToggleComplete={onToggleComplete} onDelete={onDelete} />
    </View>
  );
}
