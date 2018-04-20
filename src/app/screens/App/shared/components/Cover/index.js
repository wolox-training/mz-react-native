import React from 'react';
import defaultBookImage from '../../../../../../assets/ASSETS/default_book.svg';
import { BOOK_COVER_ALT_TEXT } from '../../strings';
import './styles.css';
import PropTypes from 'prop-types';

export default function Cover({ image, size }) {
  const image_url = image || defaultBookImage;

  return (
    <div className={`cover-container ${image ? '' : 'backgroundgray'} ${size}`}>
      <img
        className={`${image ? 'book-image' : 'default-image'} ${size}`}
        src={image_url}
        alt={BOOK_COVER_ALT_TEXT}
      />
    </div>
  );
}

Cover.defaultProps = {
  size: 'small'
};

Cover.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string
};
