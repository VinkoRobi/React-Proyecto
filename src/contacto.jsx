import React from "react";
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import './contacto.css'

const Contacto = ()=>{
  return(
    <header>
            <nav className='navegacion'>
         <h1 className='titulo'>Don Makai</h1>
          <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <div className="contactos">
        <h1 className="titulo-contacto">
            Contacto
        </h1>
           <p className="ubi">
                DON MACKAY
                Samborondón, Guayas, Plaza Batán.
                 <br />

                0987288752
                 <br />
                georgio.mackay1@gmail.com
                  <br />
                @Don_Mackay_ec
           </p>




        </div>
    </header>
  )
}
export default Contacto