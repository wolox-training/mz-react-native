import { connect } from 'react-redux';
import React, { Component } from 'react';
import Home from './layout';
import filterOptions, { defaultFilterOption } from './filterOptions';
import { actionCreators } from '../../../../../Redux/books/actions';

class HomeContainer extends Component {
  state = {
    filteredBooks: [],
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

  handleSearch = () => {
    const filterFields =
      this.state.filterField === defaultFilterOption
        ? filterOptions.map(filterOption => filterOption.value)
        : [this.state.filterField];
    const filteredBooks = this.state.books.filter(book =>
      filterFields.some(filterField => {
        const bookProperty = book[filterField];
        const lowerCaseBookProperty = bookProperty.toLowerCase();
        const lowerCaseSearchedText = this.state.searchText.toLowerCase();
        return lowerCaseBookProperty.search(lowerCaseSearchedText) !== -1;
      })
    );

    this.setState({ filteredBooks });
  };

  componentDidMount() {
    this.props.dispatch(actionCreators.getBooks());
  }

  render() {
    return (
      <Home
        onChange={this.handleInputChange}
        onSearch={this.handleSearch}
        books={this.props.books}
      />
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.get('books')
});

export default connect(mapStateToProps)(HomeContainer);
