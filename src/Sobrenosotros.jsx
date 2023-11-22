import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

const Sobrenosotros = () => {
  return (
    <header>
      <nav className="navegacion">
        <h1 className="titulo">Don Makai</h1>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <h1></h1>
    </header>
  );
};

export default Sobrenosotros;
