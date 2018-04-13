import React from 'react';
import { AUTHOR, TITLE, SELECT_FILTER, ALL } from '../../strings';
import './styles.css';
import PropTypes from 'prop-types';

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
      <option value="everything">{ALL}</option>
    </select>
  );
}

FilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};
