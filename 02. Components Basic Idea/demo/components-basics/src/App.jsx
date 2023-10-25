import './App.css'
import MovieList from './components/MovieList';
import movies from './assets/movies';

function App() {

  return (
    <div>
      <h1>My first Dynamic React Application</h1>

      <MovieList  movies={movies} headingText="Movie List" secondaryText="Secondary text"/>
    </div>
  )
}

export default App
