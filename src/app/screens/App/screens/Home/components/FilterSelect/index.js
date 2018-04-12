import React from 'react';
import { AUTHOR, TITLE, SELECTFILTER } from '../../strings';
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
        {SELECTFILTER}
      </option>
      <option value="author">{AUTHOR}</option>
      <option value="title">{TITLE}</option>
    </select>
  );
}
