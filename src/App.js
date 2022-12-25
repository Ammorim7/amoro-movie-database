import './App.css';
import Home from './components/pages/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Movie from './components/pages/Movie.js';
import Popular from './components/pages/Popular.js';
import Serie from './components/pages/Serie.js';
import TopRated from './components/pages/TopRated.js';
import NowPlaying from './components/pages/NowPlaying';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/amoro-movie-database' element={<Home />}/>
        <Route path='/amoro-movie-database/movie/:id' element={<Movie />}/>
        <Route path='/amoro-movie-database/movie' element={<Popular midia='movie'/>}/>
        <Route path='/amoro-movie-database/movie/toprated' element={<TopRated midia='movie'/>}/>
        <Route path='/amoro-movie-database/movie/nowplaying' element={<NowPlaying midia='movie'/>}/>
        <Route path='/amoro-movie-database/serie/:id' element={<Serie />}/>
        <Route path='/amoro-movie-database/serie' element={<Popular midia='serie'/>}/>
        <Route path='/amoro-movie-database/serie/toprated' element={<TopRated midia='serie'/>}/>
        <Route path='/amoro-movie-database/serie/nowplaying' element={<NowPlaying midia='serie'/>}/>
      </Routes>
    <Footer />
    </Router>
  )
}

export default App;
