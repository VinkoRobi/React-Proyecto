// En tu cesta.jsx
import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useCarrito } from './CarritoContext';
import './cesta.css'; // Asegúrate de importar tus estilos

const Cesta = () => {
  const { carrito } = useCarrito();

  if (!carrito || carrito.length === 0) {
    return (
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
    );
  }

  return (
    <div className="cesta-container">
      <h1 className="cesta-de-compras">Cesta de compras</h1>
      <ul className="cesta-lista">
        {carrito.map((producto) => (
          <li key={producto.id} className="cesta-item">
            {/* Mostrar la imagen del producto */}
            {producto.images && (
              <img  src={producto.images} alt={producto.title} className="imgs" />
            )}
            <div className="ppc"> 
            <p  className="cesta-precio">Precio: ${producto.price}</p>

            </div>
          </li>
        ))}
      </ul>
      <p className="cesta-total">Total: ${/* Calcula el total aquí */}</p>
      <Link to="/productos" className="cesta-seguir-comprando">Seguir comprando</Link>
    </div>
  );
}

export default Cesta;
