import styles from './Popular.module.css'
import {useState, useEffect} from 'react'

import Card from '../Card'
import FetchContent from '../FetchContent.js'

const apiKey = process.env.REACT_APP_API_KEY
const urlMovie = process.env.REACT_APP_API_MOVIE
const urlTv = process.env.REACT_APP_API_TV

function TopRated({midia}){
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [topRatedTvShows, setTopRatedTvShows] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getContent(){
            if(midia === "movie"){
                const trm = await FetchContent(`${urlMovie}top_rated?${apiKey}&page=${page}`)
                setTopRatedMovies([...topRatedMovies, ...trm.results])
            }
            else if (midia === "serie"){
                const trtvs = await FetchContent(`${urlTv}top_rated?${apiKey}&page=${page}`)
                setTopRatedTvShows([...topRatedTvShows, ...trtvs.results])
            }
        }
        getContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])

    return <div id={styles.page}>
        {midia === 'movie' ? <h1>Filmes mais bem avaliados</h1> : <h1>Series mais bem avaliadas</h1>}
        <section id={styles.grade}>
            {midia === 'movie' ? topRatedMovies.map(movie => <Card object={movie} key={movie.id}/>) : topRatedTvShows.map(serie => <Card object={serie} key={serie.id}/>)}
        </section>
        <button onClick={() => setPage(page+1)}>Carregar mais</button>
    </div>
}

export default TopRated;