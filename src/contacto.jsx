import React from "react";
import './contacto.css'
import NavBar from './NavBar';

const Contacto = ()=>{
  return(
    <header>
        <NavBar/>

        <div className="contactos">
        <h1 className="titulo-contacto">
            Contacto
        </h1>
           <p className="ubi">
                DON MACKAY
                Samborondón, Guayas, Plaza Batán.
                 <br />

                0987288752
                 <br />
                georgio.mackay1@gmail.com
                  <br />
                @Don_Mackay_ec
           </p>




        </div>
    </header>
  )
}
export default Contacto