import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import TodoInput from './components/TodoInput';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <TodoInput />
    </View>
  );
}
