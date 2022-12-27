import styles from './Header.module.css'
import logo from './img/amdbSemFundo.png'

import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {SlMagnifier} from 'react-icons/sl' 


function Header(){
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function buscar(e){
        e.preventDefault()

        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return <header>
        <div className={styles.areaUtil}>
            <section className={styles.headerImg}>
                <Link to=''><img src={logo} alt='amoro movie database' height='50px'/></Link>
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
                <form onSubmit={buscar}>
                    <button type="submit"><SlMagnifier /></button>
                    <input type="text" placeholder='Busque um filme/série' onChange={(e) => setSearch(e.target.value)} value={search}/>
                </form>
            </nav>
        </div>
    </header>
}

export default Header;