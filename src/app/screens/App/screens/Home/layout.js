import React from 'react';
import BookList from './components/BookList';
import FilterSelect from './components/FilterSelect';
import SearchBox from './components/SearchBox';
import './styles.css';

export default function Home(props) {
  return (
    <div className="home">
      <div className="filters-container">
        <FilterSelect onChange={props.onChange} />
        <SearchBox onChange={props.onChange} />
      </div>
      <BookList books={props.books} />
    </div>
  );
}
