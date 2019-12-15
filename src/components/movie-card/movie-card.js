import React from 'react';
import {
  NavLink,
} from "react-router-dom";

function MovieCard(props) {
  return (
    <div className="MovieCard col-12 col-md-4 mb-5">
      <NavLink to={props.detailUrl} >
        <img className="mw-100 mb-3"
          src={props.img}
          alt={props.name}
        />
      </NavLink>
      <h3>{props.name}</h3>
      <span>{props.description}</span>
    </div>
  );
}

export default MovieCard;