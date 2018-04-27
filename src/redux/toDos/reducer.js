import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  toDos: [{ text: 'primero', id: 1, completed: false }, { text: 'segundo', id: 2, completed: false }]
};

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return state.merge({ books: action.payload.data });
    case actions.TOGGLE_TODO_COMPLETE:
      return state.merge({
        toDos: state.toDos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      });
    default:
      return state;
  }
}
