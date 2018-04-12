import React from 'react';
import { AUTHOR, TITLE, SELECT_FILTER } from '../../strings';
import './styles.css';

export default function FilterSelect(props) {
  return (
    <select
      name="filterField"
      onChange={props.onChange}
      className="filter-select"
      defaultValue=""
    >
      <option disabled hidden value="">
        {SELECT_FILTER}
      </option>
      <option value="author">{AUTHOR}</option>
      <option value="title">{TITLE}</option>
    </select>
  );
}
