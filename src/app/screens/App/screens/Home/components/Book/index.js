import React from 'react';
import { Link } from 'react-router-dom';
import { BOOK_COVER_ALT_TEXT } from '../../strings';
import './styles.css';
import defaultBookImage from '../../../../../../../assets/ASSETS/default_book.svg';
import PropTypes from 'prop-types';

export default function Book(props) {
  const has_image = props.book.image_url;
  const image_url = props.book.image_url || defaultBookImage;

  return (
    <div className="book">
      <Link to={`/books/${props.book.id}`}>
        <div
          className={`book-image-container ${
            has_image ? '' : 'backgroundgray'
          }`}
        >
          <img
            src={image_url}
            className={has_image ? 'book-image' : 'default-image'}
            alt={BOOK_COVER_ALT_TEXT}
          />
        </div>
      </Link>
      <span className="book-title">{props.book.title}</span>
      <span className="book-author">{props.book.author}</span>
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
