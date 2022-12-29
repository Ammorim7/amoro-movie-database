import styles from './Movie.module.css';
import stylesHome from './Home.module.css'

import Card from '../Card'
import FetchContent from '../FetchContent.js'

import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY
const urlMovie = process.env.REACT_APP_API_MOVIE
const poster = "https://image.tmdb.org/t/p/w300/"

function Movie(){
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])

    function getDate() {
        if(movie.release_date !== undefined) {
            const date = movie.release_date
            const ano = date.substring(4, 0)
            const mes = date.substring(5, 7)
            const dia = date.substring(8, 10)
    
            return `${dia}/${mes}/${ano}`
        }
    }

    useEffect(() => {
        async function getContent(){
            const mv = await FetchContent(`${urlMovie}${id}?${apiKey}`)
            setMovie(mv)

            const rv = await FetchContent(`${urlMovie}${id}/reviews?${apiKey}`)
            setReviews(rv.results)

            const sm = await FetchContent(`${urlMovie}${id}/similar?${apiKey}`)
            setSimilarMovies(sm.results)
        }
        getContent()
    }, [id])

    return <div id={styles.movieContainer}>
        <section id={styles.heroContainer}>
            <div id={styles.hero}>
                <div className={styles.divPoster}>
                    <img src={poster + movie.poster_path} alt={poster.title} /> 
                </div>
                <div className={styles.about}>
                    <div className={styles.aboutTitle}>
                        <h1>{movie.title}</h1>
                        <h3>{movie.original_title}</h3>
                        <h4>{movie.tagline}</h4>
                    </div>

                    <div className={styles.aboutInfo}>
                        <div id={styles.sinopse}>
                            <h3>Sinopse:</h3>
                            {movie.overview ? <p>movie.overview</p> : <p>Este filme não possui uma sinopse cadastrada.</p>}
                        </div>
                        
                        <div id={styles.outrasInfos}>
                            <div className={styles.infos}>
                                <h3>Gênero:</h3>
                                {movie.genres ? movie.genres.map(genero => <span key={genero.id}>{genero.name} </span>) : <p>Carregando...</p>}
                            </div>

                            <div className={styles.infos}>
                                <h3>Nota dos usuários:</h3>
                                <p>{movie.vote_average}</p>
                            </div>

                            <div className={styles.infos}>
                                <h3>Data de lançamento:</h3>
                                <p>{getDate()}</p>
                            </div>

                        <div className={styles.infos}>
                            <h3>Duração:</h3>
                            <p>{movie.runtime}min</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <section id={styles.reviewsContainer}>
            <h1>Reviews</h1>
            <div className={styles.reviews}>
                {reviews.length > 0 ? reviews.map(review => <article key={review.id}><h3>{review.author}</h3><p>{review.content}</p></article>) : <p>Este filme ainda não possui reviews.</p>}
            </div>
        </section>
        <section id={styles.similarContainer}>
            <h1>Similares</h1>
            <div className={stylesHome.gradeArea}>
                {similarMovies.length > 0 ? similarMovies.map(movie => <Card key={movie.id} object={movie}/>) : <p>Carregando...</p>}
            </div>
        </section>
    </div>
}

export default Movie;