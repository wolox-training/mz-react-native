import React, { Component } from 'react';
import books from '../../../../../data/books.json';
import Home from './layout';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: books
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearch() {
    const filteredBooks = books.filter(book => {
      const bookProperty = book[this.state.filterField];
      const lowerCaseBookProperty = bookProperty.toLowerCase();
      const lowerCaseSearchedText = this.state.searchText.toLowerCase();
      return lowerCaseBookProperty.search(lowerCaseSearchedText) !== -1;
    });
    this.setState({ filteredBooks });
  }

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
