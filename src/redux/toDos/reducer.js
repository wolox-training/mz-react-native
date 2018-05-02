import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  toDos: [],
  maxID: 1
};

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.DELETE_TODO:
      return state.merge({ toDos: state.toDos.filter(toDo => toDo.id !== action.id) });
    case actions.TOGGLE_TODO_COMPLETE:
      return state.merge({
        toDos: state.toDos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      });
    case actions.CREATE_TODO:
      const newID = state.maxID + 1;
      return state.merge({
        toDos: state.toDos.concat({ id: newID, completed: false, text: action.text }),
        maxID: newID
      });
    default:
      return state;
  }
}
