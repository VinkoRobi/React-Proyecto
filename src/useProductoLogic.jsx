import { useState } from "react";

const useProductoLogic = (producto, category, agregarProductoAlCarrito, navigate) => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [precioFinal, setPrecioFinal] = useState(0);

  const estaEnElCarrito = () => {
    // Implementa la lógica para verificar si el producto está en el carrito
    return false; // Cambia esto según tu lógica
  };

  const agregarAlCarrito = () => {
    // Implementa la lógica para agregar el producto al carrito
    agregarProductoAlCarrito({
      ...producto,
      cantidad: cantidadSeleccionada,
      // Otras propiedades del producto que quieras agregar al carrito
    });
  };

  const handleCantidadChange = (cantidad) => {
    setCantidadSeleccionada(cantidad);

    const precioProducto = calcularPrecioProducto(producto, cantidad);
    setPrecioFinal(precioProducto);
  };

  const handleTamanoChange = (e) => {
    // Implementa la lógica para el cambio de tamaño si es necesario
  };

  const calcularPrecioProducto = (producto, cantidad) => {
    const precioBase = producto.price * cantidad;
    return precioBase;
  };

  return {
    estaEnElCarrito,
    agregarAlCarrito,
    handleCantidadChange,
    handleTamanoChange,
    cantidadSeleccionada,
    precioFinal,
  };
};

export default useProductoLogic;
