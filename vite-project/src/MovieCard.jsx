import React from "react";


const MovieCard = ({ Movies }) => {
  return (
<div className="movie">
    <div>
      <p>{Movies.Year}</p>
    </div>    
    <div>
      <img src={Movies.Poster !== 'N/A' ? Movies.Poster : 'https://via.placeholder.com/400'} alt={Movies.Title}/>
    </div>    
    <div>
      <span>{Movies.Type}</span>
      <h3>{Movies.Title}</h3>
    </div>
  </div>
  )
}

export default MovieCard
