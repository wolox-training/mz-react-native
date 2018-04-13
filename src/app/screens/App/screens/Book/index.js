import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import books from '../../../../../data/books.json';
import { GO_BACK } from './strings';
import './styles.css';

class Book extends Component {
  render() {
    const bookID = parseInt(this.props.match.params.id, 10);
    const book = books.find(book => book.id === bookID);

    return (
      <div className="book">
        <Link to={`/dashboard`}>{GO_BACK}</Link>
        <h1>{book.title}</h1>
      </div>
    );
  }
}

export default Book;
