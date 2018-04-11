import React, { Component } from "react";
import books from "../../../../../data/books.json";
import BookList from "./components/BookList";

class Home extends Component {
  render() {
    return <BookList books={books} />;
  }
}

export default Home;
