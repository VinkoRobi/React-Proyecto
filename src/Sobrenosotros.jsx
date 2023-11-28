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
          <li><Link to ='/cesta'>Cesta</Link></li>
        </ul>
      </nav>
      
      <h1 className='Titulo-Sobrenosotros'>Sobre nosotros</h1>
        <div className='parrafo'>
        <p className='inseider'>
        Somos un grupo de cuatro emprendedores que buscan montar un negocio de comida saludable para mejorar el estilo de vida de las personas y concientizarlos de no generar residuos,
          ya que lo que nos hace destacar además de la comida saludable,
          es que nosotros vendemos la comida por cantidad ahorrando desperdicios de comida
        </p>
        </div>
        <div className='imagenes'>
        <picture ><img className='imagen1' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000105-7d06a7d06b/B339582C-490E-4353-8410-49006C431364.webp?ph=19e3327c9f" alt="" /></picture>
          <picture><img className='imagen2' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000107-484fd484fe/DA06A03B-0F2A-468A-9ACB-762F165A56FE.webp?ph=19e3327c9f" alt="" /></picture>
        </div>
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
             Envios a todo Guayaquil
             <br />
             <br />
             
             Si tienes alguna duda, no olvide en contactarnos al correo:
             <br />
             <br />
             donmackay197@gmail.com
            </p>
          </div>

    </header>
  );
};

export default Sobrenosotros;
