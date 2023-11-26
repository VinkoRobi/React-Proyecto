import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import './cesta.css'
import NavBar from './NavBar';



const Cesta = ({products})=>{
 return(
    <header>
          
        <NavBar/>
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