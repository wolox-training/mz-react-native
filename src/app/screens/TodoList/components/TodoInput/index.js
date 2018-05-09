import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { TextInput } from 'react-native';

import { actionCreators } from '../../../../../redux/toDos/actions';
import { FORM_NAME, TODO_TEXT_FIELD } from '../../fieldFormName';
import CustomTextInput from '../../../../components/CustomTextInput';

import styles from './styles';

const renderInput = ({ input: { onChange, ...restInput }, onSubmitEditing }) => (
  <TextInput onChangeText={onChange} {...restInput} onSubmitEditing={onSubmitEditing} />
);

function TodoInputForm(props) {
  const { handleSubmit } = props;
  return (
    <Field
      name={TODO_TEXT_FIELD}
      component={CustomTextInput}
      onSubmitEditing={handleSubmit(submit)}
      bottomBorder
    />
  );
}

export default reduxForm({
  form: FORM_NAME
})(TodoInputForm);

const submit = values => {
  console.warn('submitting form', values);
};

/* const submit = props => {
  console.warn(props);
  //  const action = actionCreators.createTodo(values[TODO_TEXT_FIELD]);
  // dispatch(action);
  // dispatch(reset(FORM_NAME));
};
*/
