import React from "react";

export default function BookList(props) {
  return props.books.map(book => <span>{book.id}</span>);
}
