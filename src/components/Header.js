import styles from './Header.module.css'
import logo from './img/amdbSemFundo.png'

import { Link } from 'react-router-dom'

// import {SlMagnifier} from 'react-icons/sl' - para utilizar quando implementar search


function Header(){
    return <header>
        <div className={styles.areaUtil}>
            <section className={styles.headerImg}>
                <Link to='/amoro-movie-database'><img src={logo} alt='amoro movie database' height='50px'/></Link>
            </section>
            <nav>
                <ul>
                <li>Filmes
                        <ul>
                            <Link to='/amoro-movie-database/movie'><li>Populares</li></Link>
                            <Link to='/amoro-movie-database/movie/toprated'><li>Mais bem avaliados</li></Link>
                            <Link to='/amoro-movie-database/movie/nowplaying'><li>Em cartaz</li></Link>
                        </ul>
                    </li>
                    
                    
                    <li>Séries
                        <ul>
                            <Link to='/amoro-movie-database/serie'><li>Populares</li></Link>
                            <Link to='/amoro-movie-database/serie/toprated'><li>Mais bem avaliadas</li></Link>
                            <Link to='/amoro-movie-database/serie/nowplaying'><li>Na TV</li></Link>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;