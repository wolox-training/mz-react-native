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
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Home
        onChange={this.handleInputChange}
        books={this.state.filteredBooks}
      />
    );
  }
}

export default HomeContainer;
