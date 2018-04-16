import React from 'react';
import defaultBookImage from '../../../../../../assets/ASSETS/default_book.svg';
import { BOOK_COVER_ALT_TEXT } from '../../strings';
import './styles.css';
import PropTypes from 'prop-types';

export default function Cover(props) {
  const has_image = props.image;
  const image_url = props.image || defaultBookImage;

  return (
    <div
      className={`cover-container ${has_image ? '' : 'backgroundgray'} ${
        props.size
      }`}
    >
      <img
        src={image_url}
        className={`${has_image ? 'book-image' : 'default-image'} ${
          props.size
        }`}
        alt={BOOK_COVER_ALT_TEXT}
      />
    </div>
  );
}

Cover.propTypes = {
  image: PropTypes.string,
  size: PropTypes.oneOf(['small', 'big']).isRequired
};
