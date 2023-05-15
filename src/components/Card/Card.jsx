import style from './Card.module.css';



export default function Card({id, onClose, name, status, species, gender, origin, image}) {
   return (
      <div className={style.contenedor}>
         <div className={style.id}>
            <h2 className={style.idTexto}>{id}</h2>
         </div>
         <button className={style.boton} onClick={() => onClose(id)}>X</button>
         <h2 className={style.nombre}>{name}</h2>
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
