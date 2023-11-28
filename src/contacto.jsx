import React from "react";
import './contacto.css';
import NavBar from './NavBar';
import { Ubicacion, Telefono, Ig } from "./Icons";

const Contacto = () => {
  return (
    <>
      <NavBar />
      <h1 className="titulo-contacto">
          Contacto
        </h1>
      <div className="contactos">
        <div className="icon-ubi">
          <Ubicacion />
          Envíos a Guayaquil, Ecuador.
        </div>
        <br />
        <br />
        <div className="ws">
          <p className="telefono"><Telefono /></p>
          <p className="numero">0987288752</p>
        </div>
        <p className="igs">
          <Ig />
          
          donmackay197@gmail.com <br />
          @donmackay_
        </p>
      </div>
      <img className="buldozer" src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000113-e640ce640d/imagen_2023-11-26_213454409.webp?ph=19e3327c9f" alt="" />
    </>
  );
};

export default Contacto;









