import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  books
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
