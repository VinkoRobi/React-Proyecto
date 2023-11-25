import React from "react";
import { Link } from "react-router-dom";
import './productos.css';
import { AddToCartIcon } from "./Icons";

const Productos = ({ products }) => {
  const categoriasUnicas = [...new Set(products.map((producto) => producto.category))];

  return (
    <div>
      <header>
        <nav className='navegacion'>
          <h1 className='titulo'>Don Makai</h1>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to='/cesta'>Cesta</Link></li>
          </ul>
        </nav>
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
