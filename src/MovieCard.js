import React from "react";

const MovieCard = (props) => {
  const title = props.title;
  const category = props.category;
  const duration = props.duration;
  const rating = props.rating;
  const photoURL = props.photoURL;
  const isWatched = props.isWatched;

  return (
    <div className="movie-container">
      <h1 className="movie-container-header">{title}</h1>
      <div className="movie-container-body">
        <div className="movie-poster-photo">
          <img src={photoURL} alt="movie poster" />
        </div>
        <div className="movie-details">
          <h2>{category}</h2>
          <p>Duration: {duration} minutes</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
      <div className="movie-container-footer">
        {isWatched ? (
          <button onClick={() => props.onClick({ isWatched })}>Un-watch</button>
        ) : (
          <button onClick={() => props.onClick({ isWatched })}>Watch</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
