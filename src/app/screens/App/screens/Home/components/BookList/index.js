import React from 'react';
import Book from '../Book';
import PropTypes from 'prop-types';
import './styles.css';

export default function BookList(props) {
  return (
    <div className="booklist">
      {props.books.map(book => <Book key={book.id} book={book} />)}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};
