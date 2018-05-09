import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm, reset } from 'redux-form';

import CustomTextInput from '../../components/CustomTextInput';

import TodoInputForm from './components/TodoInput';
import styles from './styles';
import TodoListing from './components/TodoList';
import { TODO_TEXT_FIELD, FORM_NAME } from './fieldFormName';

function TodoList({ onToggleComplete, onDelete, handleSubmit }) {
  return (
    <View style={styles.container}>
      <Field name={TODO_TEXT_FIELD} component={CustomTextInput} returnType="submit" bottomBorder />
      <TodoListing onToggleComplete={onToggleComplete} onDelete={onDelete} />
    </View>
  );
}

export default reduxForm({
  form: FORM_NAME
})(TodoList);
