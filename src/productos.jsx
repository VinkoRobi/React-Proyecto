import React from "react";
import { Link, useNavigate } from "react-router-dom";  // Asegúrate de importar useNavigate
import './productos.css';
import NavBar from './NavBar';
import { AddToCartIcon } from "./Icons";
import { CarritoProvider } from "./CarritoContext";
// productos.jsx (o donde sea que estés usando el contexto)
import { useCarritoContext } from './CarritoContext';

const Productos = ({ products }) => {
  const categoriasUnicas = [...new Set(products.map((producto) => producto.category))];
  const { agregarProductoAlCarrito } = useCarritoContext();
  const navigate = useNavigate();  // Asegúrate de importar useNavigate

  const agregarAlCarrito = (producto) => {
    agregarProductoAlCarrito(producto);
    // Redirigir al usuario al carrito después de agregar al carrito
    navigate('/cesta');
  };
  

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
                {/* Agregar el producto al carrito al hacer clic en el botón */}
                <button className="carrito" onClick={() => agregarAlCarrito(producto)}>
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
