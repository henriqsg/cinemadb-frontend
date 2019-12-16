import React from 'react';
import {
  NavLink,
} from "react-router-dom";
import './movie-card.css';

function MovieCard(props) {
  return (
    <div className="MovieCard col-12 col-md-4">
      <NavLink to={"/detail/" + props.id} >
        <img className="list-image mw-100 mb-3" src={'http://image.tmdb.org/t/p/w780' + props.imgUrl}/>
        <h3>{props.title}</h3>
      </NavLink>
    </div>
  );
}

export default MovieCard;