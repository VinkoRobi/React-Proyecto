import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import './cesta.css'


const Cesta = ({products})=>{
 return(
    <header>
          
          <nav className='navegacion'>
         <h1 className='titulo'>Don Makai</h1>
          <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to ='/cesta'>Cesta</Link></li>

          </ul>
        </nav>
        <div className="cesta-compras">
                <h1 className="titulo-cesta">
                    Cesta de compra
                </h1>
                <p className="ban">Por favor, especificar cantidad antes de enviar</p>
                <p className="vacia">Tu cesta está vacía.</p>
                <p className="cambialo">¡Cámbialo! Elige algo y vuelve aquí.</p>
                <br />
                <button className="boton-cesta"><Link to="/productos">Seguir comprando</Link></button>
            </div>
             
    </header>
 )
}



export default Cesta