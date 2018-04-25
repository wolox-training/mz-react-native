import { getBooks, getBook } from '../../service/service';

export const actions = {
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE',
  GET_BOOK_DETAILS: 'GET_BOOKS',
  GET_BOOK_DETAILS_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_DETAILS_FAILURE: 'GET_BOOK_FAILURE',
  GET_BOOK: 'GET_BOOK',
  CLEAR_BOOK: 'CLEAR_BOOK'
};

const privateActionCreators = {
  getBooksSuccess(data) {
    return {
      type: actions.GET_BOOKS_SUCCESS,
      payload: { data }
    };
  },
  getBooksFailure(err) {
    return {
      type: actions.GET_BOOKS_FAILURE,
      payload: { err }
    };
  },
  getBookSuccess(data) {
    return {
      type: actions.GET_BOOK_DETAILS_SUCCESS,
      payload: { data }
    };
  },
  getBookFailure(err) {
    return {
      type: actions.GET_BOOK_DETAILS_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  getBooks() {
    return async dispatch => {
      dispatch({ type: actions.GET_BOOK_DETAILS });
      try {
        const response = await getBooks();
        if (response.statusText === 'OK') {
          dispatch(privateActionCreators.getBooksSuccess(response.data));
        } else {
          throw new Error(response.problem);
        }
      } catch (e) {
        dispatch(privateActionCreators.getBooksFailure(e.message));
      }
    };
  },
  getBook(id) {
    return async dispatch => {
      dispatch({ type: actions.GET_BOOK });
      try {
        const response = await getBook(id);
        if (response.statusText === 'OK') {
          dispatch(privateActionCreators.getBookSuccess(response.data));
        } else {
          throw new Error(response.problem);
        }
      } catch (e) {
        dispatch(privateActionCreators.getBookFailure(e.message));
      }
    };
  },
  clearBook() {
    return { type: actions.CLEAR_BOOK };
  }
};
