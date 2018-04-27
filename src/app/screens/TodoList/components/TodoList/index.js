import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Todo from '../Todo';

function TodoList(props) {
  return <View>{props.toDos.map(toDo => <Todo toDo={toDo} key={toDo.id} />)}</View>;
}

const mapStateToProps = state => ({
  toDos: state.toDos.toDos
});

export default connect(mapStateToProps)(TodoList);
