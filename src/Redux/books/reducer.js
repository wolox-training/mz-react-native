import Immutable from 'immutable';
import { actions } from './actions';

const defaultState = { books: [] };

export default function reducer(state = Immutable.Map(defaultState), action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return state.merge({ books: action.payload.data });
    case actions.GET_BOOKS_FAILURE:
      console.error(action.payload.err);
      return state;
    default:
      return state;
  }
}
