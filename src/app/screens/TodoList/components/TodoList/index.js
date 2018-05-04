import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Todo from '../Todo';

function TodoList({ onToggleComplete, onDelete, toDos }) {
  return (
    <View>
      {toDos.map(toDo => (
        <Todo toDo={toDo} key={toDo.id} onToggleComplete={onToggleComplete} onDelete={onDelete} />
      ))}
    </View>
  );
}

const mapStateToProps = state => ({
  toDos: state.toDos.toDoList
});

export default connect(mapStateToProps)(TodoList);
