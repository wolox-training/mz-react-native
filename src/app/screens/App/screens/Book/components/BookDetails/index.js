import React from 'react';
import PropTypes from 'prop-types';
import { RENT, LOREM_IPSUM } from '../../strings';
import Cover from '../../../../shared/components/Cover';
import './styles.css';

export default function BookDetails({ book }) {
  return (
    <div className="book-container">
      <Cover image={book.image_url} size="big" />
      <div className="book-details">
        <span className="title">{book.title}</span>
        <span className="author"> {book.author}</span>
        <span className="year">{book.year}</span>
        <span className="genre">{book.genre}</span>
        <span className="desc">{book.desc || LOREM_IPSUM}</span>
        <button className="rent-button">{RENT}</button>
      </div>
    </div>
  );
}

BookDetails.propTypes = {
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
