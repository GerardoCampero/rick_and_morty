import style from './Detail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'
export default function Detail() {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.contenedor}>
        { character.name ? (
            <>
                <p className={style.p}>
                    {character.name}
                </p>
                <p className={style.p}>
                    {character.status}
                </p>
                <p className={style.p}>
                    {character.species}
                </p>
                <p className={style.p}>
                    {character.gender}
                </p>
                <p className={style.p}>
                    {character.origin?.name}
                </p>
                <img className={style.img} src={character.image} alt={character.name} />
            </>
            )
            : (
                <p>Loading...</p>

            )  

        }
        </div>
    ) 
}