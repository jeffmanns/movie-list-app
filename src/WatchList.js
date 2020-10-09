import React, { useState } from "react";
import MovieCard from "./MovieCard";

const WatchList = (props) => {
  const movies = props.movies;

  const [isWatched, setIsWatched] = useState(false);

  const handleClick = (id) => {
    const newMovieArray = [...movies];
    newMovieArray[id].isWatched = !movies[id].isWatched;
    setIsWatched(newMovieArray);
    console.log(newMovieArray);
    console.log(id);
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
                onClick={(id) => handleClick(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
