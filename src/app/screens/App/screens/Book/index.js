import React, { Component } from 'react';
import books from '../../../../../data/books.json';

class Book extends Component {
  render() {
    const bookID = parseInt(this.props.match.params.id, 10);
    const book = books.find(book => book.id === bookID);

    return <h1>{book.title}</h1>;
  }
}

export default Book;
