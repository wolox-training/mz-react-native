import React from 'react';
import { BOOKCOVERALTTEXT } from '../../strings';
import './styles.css';
import defaultBookImage from '../../../../../../../assets/ASSETS/default_book.svg';

export default function Book(props) {
  const has_image = props.book.image_url;
  const image_url = props.book.image_url || defaultBookImage;

  return (
    <div key={props.book.id} className="book">
      <div
        className={`book-image-container ${has_image ? '' : 'backgroundgray'}`}
      >
        <img
          src={image_url}
          className={has_image ? 'book-image' : 'default-image'}
          alt={BOOKCOVERALTTEXT}
        />
      </div>
      <span className="book-title">{props.book.title}</span>
      <span className="book-author">{props.book.author}</span>
    </div>
  );
}
