import React from "react";
import { Link } from "react-router-dom";
import './productos.css';



const Productos = ({products}) => {
  return (
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
        <button><Link to="/Ensaladas">Ensaladas</Link></button>
        <button><Link to="/Entradas">Entradas</Link></button>
        <button><Link to="/PlatosFuertes">Platos fuertes</Link></button>
        <button><Link to="/Bebidas">Bebidas</Link></button>
        <button><Link to="/Porciones">Porciones</Link></button>
      </div>
      <h2 className="todos-productos">Todos Los Productos</h2>
      <div className="fotos-productos">
        <div className="primera-fila">
          {products.map(producto => (
            <div key={producto.id} className="producto">
              {producto.images && producto.images.length > 0 && (
                <img src={producto.images[0]} alt={producto.title} />
              )}
               <p>{producto.title}</p>
              <p>Precio: ${producto.price}</p>
             
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Productos;
