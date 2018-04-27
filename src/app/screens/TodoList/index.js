import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import TodoInputForm from './components/TodoInput';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <TodoInputForm handleSubmit={this.submit} />
    </View>
  );
}
