import React from "react";
import { MovieCard } from "./MovieCard";

export class WatchList extends React.Component {
  render() {
    const movies = this.props.movies;

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
                  title={movie.title}
                  category={movie.category}
                  duration={movie.duration}
                  rating={movie.rating}
                  photoURL={movie.photoURL}
                  onClick={() => this.props.onClick(key)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
