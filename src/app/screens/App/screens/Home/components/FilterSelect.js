import React from "react";
import styles from "./FilterSelect.css";

export default function FilterSelect(props) {
  return (
    <select
      name="filterField"
      onChange={props.onChange}
      className="filter-select"
    >
      <option disabled selected hidden value="">
        Seleccionar filtro
      </option>
      <option value="author">Author</option>
      <option value="title">Title</option>
    </select>
  );
}
