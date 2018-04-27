import React from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomTextInput from '../../../../components/CustomTextInput';

import styles from './styles';

function InputText(props) {
  return (
    <CustomTextInput
      placeholder="Enter an item!"
      style={styles.fullWidth}
      bottomBorder
      {...props.input}
      onSubmitEditing={submit(props.input.value)}
    />
  );
}

submit = val => {
  // print the form values to the console
  console.warn(val);
};

function TodoInputForm(props) {
  return <Field name="todoText" component={InputText} />;
}

export default reduxForm({
  form: 'todoInput'
})(TodoInputForm);
