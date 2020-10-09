import React from "react";
import WatchList from "./WatchList";
import "../src/styles.css";
import MovieData from "./MovieData.json";

export default function App() {
  return <WatchList {...MovieData} />;
}
