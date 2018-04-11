import React from 'react';

export default function BookList(props) {
  return props.books.map(book => (
    <div key={book.id}>
      <span>{book.title}</span>
      <span>{book.author}</span>
    </div>
  ));
}
