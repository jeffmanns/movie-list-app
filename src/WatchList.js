import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData.json";

const WatchList = (props) => {
  const movies = props.movies;

  const [isWatched, setIsWatched] = useState(false);

  const handleClick = (status) => {
    isWatched = status;
    setIsWatched(true);
    console.log(isWatched);
    console.log(movies);
  };

  return (
    <div className="watch-list-container">
      <div className="watch-list-title">
        <h1>Movies I want to watch</h1>
      </div>
      <div className="list-container">
        {movies.map((movie, key) => {
          return (
            <div key={key}>
              <MovieCard
                index={movie.index}
                title={movie.title}
                category={movie.category}
                duration={movie.duration}
                rating={movie.rating}
                photoURL={movie.photoURL}
                isWatched={movie.isWatched}
                onClick={() => handleClick(movie.isWatched)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
