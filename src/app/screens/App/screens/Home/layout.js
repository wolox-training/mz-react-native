import React from 'react';
import BookList from './components/BookList';
import FilterSelect from './components/FilterSelect';
import SearchBox from './components/SearchBox';
import PropTypes from 'prop-types';
import NavBar from '../../shared/components/NavBar';
import './styles.css';

export default function Home(props) {
  return (
    <NavBar>
      <div className="home">
        <div className="filters-container">
          <FilterSelect onChange={props.onChange} />
          <SearchBox onChange={props.onChange} onSearch={props.onSearch} />
        </div>
        <BookList books={props.books} />
      </div>
    </NavBar>
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
