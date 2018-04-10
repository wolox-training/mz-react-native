import React, { Component } from "react";
import books from "../../../../../data/books.json";
import Book from "./components/Book";

class Home extends Component {
  render() {
    return <Book />;
  }
}

export default Home;
