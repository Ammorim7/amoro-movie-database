import styles from './Popular.module.css'

import {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

import Card from '../Card'
import FetchContent from '../FetchContent.js'

const apiKey = process.env.REACT_APP_API_KEY
const search = process.env.REACT_APP_API_SEARCH

function Search(){
    const [searchParams] = useSearchParams()

    const [resultados, setResultados] = useState([])
    const query = searchParams.get("q")
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getContent(){
            const r = await FetchContent(`${search}?${apiKey}&query=${query}`)
            setResultados([...resultados, ...r.results])
        }
        getContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query, page])

    return <div id={styles.page}>
        <h1>Resultados para {query}:</h1>
        <section id={styles.grade}>
            { resultados.map(midia => <Card object={midia} key={midia.id}/>) }
        </section>
        <button onClick={() => setPage(page+1)}>Carregar mais</button>
    </div>
}

export default Search
