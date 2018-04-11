import React from "react";

export default function FilterSelect(props) {
  return (
    <select name="filterField" onChange={props.onChange}>
      <option disabled selected hidden value="">
        Seleccionar filtro
      </option>
      <option value="author">Author</option>
      <option value="title">Title</option>
    </select>
  );
}
