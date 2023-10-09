import { useEffect }from 'react'
import './App.scss';
import SeacrhIcon from './search.svg';

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


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

useEffect(() => {
  searchMovies('batman');
}, []);

  return (
    <div>
      <div className='app'>
        <h1>MOVIE-LAND</h1>

        <div className="search">
          <input placeholder='Search for movies' value={'batman'} onChange={() => {

          }} 
          />
          <img src={SeacrhIcon} alt='search icon'
           onClick={() => {

           }}
           />
        </div>
        <div className="container">

        </div>
      </div>
    </div>
  )
}

export default App




