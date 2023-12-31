// Cesta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useCarritoContext } from './CarritoContext';
import './cesta.css';

const Cesta = () => {
  const { productos, eliminarProductoDelCarrito } = useCarritoContext();

  if (!productos || productos.length === 0) {
    return (
      <header>
        <NavBar />
        <div className="cesta-compras">
          <h1 className="titulo-cesta">Cesta de compra</h1>
          <p className="ban">Por favor, especificar cantidad antes de enviar</p>
          <p className="vacia">Tu cesta está vacía.</p>
          <p className="cambialo">¡Cámbialo! Elige algo y vuelve aquí.</p>
          <br />
          <button className="boton-cesta">
            <Link to="/productos">Seguir comprando</Link>
          </button>
        </div>
      </header>
    );
  }

  const calcularTotal = () => {
    // Implementa la lógica para calcular el total aquí
    return productos.reduce((total, producto) => total + producto.price, 0);
  };

  return (
    <div>
      <NavBar />
      <h1 className="cesta-de-compras">Cesta de compras</h1>
      <ul className="cesta-lista">
        {productos.map((producto) => (
          <li key={producto.id} className="cesta-item">
            {/* Mostrar la imagen del producto */}
            {producto.images && (
              <img src={producto.images[0]} alt={producto.title} className="imgs" />
            )}
            <div className="ppc">
              <p className="cesta-precio">Precio: ${producto.price}</p>
              {/* Mostrar la cantidad de gramos seleccionados */}
              <p className="cesta-gramos">Gramos seleccionados: {producto.gramosSeleccionados}</p>
              <button className='boton-eliminacion' onClick={() => eliminarProductoDelCarrito(producto)}>
                Quitar del Carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cesta-total">Total: ${calcularTotal()}</p>
      <Link to="/productos" className="cesta-seguir-comprando">
        Seguir comprando
      </Link>
      <div className='contenedor-paypal'><p className='texto-paypal'>Al tener Todos sus Productos seleccionados envie su pago a esta cuenta de paypal(DonMackay@gmail.com)(Tambien se acepta tarjeta en paypal)</p>
      <p></p>
      </div>
    </div>
  );
};

export default Cesta;
