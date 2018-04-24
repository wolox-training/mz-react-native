import { getBooks } from '../../service/service';

export const actions = {
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE',
  GET_BOOKS: 'GET_BOOKS'
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
  }
};

export const actionCreators = {
  getBooks() {
    return async dispatch => {
      dispatch({ type: actions.GET_BOOKS });
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
  }
};
