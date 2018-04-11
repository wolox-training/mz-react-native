import React from 'react';
import { SEARCH, SEARCHBUTTONALTTEXT } from '../strings';
import './SearchBox.css';
import Icon from '../../../../../../assets/ASSETS/search.svg';

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
      <img src={Icon} alt={SEARCHBUTTONALTTEXT} className="search-image" />
    </div>
  );
}
