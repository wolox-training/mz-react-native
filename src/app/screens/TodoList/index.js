import React from 'react';
import { View } from 'react-native';

import CustomText from '../../components/CustomText';

import styles from './styles';
import TodoListing from './components/TodoList';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <TodoListing />
    </View>
  );
}
