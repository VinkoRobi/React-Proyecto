// En tu componente principal (por ejemplo, App.js o index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import Productos from './productos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './HOME';
import Sobrenosotros from './Sobrenosotros';

const App = () => {
  return (
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenosotros" element={<Sobrenosotros />} />
        {/* Comenta o elimina las siguientes líneas si no necesitas estos componentes */}
         <Route path="/productos" element={<Productos />} />
   
      </Routes>
    </Router>

    
   
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);


export default App;



//      //<Route path="/contacto" element={<Contacto />} > */