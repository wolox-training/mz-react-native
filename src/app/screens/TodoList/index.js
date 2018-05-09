import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/toDos/actions';

import styles from './styles';
import TodoList from './layout';

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
    console.warn('submitting form', values);
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
