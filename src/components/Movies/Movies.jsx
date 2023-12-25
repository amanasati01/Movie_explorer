import axios from 'axios';
import { useEffect, useState } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

const API_KEY = '7a1b5e8ec1880d90f2f5f29f67657e6a';

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  async function downloadInfo() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&page=${pageNo}`);
      setMovieList((prevMovies) => [...prevMovies, ...response.data.results]);
      
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }

  useEffect(() => {
    downloadInfo();
  }, [pageNo]); // Include 'pageNo' in the dependency array to re-run the effect when 'pageNo' changes

  const handleNextPage = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
  };

  return (
    <div>
      {/* {console.log(movieList)} */}
      <div className='moviesContainer'>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}/${pageNo}`}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className='image'
                />
                <h2 className='movieTitle'>{movie.original_title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className='nextBtn' onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
}

export default Movies;
