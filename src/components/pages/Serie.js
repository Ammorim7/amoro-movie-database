import styles from './Movie.module.css'
import stylesHome from './Home.module.css'

import Card from '../Card'
import FetchContent from '../FetchContent'

import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY
const urlSerie = process.env.REACT_APP_API_TV
const poster = "https://image.tmdb.org/t/p/w300/"

function Serie(){
    const [serie, setserie] = useState([])
    const {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [similarSeries, setsimilarSeries] = useState([])

    function getDate() {
        if(serie.first_air_date !== undefined) {
            const date = serie.first_air_date
            const ano = date.substring(4, 0)
            const mes = date.substring(5, 7)
            const dia = date.substring(8, 10)
    
            return `${dia}/${mes}/${ano}`
        }
    }

    useEffect(() => {
        async function getContent(){
            const mv = await FetchContent(`${urlSerie}${id}?${apiKey}`)
            setserie(mv)

            const rv = await FetchContent(`${urlSerie}${id}/reviews?${apiKey}`)
            setReviews(rv.results)

            const sm = await FetchContent(`${urlSerie}${id}/similar?${apiKey}`)
            setsimilarSeries(sm.results)
        }
        getContent()
    }, [id])

    return <div id={styles.serieContainer}>
        <section id={styles.heroContainer}>
            <div id={styles.hero}>
                <div className={styles.divPoster}>
                    <img src={poster + serie.poster_path} alt={poster.title} /> 
                </div>
                <div className={styles.about}>
                    <div className={styles.aboutTitle}>
                        <h1>{serie.name}</h1>
                        <h3>{serie.original_name}</h3>
                    </div>

                    <div className={styles.aboutInfo}>
                        <div id={styles.sinopse}>
                            <h3>Sinopse:</h3>
                            {serie.overview ? <p>serie.overview</p> : <p>Esta série não possui uma sinopse cadastrada.</p>}
                        </div>
                        
                        <div id={styles.outrasInfos}>
                            <div className={styles.infos}>
                                <h3>Gênero:</h3>
                                {serie.genres ? serie.genres.map(genero => <span key={genero.id}>{genero.name} </span>) : <p>Carregando...</p>}
                            </div>

                            <div className={styles.infos}>
                                <h3>Nota dos usuários:</h3>
                                <p>{serie.vote_average}</p>
                            </div>

                            <div className={styles.infos}>
                                <h3>Data de lançamento:</h3>
                                <p>{getDate()}</p>
                            </div>

                        <div className={styles.infos}>
                            <h3>Temporadas:</h3>
                            <p>{serie.number_of_seasons}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <section id={styles.reviewsContainer}>
            <h1>Reviews</h1>
            <div className={styles.reviews}>
                {reviews.length > 0 ? reviews.map(review => <article key={review.id}><h3>{review.author}</h3><p>{review.content}</p></article>) : <p>Esta série ainda não possui reviews.</p>}
            </div>
        </section>
        <section id={styles.similarContainer}>
            <h1>Similares</h1>
            <div className={stylesHome.gradeArea}>
                {similarSeries.length > 0 ? similarSeries.map(serie => <Card key={serie.id} object={serie}/>) : <p>Carregando...</p>}
            </div>
        </section>
    </div> 
}

export default Serie;