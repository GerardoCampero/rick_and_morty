import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';


function Card({id, onClose, name, status, species, gender, origin, image, addFavorite, removeFavorite, myFavorite}) {
   const [isFav, setIsFav] =  useState(false);
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true)
         addFavorite({id, onClose, name, status, species, gender, origin, image, addFavorite, removeFavorite});
      }
   }

   useEffect(() => {
      myFavorite.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorite]);

   return (
      <div className={style.contenedor}>
         <div className={style.id}>
            <h2 className={style.idTexto}>{id}</h2>
         </div>
         {
            isFav ? (
               <button className={style.favBtn} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.favBtn} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.boton} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={style.nombre}>{name}</h2>
         </Link>
         <div className={style.divTexto}>
            <h2 className={style.texto}>Estado: {status}</h2>
            <h2 className={style.texto}>Especie: {species}</h2>
            <h2 className={style.texto}>Genero: {gender}</h2>
            <h2 className={style.texto}>Origen: {origin}</h2>
         </div>
         <img className={style.img} src={image} alt={name} />
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorite: state.myFavorite,
   };
}; 


const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
