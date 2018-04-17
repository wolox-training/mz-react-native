import React, { Component } from 'react';
import books from '../../../../../data/books.json';
import Home from './layout';
import filterOptions, { defaultFilterOption } from './filterOptions';

class HomeContainer extends Component {
  state = {
    filteredBooks: books,
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
    const filteredBooks = books.filter(book =>
      filterFields.some(filterField => {
        const bookProperty = book[filterField];
        const lowerCaseBookProperty = bookProperty.toLowerCase();
        const lowerCaseSearchedText = this.state.searchText.toLowerCase();
        return lowerCaseBookProperty.search(lowerCaseSearchedText) !== -1;
      })
    );

    this.setState({ filteredBooks });
  };

  render() {
    return (
      <Home
        onChange={this.handleInputChange}
        onSearch={this.handleSearch}
        books={this.state.filteredBooks}
      />
    );
  }
}

export default HomeContainer;
