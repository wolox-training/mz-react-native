import React from 'react';
import Book from '../Book';
import PropTypes from 'prop-types';
import './styles.css';

export default function BookList({ books }) {
  return <div className="booklist">{books.map(book => <Book key={book.id} book={book} />)}</div>;
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      desc: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired
};
