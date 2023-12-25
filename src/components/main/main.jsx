import { useState } from 'react';
import Search from '../Search/Search';
import './main.css';
import { Link } from 'react-router-dom';
function Main() {
  const [movieName, setMovieName] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='Main'>
      <div className='main'>
        <input
          className='search_input'
          type="text"
          placeholder="Write a movie name ..."
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
       <Link to={`/${movieName}`}>
        <button
          className='search-btn'
          // onClick={() => {
          //   <Search movieName = {movieName}/>
          //   // Set the state to show the Search component
          //   setShowSearch(true);
          // }}
        >
          Search
        </button>
        </Link>
        <button className='filter-btn'>Filter</button>
        <button className='fav-btn'>Favourite</button>

        {/* Conditionally render the Search component based on state */}
        {showSearch && <Search movieName={movieName} />}
      </div>
    </div>
  );
}

export default Main;
