import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { TextInput } from 'react-native';

import { actionCreators } from '../../../../../redux/toDos/actions';
import { FORM_NAME, TODO_TEXT_FIELD } from '../../fieldFormName';

import styles from './styles';

const renderInput = ({ input: { onChange, ...restInput }, onSubmitEditing }) => (
  <TextInput onChangeText={onChange} {...restInput} onSubmitEditing={onSubmitEditing} />
);

function TodoInputForm(props) {
  const { handleSubmit } = props;
  return <Field name={TODO_TEXT_FIELD} component={renderInput} onSubmitEditing={handleSubmit(submit)} />;
}

export default reduxForm({
  form: FORM_NAME
})(TodoInputForm);

const submit = (values, dispatch) => {
  const action = actionCreators.createTodo(values[TODO_TEXT_FIELD]);
  dispatch(action);
  dispatch(reset(FORM_NAME));
};
