import React from "react";
import "../src/styles.css";
import MovieData from "./MovieData.json";
import MovieLists from "./MovieLists";

export default function App() {
  return <MovieLists {...MovieData} />;
}
