import React from "react";
import "./SearchBox.css";

export default function SearchBox(props) {
  return (
    <input
      type="text"
      name="searchText"
      onChange={props.onChange}
      placeholder="Buscar..."
      className="search"
    />
  );
}
