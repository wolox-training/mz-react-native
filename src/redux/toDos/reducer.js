import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  toDoList: [],
  maxID: 1
};

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.DELETE_TODO:
      return state.merge({ toDoList: state.toDoList.filter(toDo => toDo.id !== action.id) });
    case actions.TOGGLE_TODO_COMPLETE:
      return state.merge({
        toDoList: state.toDoList.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      });
    case actions.CREATE_TODO:
      const newID = state.maxID + 1;
      return state.merge({
        toDoList: state.toDoList.concat({ id: newID, completed: false, text: action.text }),
        maxID: newID
      });
    default:
      return state;
  }
}
