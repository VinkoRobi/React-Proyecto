import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import './productos.css'

const Productos = ()=>{
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
        <h1 className="titulo2">Productos</h1>
        <div className="botones">
            
        </div>
        </header>
    )
}
export default Productos