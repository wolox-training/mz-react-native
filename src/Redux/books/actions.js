import { getBooks } from '../../service/service';

const privateActionCreators = {
  getBooksSuccess(data) {
    return {
      type: 'GET_BOOKS_SUCCESS',
      payload: { data }
    };
  },
  getBooksFailure(err) {
    return {
      type: 'GET_BOOKS_FAILURE',
      payload: { err }
    };
  }
};

export const actionCreators = {
  getBooks() {
    return async dispatch => {
      dispatch({ type: 'GET_BOOKS' });
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
