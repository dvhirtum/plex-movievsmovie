import React from 'react';

const MovieCard = ({ movie, select }) => (
  <div
    className="card"
    role="button"
    onClick={e => select(movie, e)}
    onKeyPress={e => select(movie, e)}
    tabIndex="0"
  >
    <img className="card-img-top" src={movie.image} alt={movie.title} />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{movie.year}</h6>
    </div>
  </div>
);

export default MovieCard;
