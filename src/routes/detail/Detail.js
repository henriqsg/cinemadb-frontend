import React, { Component } from "react";
import SearchBar from '../../components/search-bar/search-bar.js';
import MovieDetail from '../../components/movie-detail/movie-detail.js';
import './Detail.css';

function Detail(props) {
  return (
    <div className="Detail container-fluid">
      <MovieDetail movieId={props.match.params.id}/>
    </div>
  );
}

export default Detail;
