import React from "react";
import { Link } from "react-router-dom";
import { AddToCartIcon } from "./Icons";
import NavBar from './NavBar';
import { useCarrito } from './CarritoContext';
import { useNavigate } from "react-router-dom";  // Asegúrate de importar useNavigate

const Categoria = ({ category, products }) => {
  const { agregarProductoAlCarrito } = useCarrito();
  const navigate = useNavigate();  // Asegúrate de importar useNavigate
  const productosCategoria = products.filter(producto => producto.category === category);

  const agregarAlCarrito = (producto) => {
    agregarProductoAlCarrito(producto);
    // Redirigir al usuario al carrito después de agregar al carrito
    navigate('/cesta');
  };

  return (
    <div>
      <NavBar />
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
              <div>
                <button className="carrito" onClick={() => agregarAlCarrito(producto)}>
                  <AddToCartIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/productos">Volver a todos los productos</Link>
    </div>
  );
}

export default Categoria;
