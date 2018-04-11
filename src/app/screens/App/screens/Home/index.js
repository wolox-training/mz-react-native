import React, { Component } from "react";
import books from "../../../../../data/books.json";
import BookList from "./components/BookList";
import FilterSelect from "./components/FilterSelect";
import SearchBox from "./components/SearchBox";

class Home extends Component {
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
      <div>
        <FilterSelect onChange={this.handleInputChange} />
        <SearchBox onChange={this.handleInputChange} />
        <BookList books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default Home;
