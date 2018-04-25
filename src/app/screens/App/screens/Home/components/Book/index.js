import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../../../shared/components/Cover';
import './styles.css';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  return (
    <div className="book">
      <Link to={`/books/${book.get('id')}`}>
        <Cover image={book.get('image_url')} size="small" />
      </Link>
      <span className="book-title">{book.get('title')}</span>
      <span className="book-author">{book.get('author')}</span>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    desc: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};
