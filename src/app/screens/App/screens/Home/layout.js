import React from 'react';
import BookList from './components/BookList';
import FilterSelect from './components/FilterSelect';
import SearchBox from './components/SearchBox';
import PropTypes from 'prop-types';
import './styles.css';

export default function Home(props) {
  return (
    <div className="home">
      <div className="filters-container">
        <FilterSelect onChange={props.onChange} />
        <SearchBox onChange={props.onChange} onSearch={props.onSearch} />
      </div>
      <BookList books={props.books} />
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
