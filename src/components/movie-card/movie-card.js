import React from 'react';
import {
  NavLink,
} from "react-router-dom";
import './movie-card.css';

function MovieCard(props) {
  return (
    <div className="MovieCard col-12 col-md-4">
      {/* <NavLink to={props.detailUrl} >
        <img className="mw-100 mb-3"
          src={props.img}
          alt={props.title}
        />
      </NavLink> */}
      
      <img className="list-image mw-100 mb-3" src={'http://image.tmdb.org/t/p/w780' + props.imgUrl}/>
      <h3>{props.title}</h3>
      <span>{props.overview}</span>
    </div>
  );
}

export default MovieCard;