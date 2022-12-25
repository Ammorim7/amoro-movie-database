import styles from './Home.module.css'

import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Card from '../Card'
import FetchContent from '../FetchContent.js'

const apiKey = process.env.REACT_APP_API_KEY
const urlMovie = process.env.REACT_APP_API_MOVIE
const urlTv = process.env.REACT_APP_API_TV

function Home(){
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [popularTvShows, setPopularTvShows] = useState([])


    useEffect(() => {
        async function getContent(){
            const npm = await FetchContent(`${urlMovie}now_playing?${apiKey}`)
            setNowPlayingMovies(npm.results);
    
            const pm = await FetchContent(`${urlMovie}popular?${apiKey}`)
            setPopularMovies(pm.results)
    
            const ptvs = await FetchContent(`${urlTv}popular?${apiKey}`)
            setPopularTvShows(ptvs.results)
        }
        getContent()
    }, [])

    return <div id={styles.home}>
        <section id={styles.hero}>
            <h1>Bem vindo(a) ao Amoro Movie Database</h1>
            <h2>Aqui você encontrará informações sobre diversos filmes e séries.</h2>
        </section>

        <section className={styles.grade}>
            <div>
                <h1>Filmes em cartaz</h1>
                <h4><Link to='/amoro-movie-database/movie/nowplaying' midia='movie'>Ver mais</Link></h4>
            </div>
            <div className={styles.gradeArea}>
                {nowPlayingMovies.length > 0 ? (nowPlayingMovies.slice(0,10).map(movie => <Card object={movie} key={movie.id}/>)) : <p>Carregando...</p>}
            </div>
        </section>

        <section className={styles.grade}>
            <div>
                <h1>Filmes populares</h1>
                <h4><Link to='/amoro-movie-database/movie' midia='movie'>Ver mais</Link></h4>
            </div>
            <div className={styles.gradeArea}>
                {popularMovies.length > 0 ? popularMovies.slice(0,10).map(movie => <Card object={movie} key={movie.id}/>) : <p>Carregando...</p>}
            </div>
        </section>

        <section className={styles.grade}>
            <div>
                <h1>Séries populares</h1>
                <h4><Link to='/amoro-movie-database/movie' midia='serie'>Ver mais</Link></h4>
            </div>
            <div className={styles.gradeArea}>
                {popularTvShows.length > 0 ? popularTvShows.slice(0,10).map(serie => <Card object={serie} key={serie.id}/>) : <p>Carregando...</p>}
            </div>
        </section>
    </div>  
}

export default Home;