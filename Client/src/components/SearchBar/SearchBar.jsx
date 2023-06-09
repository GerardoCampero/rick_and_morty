import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState([]);
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={style.contenedor}>
         <input className={style.input} type='text' onChange={handleChange} />
         <button className={style.button} onClick={() => {
            onSearch(id);
         }}>Agregar</button>
      </div>
   );
}

