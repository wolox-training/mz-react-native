import React from 'react';
import Book from '../Book';

export default function BookList(props) {
  return props.books.map(book => <Book key={book.id} book={book} />);
}
