// Productos.js
import React from "react";
import { Link } from "react-router-dom";
import './productos.css';
import { AddToCartIcon } from "./Icons";
import NavBar from './NavBar';


const Productos = ({ products }) => {
  const categoriasUnicas = [...new Set(products.map((producto) => producto.category))];

  return (
    <div>
      <header>
      <NavBar />
        <h1 className="titulo22">Productos</h1>
        <div className="botones-comidas">
          {categoriasUnicas.map((categoria) => (
            <button key={categoria}>
              <Link to={`/${categoria}`}>{categoria}</Link>
            </button>
          ))}
        </div>
      </header>

      {/* Mapear sobre los productos y mostrar solo los de la categoría actual */}
      <div className="fotos-productos">
        <div className="primera-fila">
          {products.map((producto) => (
            <div key={producto.id} className="producto">
              {/* Mostrar solo productos de la categoría actual */}
              {producto.images && producto.images.length > 0 && (
                <img src={producto.images[0]} alt={producto.title} />
              )}
              <p>{producto.title}</p>
              <p>Precio: ${producto.price}</p>
              <div>
                <button className="carrito">
                  <AddToCartIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productos;
