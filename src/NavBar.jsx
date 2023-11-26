// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
  );
}

export default NavBar;
