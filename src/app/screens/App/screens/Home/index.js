import { connect } from 'react-redux';
import React, { Component } from 'react';
import Home from './layout';
import filterOptions, { defaultFilterOption } from './filterOptions';
import { actionCreators } from '../../../../../Redux/books/actions';

class HomeContainer extends Component {
  state = {
    filterField: defaultFilterOption,
    searchText: ''
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  getFilteredBooks() {
    const filterFields =
      this.state.filterField === defaultFilterOption
        ? filterOptions.map(filterOption => filterOption.value)
        : [this.state.filterField];
    const filteredBooks = this.props.books.filter(book =>
      filterFields.some(filterField => {
        const bookProperty = book.get(filterField);
        const lowerCaseBookProperty = bookProperty.toLowerCase();
        const lowerCaseSearchedText = this.state.searchText.toLowerCase();
        return lowerCaseBookProperty.search(lowerCaseSearchedText) !== -1;
      })
    );

    return filteredBooks;
  }

  handleSearch = () => {
    this.filterBooks();
  };

  componentDidMount() {
    this.props.dispatch(actionCreators.getBooks());
  }

  render() {
    const filteredBooks = this.getFilteredBooks(this.props.books);
    return (
      <Home onChange={this.handleInputChange} onSearch={this.handleSearch} books={filteredBooks} />
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.get('books')
});

export default connect(mapStateToProps)(HomeContainer);
