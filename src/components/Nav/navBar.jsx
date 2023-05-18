import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
import { Link } from "react-router-dom";

export default function Nav (props) {
    return (
        <nav className={style.contenedor}>
            <div>
                <Link to={'/'}>
                    <span>Home</span>
                </Link>
                <Link to={'/about'}>
                    <span>About</span>
                </Link>
            </div>
            <SearchBar onSearch = {props.onSearch} />
        </nav>
    )
}