import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '7a1b5e8ec1880d90f2f5f29f67657e6a';

function Search() {
  const { movieName } = useParams();
  const [movie, setMovie] = useState([]);

  async function downloadInfo() {
    try {
      console.log(movieName);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`
      );
      setMovie(response.data.results); // Assuming the movie data is in response.data
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }

  useEffect(() => {
    if (movieName) {
      downloadInfo();
    }
  }, [movieName]);

  // Render movie information
  return (
    <div style={{ color: 'white' }}>
      {movie.length > 0 ? (
        movie.map((m) => (
          <div key={m.id} className='whole'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              alt={m.title}
              className='image'
            />
            <div className='details'>
              <h1 className='title'>NAME: {m.title}</h1>
              <h2>Overview: </h2>
              <p>{m.overview}</p>
              <h3>Release date:</h3>
              <p>{m.release_date}</p>
              <h4>Language:</h4>
              <p>{m.original_language}</p>
              <h4>Average vote:</h4>
              <p>{m.vote_average}</p>
              <h4>Vote count:</h4>
              <p>{m.vote_count}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No movie found</p>
      )}
    </div>
  );
}

export default Search;
