import { connect } from 'react-redux';
import React, { Component } from 'react';
import Book from './layout';
import { actionCreators } from '../../../../../Redux/books/actions';

class BookContainer extends Component {
  componentDidMount() {
    const bookID = parseInt(this.props.match.params.id, 10);
    this.props.dispatch(actionCreators.getBook(bookID));
  }

  componentWillUnmount() {
    this.props.dispatch(actionCreators.clearBook());
  }

  render() {
    if (this.props.book) {
      return <Book book={this.props.book} />;
    } else {
      return <span>404</span>;
    }
  }
}

const mapStateToProps = state => ({
  book: state.books.currentBook
});

export default connect(mapStateToProps)(BookContainer);
