import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import './sobrenosotros.css'


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
      
        <h1 className='titulo-sobrenosotros'>Sobre nosotros</h1>
        <div className='parrafo'>
          Somos un grupo de cuatro emprendedores que buscan montar un negocio de comida saludable para mejorar el estilo de vida de las personas y concientizarlos de no generar residuos,
          ya que lo que nos hace destacar además de la comida saludable,
          es que nosotros vendemos la comida por cantidad ahorrando desperdicios de comida
        </div>
          <picture ><img className='imagen1' src="https://d1di2lzuh97fh2.cloudfront.net/files/3u/3ue/3uejbi.png?ph=19e3327c9f" alt="" /></picture>
          <picture><img className='imagen2' src="https://d1di2lzuh97fh2.cloudfront.net/files/44/44w/44wuy9.png?ph=19e3327c9f" alt="" /></picture>
          <div className='parrafo2'>
            <h3 className='titulo2'>Nuestro ODS y mas informacion</h3>
            <p className='parrafo-ods'> 
             Los ODS con los que nos identificamos son 
             <br />
             <br />
             
             (2.Hambre cero)
             <br />
             <br />

             (3. Salud y bienestar)
             <br />
             <br />

             (12.Produccion y consumo responsable)
             <br />
             <br />
             <br />
             Nosotros nos caracterizamos por tener un buen servicio con el cliente y 
             para poder ofrecerle un momento tranquilo en un lugar acogedor a los clientes.
             Nos puedes encontrar de:
             <br />
             <br />
             Lunes a Viernes 12:00 a 18:00
             <br />
             Sabados y Domingos 12:00 a 17:00
            </p>
          </div>

    </header>
  );
};

export default Sobrenosotros;
