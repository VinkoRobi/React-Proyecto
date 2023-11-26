import React from "react";
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';

const Home = () => {
  return (
   
      <header>
        
       <NavBar/>
        <div><img   className='imagen' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000017-adfffae001/DON.webp?ph=19e3327c9f" alt="logo" /></div>

        <div className='menucontenedor'><h1 className='tmenu'>Menú:</h1>
        <button className="boton-menu">
        <Link to="/productos">Descubre Nuestros Productos</Link>
        </button>

        </div>
        <div className='menu-donde-comprar'>
          <h1 className='titulo-donde-comprar'>¿dónde comprar?</h1>
          <p className='parrafo-donde-comprar'> 
          Samborondón, Guayas, 090101.
          <br />
          0987288752
          <br />
          DonMackay@gmail.com
          </p>
            <picture ><img className='figura-fruta' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000099-ef0aaef0ab/7EF2922B-7A27-4F4A-A375-DAEF38E9DA23.webp?ph=19e3327c9f" alt="" /></picture>
            <br />
            <picture><img  className='figura-sambo' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000089-c0c14c0c15/WhatsApp%20Image%202023-11-10%20at%2020.07.36.webp?ph=19e3327c9f" alt="" /></picture>
            <picture><img className='camisa-makai-1' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000081-8c5478c549/700/imagen_2023-11-10_200027255.webp?ph=19e3327c9f" alt="" /></picture>
            <picture><img className='camisa-makai-2' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000087-9d1e59d1e6/700/SFEDS.webp?ph=19e3327c9f" alt="" /></picture>  <br />
            <div>
            <picture><img className='lagang' src="https://19e3327c9f.cbaul-cdnwnd.com/6b3ecc07b54b512957abe515e83846d9/200000097-5320753208/4403DDE9-32CB-4400-B0BF-EAE4066001B1.webp?ph=19e3327c9f" alt="" /></picture>
            </div>
            
        </div>
      </header>
      
   
  );
};

export default Home;
