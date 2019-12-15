import React from 'react';

function MovieCard(props) {
  return (
    <div className="MovieCard col-xs-12 col-md-4 mb-5">
      <a
       target="_blank" 
       href={props.detailsUrl}
      >
        <img className="mw-100 mb-3"
          src={props.img}
          alt={props.name}
        />
      </a>
      <h3>{props.name}</h3>
      <span>{props.description}</span>
    </div>
  );
}

export default MovieCard;