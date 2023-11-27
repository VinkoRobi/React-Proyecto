// CarritoContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

const initialState = {
  productos: [],
};

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case 'ELIMINAR_PRODUCTO':
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  const agregarProductoAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
  };

  const eliminarProductoDelCarrito = (producto) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', payload: producto });
  };

  return (
    <CarritoContext.Provider
      value={{
        productos: state.productos,
        agregarProductoAlCarrito,
        eliminarProductoDelCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
  }
  return context;
};

export { CarritoProvider, useCarrito };
