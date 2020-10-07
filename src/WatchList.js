import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData.json";

const WatchList = () => {
  const movies = MovieData.movies;

  const [isWatched, setIsWatched] = useState(false);

  //using the index of the movie in the movies array, we can use a hook to set a new value for isWatched
  const handleClick = (id) => {
    //can use the same array that we're getting our data from
    movies[id].isWatched = !movies[id].isWatched;
    //can set just this property in the array
    setIsWatched(movies[id].isWatched);
    console.log("movie index #", id);
    console.log("is watched?", movies[id].isWatched);
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
