// App.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Productos from './productos';
import Categoria from './Categoria';
import Contacto from './Contacto';
import Home from './HOME';
import Cesta from './Cesta';
import { CarritoProvider } from './CarritoContext';
import Sobrenosotros from './Sobrenosotros';
import { products } from './productos.json';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CarritoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<Sobrenosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos products={products} />} />
          <Route path="/productos/:categoria" element={<Categoria />} />
          <Route path="/Ensaladas" element={<Categoria category="Ensaladas" products={products} />} />
          <Route path="/Entradas" element={<Categoria category="Entradas" products={products} />} />
          <Route path="/Platos-Fuertes" element={<Categoria category="Platos Fuertes" products={products} />} />
          <Route path="/Bebidas" element={<Categoria category="Bebidas" products={products} />} />
          <Route path="/Porciones" element={<Categoria category="Porciones" products={products} />} />
          <Route path="/cesta" element={<Cesta />} />
        </Routes>
      </CarritoProvider>
    </Router>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <CarritoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarritoProvider>,
  rootElement
);

export default App;
