import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/toDos/actions';

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

  render() {
    return <TodoList onToggleComplete={this.handleToggleComplete} onDelete={this.handleDelete} />;
  }
}

export default connect()(TodoListContainer);
