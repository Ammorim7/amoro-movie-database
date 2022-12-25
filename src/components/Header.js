import styles from './Header.module.css'
import logo from './img/amdbSemFundo.png'

import { Link } from 'react-router-dom'

// import {SlMagnifier} from 'react-icons/sl' - para utilizar quando implementar search


function Header(){
    return <header>
        <div className={styles.areaUtil}>
            <section className={styles.headerImg}>
                <Link to='/'><img src={logo} alt='amoro movie database' height='50px'/></Link>
            </section>
            <nav>
                <ul>
                <li>Filmes
                        <ul>
                            <Link to='/movie'><li>Populares</li></Link>
                            <Link to='/movie/toprated'><li>Mais bem avaliados</li></Link>
                            <Link to='/movie/nowplaying'><li>Em cartaz</li></Link>
                        </ul>
                    </li>
                    
                    
                    <li>Séries
                        <ul>
                            <Link to='/serie'><li>Populares</li></Link>
                            <Link to='/serie/toprated'><li>Mais bem avaliadas</li></Link>
                            <Link to='/serie/nowplaying'><li>Na TV</li></Link>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;