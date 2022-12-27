import './App.css';
import Home from './components/pages/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Movie from './components/pages/Movie.js';
import Popular from './components/pages/Popular.js';
import Serie from './components/pages/Serie.js';
import TopRated from './components/pages/TopRated.js';
import NowPlaying from './components/pages/NowPlaying';
import Search from './components/pages/Search';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:id' element={<Movie />}/>
        <Route path='/movie' element={<Popular midia='movie'/>}/>
        <Route path='/movie/toprated' element={<TopRated midia='movie'/>}/>
        <Route path='/movie/nowplaying' element={<NowPlaying midia='movie'/>}/>
        <Route path='/serie/:id' element={<Serie />}/>
        <Route path='/serie' element={<Popular midia='serie'/>}/>
        <Route path='/serie/toprated' element={<TopRated midia='serie'/>}/>
        <Route path='/serie/nowplaying' element={<NowPlaying midia='serie'/>}/>
        <Route path='search' element={<Search />}/>
      </Routes>
    <Footer />
    </Router>
  )
}

export default App;
