import React, { Component } from "react";
import SearchBar from '../../components/search-bar/search-bar.js';
import MovieList from '../../components/movie-list/movie-list.js';
import './List.css';

function List() {
  return (
    <div className="List">
        <div className="container-fluid">
            <SearchBar />
            <MovieList/>
        </div>
    </div>
  );
}

export default List;
