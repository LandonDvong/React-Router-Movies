import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


const SavedList = props => (
  
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>

    ))}
    <div className="home-button">Home</div>
<NavLink className ="home-link" to="/MovieList">
  Home
</NavLink>
</div>
);

export default SavedList;