import React from "react";
import { WatchList } from "./WatchList";
import "../src/styles.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          category: "Drama",
          title: "Saving Private Ryan",
          duration: 170,
          rating: "R",
          photoURL:
            "https://images-na.ssl-images-amazon.com/images/I/51u0J5sgTXL._AC_.jpg",
          isWatched: false,
        },
        {
          category: "Comedy",
          title: "Talladega Nights: The Ballad of Ricky Bobby",
          duration: 108,
          rating: "PG-13",
          photoURL:
            "https://imagehost.vendio.com/bin/imageserver.x/00000000/comicod/talladeganightss.jpg",
          isWatched: false,
        },
        {
          category: "RomCom",
          title: "You've Got Mail",
          duration: 119,
          rating: "PG",
          photoURL:
            "https://images-na.ssl-images-amazon.com/images/I/51Fas4vPGcL._AC_.jpg",
          isWatched: false,
        },
        {
          category: "Documentary",
          title: "Icarus",
          duration: 121,
          rating: "PG-13",
          photoURL:
            "https://m.media-amazon.com/images/M/MV5BY2QyZWZjY2UtMTJjZS00YmFlLWJmM2QtZTczODc5MTFkYjQyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          isWatched: false,
        },
        {
          category: "BioPic",
          title: "Lincoln",
          duration: 150,
          rating: "PG-13",
          photoURL:
            "https://images-na.ssl-images-amazon.com/images/I/51Ywge5qTuL._AC_.jpg",
          isWatched: false,
        },
      ],
    };
  }

  handleClick(key) {
    const movies = this.state.movies;
    movies[key] = this.state.isWatched ? "Watched" : "Not Watched";
    this.setState({ isWatched: !this.state.isWatched });
  }

  render() {
    return (
      <WatchList
        movies={this.state.movies}
        onClick={(key) => this.handleClick(key)}
      />
    );
  }
}
