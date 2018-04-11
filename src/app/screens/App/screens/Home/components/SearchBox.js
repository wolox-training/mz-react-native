import React from 'react';
import './SearchBox.css';

export default function SearchBox(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        name="searchText"
        onChange={props.onChange}
        placeholder="Buscar..."
        className="search"
      />
      <img
        src="assets/ASSETS/search.svg"
        alt="Search"
        className="search-image"
      />
    </div>
  );
}
