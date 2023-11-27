// CarritoContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

const CarritoContext = createContext();

const ACTIONS = {
  AGREGAR_PRODUCTO: 'agregar_producto',
  ELIMINAR_PRODUCTO: 'eliminar_producto',
  VACIAR_CARRITO: 'vaciar_carrito',
};

const carritoReducer = (estado, action) => {
  switch (action.type) {
    case ACTIONS.AGREGAR_PRODUCTO:
      return [...estado, action.producto];
    case ACTIONS.ELIMINAR_PRODUCTO:
      return estado.filter((item) => item.id !== action.producto.id);
    case ACTIONS.VACIAR_CARRITO:
      return [];
    default:
      return estado;
  }
};

const CarritoProvider = ({ children }) => {
  const [carrito, dispatch] = useReducer(carritoReducer, []);

  const agregarProductoAlCarrito = (producto) => {
    dispatch({ type: ACTIONS.AGREGAR_PRODUCTO, producto });
  };

  const eliminarProductoDelCarrito = (producto) => {
    dispatch({ type: ACTIONS.ELIMINAR_PRODUCTO, producto });
  };

  const vaciarCarrito = () => {
    dispatch({ type: ACTIONS.VACIAR_CARRITO });
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProductoAlCarrito,
        eliminarProductoDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser utilizado dentro de un CarritoProvider');
  }
  return context;
};

export { CarritoProvider, useCarrito };
