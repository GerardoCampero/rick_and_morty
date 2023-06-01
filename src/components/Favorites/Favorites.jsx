import { useSelector } from "react-redux";
import { useState } from "react";
import style from './Favorites.module.css';
import Card from "../Card/Card";



const Favorites = () => {
    const favorite = useSelector(state=>state.myFavorite);
    const [isCard, setIsCard] = useState()
    const onClose = (id) => {
        setIsCard(isCard.myFavorite.filter((char) => char.id !== id))
    } ;

    return <div className={style.contenedor}>
    {favorite.map(({id, name, status, species, gender, origin, image}) =>{

       return <Card
          id = {id}
          key = {id}
          onClose = {onClose}
          name = {name}
          status = {status}
          species = {species}
          gender = {gender}
          origin = {origin.name}
          image = {image}
       />
    })}
 </div>;
};

export default Favorites;