import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RENT, LOREM_IPSUM } from '../../strings';
import './styles.css';

class BookDetails extends Component {
  render() {
    return (
      <div className="book-container">
        <img src={this.props.book.image_url} className="book-image" />
        <div className="book-details">
          <span className="title">{this.props.book.title}</span>
          <span className="author"> {this.props.book.author}</span>
          <span className="year">{this.props.book.year}</span>
          <span className="genre">{this.props.book.genre}</span>
          <span className="desc">{this.props.book.desc || LOREM_IPSUM}</span>
          <button className="rent-button">{RENT}</button>
        </div>
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
    desc: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};
