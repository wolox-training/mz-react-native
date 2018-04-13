import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class BookDetails extends Component {
  render() {
    return (
      <div className="book">
        <span>{this.props.book.title}</span>
        <span>{this.props.book.author}</span>
        <span>{this.props.book.year}</span>
        <span>{this.props.book.genre}</span>
      </div>
    );
  }
}

export default BookDetails;

BookDetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};
