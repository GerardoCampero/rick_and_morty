import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import style from './Favorites.module.css';
import Card from "../Card/Card";
import { filterCards, removeFavorite, orderCards } from "../../redux/actions";
import { useState } from "react";



const Favorites = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(state=>state.myFavorite);
    const [aux, setAux] =  useState(false)
    const onClose = (id) => {
        dispatch(removeFavorite(id));
    } ;

    const handleFilter = (event) => {
      const gender = event.target.value;
      dispatch(filterCards(gender));
      setAux(!aux);
    }

    const handleOrder = (event) => {
      const order = event.target.value;
      dispatch(orderCards(order));
      setAux(!aux);
    }
    

    return <div className={style.contenedor}>
      <div className={style.filter}>
         <select onChange={handleFilter}>
            <option value="" selected disabled>Filter by:</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="All">Todos</option>
         </select>
      </div>
      <div className={style.order}>
         <select onChange={handleOrder}>
            <option value="" selected disabled>Order by:</option>
            <option value="A">Ascendente</option>
            <option value="B">Descentente</option>
         </select>
      </div>
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