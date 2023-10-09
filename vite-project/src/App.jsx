import { useEffect }from 'react'


// 9e8d5592

const API_URL = 'http://www.omdbapi.com?apikey=9e8d5592';

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
      <h1>Hello World</h1>
    </div>
  )
}

export default App




