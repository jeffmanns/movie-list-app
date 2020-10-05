import React from "react";

export class MovieCard extends React.Component {
  render() {
    const title = this.props.title;
    const category = this.props.category;
    const duration = this.props.duration;
    const rating = this.props.rating;
    const photoURL = this.props.photoURL;

    return (
      <div className="movie-container">
        <h1 className="movie-container-header">{title}</h1>
        <div className="movie-container-body">
          <div className="movie-poster-photo">
            <img src={photoURL} alt="movie poster" />
          </div>
          <div className="movie-details">
            <h2>{category}</h2>
            <p>Duration: {duration} minutes</p>
            <p>Rating: {rating}</p>
          </div>
        </div>
        <div className="movie-container-footer">
          <button onClick={this.props.onClick}>Is it working??</button>
        </div>
      </div>
    );
  }
}
