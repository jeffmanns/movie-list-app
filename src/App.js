import React from "react";
import WatchList from "./WatchList";
import "../src/styles.css";

export default function App() {
  return <WatchList />;
}

// const handleClick = (key) => {
//   const movies = this.state.movies;
//   movies[key] = this.state.isWatched ? "Watched" : "Not Watched";
//   this.setState({ isWatched: !this.state.isWatched });
// };
