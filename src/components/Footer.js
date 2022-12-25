import styles from './Footer.module.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'


function Footer(){
    return <footer>
    <p>feito por Matheus de Amorim <AiFillHeart /></p>
    <div className={styles.icons}>
        <a href='https://www.linkedin.com/in/ammorim' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Ammorim7' target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
</footer>
}

export default Footer;