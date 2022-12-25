import styles from './Popular.module.css'
import {useState, useEffect} from 'react'

import Card from '../Card'
import FetchContent from '../FetchContent.js'

const apiKey = process.env.REACT_APP_API_KEY
const urlMovie = process.env.REACT_APP_API_MOVIE
const urlTv = process.env.REACT_APP_API_TV

function Popular({midia}){
    const [popularMovies, setPopularMovies] = useState([])
    const [popularTvShows, setPopularTvShows] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getContent(){
            if(midia === "movie"){
                const pm = await FetchContent(`${urlMovie}popular?${apiKey}&page=${page}`)
                setPopularMovies([...popularMovies, ...pm.results])
            }
            else if (midia === "serie"){
                const ptvs = await FetchContent(`${urlTv}popular?${apiKey}&page=${page}`)
                setPopularTvShows([...popularTvShows, ...ptvs.results])
            }
        }
        getContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])

    return <div id={styles.page}>
        {midia === 'movie' ? <h1>Filmes mais populares</h1> : <h1>Series mais populares</h1>}
        <section id={styles.grade}>
            {midia === 'movie' ? popularMovies.map(movie => <Card object={movie} key={movie.id}/>) : popularTvShows.map(serie => <Card object={serie} key={serie.id}/>)}
        </section>
        <button onClick={() => setPage(page+1)}>Carregar mais</button>
    </div>
}

export default Popular;