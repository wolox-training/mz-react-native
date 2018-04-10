import React, { Component } from "react";
import books from "../../../../../data/books.json";

class Home extends Component {
  render() {
    return <div>{books.map(book => <span>{book.id}</span>)}</div>;
  }
}

export default Home;
