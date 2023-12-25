import {Routes,Route} from 'react-router-dom'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MoviesDetails from '../MoviesDetails/MoviesDetails';
import Search from '../Search/Search';
function CustomRoutes(){
      return (
        <Routes>
            <Route path="/" element ={<MoviesContainer/>}/>
            <Route path="/movie/:id/:pageNo" element ={<MoviesDetails/>}/>
            <Route path='/:movieName' element ={<Search/>}></Route>
        </Routes>
      )
}
export default CustomRoutes;