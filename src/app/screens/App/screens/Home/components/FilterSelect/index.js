import React from 'react';
import { SELECT_FILTER, ALL } from '../../strings';
import filterOptions, { defaultFilterOption } from '../../filterOptions';
import './styles.css';
import PropTypes from 'prop-types';

export default function FilterSelect({ onChange }) {
  return (
    <select name="filterField" onChange={onChange} className="filter-select" defaultValue="">
      <option disabled hidden value="">
        {SELECT_FILTER}
      </option>
      {filterOptions.map(filterOption => (
        <option value={filterOption.value} key={filterOption.value}>
          {filterOption.text}
        </option>
      ))}
      <option value={defaultFilterOption}>{ALL}</option>
    </select>
  );
}

FilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};
