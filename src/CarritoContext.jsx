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
    case 'ACTUALIZAR_PRODUCTO':
      return {
        ...state,
        productos: state.productos.map(producto =>
          producto.id === action.payload.id ? action.payload : producto
        ),
      };
    default:
      return state;
  }
};

const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  const agregarProductoAlCarrito = (producto) => {
    const productoExistente = state.productos.find(p => p.id === producto.id);

    if (productoExistente) {
      dispatch({ type: 'ACTUALIZAR_PRODUCTO', payload: producto });
    } else {
      dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
    }
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

const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarritoContext debe usarse dentro de un CarritoProvider');
  }
  return context;
};

export { CarritoProvider, useCarritoContext };
