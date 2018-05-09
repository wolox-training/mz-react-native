import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import { actionCreators } from '../../../redux/toDos/actions';

import styles from './styles';
import TodoList from './layout';
import { TODO_TEXT_FIELD, FORM_NAME } from './fieldFormName';

class TodoListContainer extends React.Component {
  handleToggleComplete = id => {
    const action = actionCreators.toggleToDoComplete(id);
    this.props.dispatch(action);
  };

  handleDelete = id => {
    const action = actionCreators.delete(id);
    this.props.dispatch(action);
  };

  handleSubmit = values => {
    const action = actionCreators.createTodo(values[TODO_TEXT_FIELD]);
    this.props.dispatch(action);
    this.props.dispatch(reset(FORM_NAME));
  };

  render() {
    return (
      <TodoList
        onToggleComplete={this.handleToggleComplete}
        onDelete={this.handleDelete}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect()(TodoListContainer);
