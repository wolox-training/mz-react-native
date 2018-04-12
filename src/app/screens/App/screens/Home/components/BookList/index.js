import React from 'react';
import Book from '../Book';
import './styles.css';

export default function BookList(props) {
  return (
    <div className="booklist">
      {props.books.map(book => <Book key={book.id} book={book} />)}
    </div>
  );
}
