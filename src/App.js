import React from "react";
import WatchList from "./WatchList";
import "../src/styles.css";
//import MovieData from "./MovieData.json";

export default function App() {
  return <WatchList />;
}

// const handleClick = (key) => {
//   const movies = this.state.movies;
//   movies[key] = this.state.isWatched ? "Watched" : "Not Watched";
//   this.setState({ isWatched: !this.state.isWatched });
// };
