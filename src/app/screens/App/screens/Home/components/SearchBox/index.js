import React from 'react';
import { SEARCH, SEARCH_BUTTON_ALT_TEXT } from '../../strings';
import './styles.css';
import Icon from '../../../../../../../assets/ASSETS/search.svg';

export default function SearchBox(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        name="searchText"
        onChange={props.onChange}
        placeholder={SEARCH}
        className="search"
      />
      <img src={Icon} alt={SEARCH_BUTTON_ALT_TEXT} className="search-image" />
    </div>
  );
}
