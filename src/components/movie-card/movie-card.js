import React from 'react';
import {
  NavLink,
} from "react-router-dom";

function MovieCard(props) {
  return (
    <div className="MovieCard col-12 col-md-4 mb-5">
      {/* <NavLink to={props.detailUrl} >
        <img className="mw-100 mb-3"
          src={props.img}
          alt={props.title}
        />
      </NavLink> */}
      <div className="container">
        <img className="mw-100 mb-3" src={'http://image.tmdb.org/t/p/w780' + props.imgUrl}/>
      </div>
      <h3>{props.title}</h3>
      <span>{props.overview}</span>
    </div>
  );
}

export default MovieCard;