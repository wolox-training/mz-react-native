import Immutable from 'seamless-immutable';
import { actions } from './actions';

const defaultState = { books: [], currentBook: {} };

export default function reducer(state = Immutable.Map(defaultState), action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return state.merge({ books: action.payload.data });
    case actions.GET_BOOKS_FAILURE:
      console.error(action.payload.err);
      return state;
    case actions.GET_BOOK_SUCCESS:
      return state.merge({ currentBook: action.payload.data });
    case actions.GET_BOOK_FAILURE:
      console.error(action.payload.err);
      return state;
    case actions.CLEAR_BOOK:
      return state.merge({ currentBook: {} });
    default:
      return state;
  }
}
