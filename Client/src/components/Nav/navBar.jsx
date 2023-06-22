import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
import { Link } from "react-router-dom";
import RyMlogo from '../img/RyMlogo.png'

export default function Nav (props) {
    return (
        <nav className={style.contenedor}>
            <img className={style.img} src={RyMlogo} alt='Logo Rick and Morty'/>
            <div className={style.navBtn}>
                <Link className={style.link} to={'/cards'}>
                    <span className={style.Btn}>Home</span>
                </Link>
                <Link className={style.link} to={'/about'}>
                    <span className={style.Btn}>About</span>
                </Link>
                <Link className={style.link} to={'/favorite'}>
                    <span className={style.Btn}>Favorite</span>
                </Link>
            </div>
            <SearchBar onSearch = {props.onSearch} />
        </nav>
    )
}