import React, {useState} from "react";
import WatchList from "./WatchList";

const MovieLists = (props) => {
const movies = props.movies;

const [isWatched, setIsWatched] = useState(false);

const handleClick = (id) => {
  const newMovieArray = [...movies];
  newMovieArray[id].isWatched = !movies[id].isWatched;
  setIsWatched(newMovieArray);
  console.log(newMovieArray);
  console.log(id);
};

    return null;
}

export default MovieLists;