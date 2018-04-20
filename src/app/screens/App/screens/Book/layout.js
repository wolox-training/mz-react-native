import React from 'react';
import { Link } from 'react-router-dom';
import { GO_BACK } from './strings';
import PropTypes from 'prop-types';
import BookDetails from './components/BookDetails';
import Suggestions from './components/Suggestions';
import Comments from './components/Comments';
import './styles.css';

export default function Book({ book }) {
  return (
    <div>
      <Link to={`/dashboard`} className="go-back">
        {GO_BACK}
      </Link>
      <div className="book-info-container">
        <BookDetails book={book} />
        <Suggestions />
        <Comments />
      </div>
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
