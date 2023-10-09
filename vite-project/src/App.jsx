import { useState, useEffect }from 'react'
import './App.scss';
import SeacrhIcon from './search.svg';
import MovieCard  from './MovieCard';

// 9e8d5592

const API_URL = 'http://www.omdbapi.com?apikey=9e8d5592';


const Movies = {
  "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  "Year": "2016",
  "imdbID": "tt18689424",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

const App = () => {
 const [movies, setMovies] = useState([])
 const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
  searchMovies('spiderman');
}, []);

  return (
    <div>
      <div className='app'>
        <h1>MOVIE-LAND</h1>

        <div className="search">
          <input placeholder='Search for movies' value={searchTerm} onChange={(e) => {
           setSearchTerm(e.target.value)
          }} 
          />
          <img src={SeacrhIcon} alt='search icon'
           onClick={() => searchMovies(searchTerm)} />
        </div>

        <div className="container">
  {movies?.length > 0 ? (
    movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))
  ) : (
    <div className="empty">
      <h2>No Movies were found</h2>
    </div>
  )}
</div>

      </div>
    </div>
  )
}

export default App




