import React from 'react';
import { Link } from 'react-router-dom';
import { GO_BACK } from './strings';
import PropTypes from 'prop-types';
import BookDetails from './components/BookDetails';
import './styles.css';

export default function Book(props) {
  return (
    <div>
      <Link to={`/dashboard`} className="go-back">
        {GO_BACK}
      </Link>
      <BookDetails book={props.book} />
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
