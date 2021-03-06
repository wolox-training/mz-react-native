import React from 'react';
import { SEARCH, SEARCH_BUTTON_ALT_TEXT } from '../../strings';
import './styles.css';
import Icon from '../../../../../../../assets/ASSETS/search.svg';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        name="searchText"
        onChange={onChange}
        placeholder={SEARCH}
        className="search"
      />
      <img src={Icon} alt={SEARCH_BUTTON_ALT_TEXT} className="search-image" onClick={onSearch} />
    </div>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
