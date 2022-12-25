import styles from './Popular.module.css'
import {useState, useEffect} from 'react'

import Card from '../Card'
import FetchContent from '../FetchContent.js'

const apiKey = process.env.REACT_APP_API_KEY
const urlMovie = process.env.REACT_APP_API_MOVIE
const urlTv = process.env.REACT_APP_API_TV

function NowPlaying({midia}){
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [onTheAirTvShows, setOnTheAirTvShows] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getContent(){
            if(midia === "movie"){
                const npm = await FetchContent(`${urlMovie}now_playing?${apiKey}&page=${page}`)
                setNowPlayingMovies([...nowPlayingMovies, ...npm.results])
            }
            else if (midia === "serie"){
                const otatvs = await FetchContent(`${urlTv}on_the_air?${apiKey}&page=${page}`)
                setOnTheAirTvShows([...onTheAirTvShows, ...otatvs.results])
            }
        }
        getContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])

    return <div id={styles.page}>
        {midia === 'movie' ? <h1>Filmes em cartaz</h1> : <h1>Series que estão passando na TV</h1>}
        <section id={styles.grade}>
            {midia === 'movie' ? nowPlayingMovies.map(movie => <Card object={movie} key={movie.id}/>) : onTheAirTvShows.map(serie => <Card object={serie} key={serie.id}/>)}
        </section>
        <button onClick={() => setPage(page+1)}>Carregar mais</button>
    </div>
}

export default NowPlaying;