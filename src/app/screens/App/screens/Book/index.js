import React, { Component } from 'react';
import Book from './layout';
import { getBook } from '../../../../../service/service';

class BookContainer extends Component {
  state = { book: null };

  componentDidMount() {
    const bookID = parseInt(this.props.match.params.id, 10);
    getBook(bookID)
      .then(r => {
        this.setState({ book: r.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.book) {
      return <Book book={this.state.book} />;
    } else {
      return <span>404</span>;
    }
  }
}

export default BookContainer;
