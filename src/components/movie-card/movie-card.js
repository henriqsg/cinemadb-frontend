import React from 'react';

function MovieCard(props) {
  return (
    <div className="MovieCard" class="col-xs-12 col-md-4">
      <img className="mw-100"
        src={props.img}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <span>{props.description}</span>
    </div>
  );
}

export default MovieCard;