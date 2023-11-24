// En tu componente principal (por ejemplo, App.js o index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import Productos from './productos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contacto from './contacto'
import Home from './HOME';
import Sobrenosotros from './Sobrenosotros';

const App = () => {
  return (
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenosotros" element={<Sobrenosotros />} />
        <Route path = "/contacto" element = {<Contacto/>}/>
         <Route path="/productos" element={<Productos />} />
   
      </Routes>
    </Router>

    
   
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);


export default App;



//      //<Route path="/contacto" element={<Contacto />} > */