import style from "./About.module.css"
import yo from '../components/img/yo.jpg'

export default function About() {
    return( 
        <div className={style.contenedor1}>
            <div className={style.contenedor}>
                <div className={style.id}>
                    <h2 className={style.idTexto}>GC</h2>
               </div>
            <button className={style.favBtn}>❤️</button>
            <button className={style.boton}>X</button>
                <h2 className={style.nombre}>Gerardo Campero</h2>
             <div className={style.divTexto}>
                <h2 className={style.texto}>Estado: Estudiando</h2>
                <h2 className={style.texto}>Especie: Músico</h2>
                <h2 className={style.texto}>Genero: Programador</h2>
                <h2 className={style.texto}>Origen: Henry</h2>
             </div>
             <img className={style.img} src={yo} alt='Gerardo Campero' />
            </div> 
        </div>   
    )
}