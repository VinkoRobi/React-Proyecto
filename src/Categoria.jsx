// Categoria.js
import React from "react";
import { Link } from "react-router-dom";
import { AddToCartIcon } from "./Icons";
import NavBar from './NavBar'

  const Categoria = ({ category, products }) => {
    // Filtra los productos por la categoría seleccionada
    const productosCategoria = products.filter(producto => producto.category === category);
  
    return (

      <div>
        <NavBar/>
        <h2 className="titulo22">{category}</h2>
        <div className="fotos-productos">
          <div className="primera-fila">
            {productosCategoria.map(producto => (
              <div key={producto.id} className="producto">
                {producto.images && producto.images.length > 0 && (
                  <img src={producto.images[0]} alt={producto.title} />
                )}
                <p>{producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <div><button className="carrito"><AddToCartIcon/></button></div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/productos">Volver a todos los productos</Link>
      </div>
    );
  }
  
  export default Categoria;