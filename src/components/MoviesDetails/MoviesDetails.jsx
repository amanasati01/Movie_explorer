
import { useParams } from 'react-router-dom';
import './MoviesDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const API_KEY = '7a1b5e8ec1880d90f2f5f29f67657e6a';
function MoviesDetails() {
  const [movieData, setMovieData] = useState([]);
  const { id,pageNo } = useParams();
  console.log(id);

  async function downloadInfo() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&page=${pageNo}`);
      setMovieData(response.data.results);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }

  useEffect(() => {
    downloadInfo();
  }, []); // Include an empty dependency array to run the effect only once when the component mounts
//    console.log(movieData);
  return (
    <div>
      {movieData.map((movie) => {
        if (movie.id == id) {
          return (
            <div  key={movie.id}>
            <div className='whole'>
              <img
                 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className='image'
              />
              <div className='details'>
              <h1 className='title'
              // style={{background:'green'}} 
              >NAME : {movie.title}</h1>
              <h2 
              // style={{color:'red'}}
              >overview : </h2>
              <p 
              // style={{backgroundColor:'red', color:'white'}}
              >{movie.overview}</p>
              <h3 
              // style={{color:'blue'}}
              >Release date :</h3>
              <p 
              // style={{backgroundColor :'blue'}}
              >{movie.release_date}</p>
              <h4 
              // style={{color:'orange'}}
              >Language :</h4>
              <p 
              // style={{backgroundColor:'orange'}}
              >{movie.original_language}</p>
              <h4 
              // style={{color:'pink'}}
              >Average vote :</h4>
              <p 
              // style={{backgroundColor:'pink'}}
              >{movie.vote_average}</p>
              <h4 
              // style={{color:'white'}}
              >Vote count :</h4>
              <p 
              // style={{color:'orange'}}
              >{movie.vote_count}</p>

              </div>
             
            </div>
            </div>
          );
        } else {
          return null; // return null if the movie id doesn't match
        }
      })}
      </div>
    
  );
}

export default MoviesDetails;