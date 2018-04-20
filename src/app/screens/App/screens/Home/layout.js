import React from 'react';
import BookList from './components/BookList';
import FilterSelect from './components/FilterSelect';
import SearchBox from './components/SearchBox';
import PropTypes from 'prop-types';
import './styles.css';

export default function Home({ books, onSearch, onChange }) {
  return (
    <div className="home">
      <div className="filters-container">
        <FilterSelect onChange={onChange} />
        <SearchBox onChange={onChange} onSearch={onSearch} />
      </div>
      <BookList books={books} />
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      desc: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
