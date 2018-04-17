import React, { Component } from 'react';
import books from '../../../../../data/books.json';
import Book from './layout';

class BookContainer extends Component {
  render() {
    const bookID = parseInt(this.props.match.params.id, 10);
    const book = books.find(book => book.id === bookID);
    if (book) {
      return <Book book={book} />;
    } else {
      return <span>404</span>;
    }
  }
}

export default BookContainer;
