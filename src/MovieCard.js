import React from "react";

const MovieCard = (props) => {
  const id = props.index;
  const title = props.title;
  const category = props.category;
  const duration = props.duration;
  const rating = props.rating;
  const photoURL = props.photoURL;

  const handleClick = (id) => {
    // const movies = this.movies;
    // movies[id] = this.state.isWatched ? "Watched" : "Not Watched";
    // this.setState({ isWatched: !this.state.isWatched });
    console.log(id);
  };

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
        <button onClick={() => handleClick({ id })}>Is it working??</button>
      </div>
    </div>
  );
};

export default MovieCard;
