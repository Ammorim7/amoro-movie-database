import styles from './Card.module.css'
import {Link} from 'react-router-dom'

const poster = process.env.REACT_APP_API_IMAGE

function Card({object}){
    return <article className={styles.card}>
        {object.adult !== undefined ? 
        <Link to={`/movie/${object.id}`}><img src={poster + object.poster_path} alt={object.title}/></Link> 
        : <Link to={`/serie/${object.id}`}><img src={poster + object.poster_path} alt={object.name}/></Link>}
        {object.adult !== undefined ? <h1>{object.title}</h1> : <h1>{object.name}</h1>}
    </article>
}

export default Card;