import { useState, useEffect } from "react";

const useProductoLogic = (producto, category, agregarProductoAlCarrito, navigate, tamanoFromState) => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState("pequeno");
  const [precioFinal, setPrecioFinal] = useState(producto.price);

  // Si tamanoFromState está disponible, úsalo; de lo contrario, usa el estado local
  useEffect(() => {
    if (tamanoFromState) {
      setTamanoSeleccionado(tamanoFromState);
      // Actualizar el precio final según el tamaño seleccionado
      const precioProducto = calcularPrecioProducto(producto, cantidadSeleccionada, tamanoFromState);
      setPrecioFinal(precioProducto);
    }
  }, [tamanoFromState, cantidadSeleccionada, producto]);

  const estaEnElCarrito = () => {
    // Implementa la lógica para verificar si el producto está en el carrito
    return false; // Cambia esto según tu lógica
  };

  const agregarAlCarrito = () => {
    agregarProductoAlCarrito({
      ...producto,
      cantidad: cantidadSeleccionada,
      tamano: tamanoSeleccionado,
    });
    // Redirige a la página del carrito después de agregar el producto
    navigate("/cesta");
  };
  
  const handleCantidadChange = (cantidad) => {
    setCantidadSeleccionada(cantidad);

    const precioProducto = calcularPrecioProducto(producto, cantidad, tamanoSeleccionado);
    setPrecioFinal(precioProducto);
  };

  const handleTamanoChange = (tamano) => {
    setTamanoSeleccionado(tamano);

    // Actualizar el precio final según el tamaño seleccionado
    const precioProducto = calcularPrecioProducto(producto, cantidadSeleccionada, tamano);
    setPrecioFinal(precioProducto);
  };

  const calcularPrecioProducto = (producto, cantidad, tamano, gramosSeleccionados) => {
    console.log(gramosSeleccionados,producto.price)
    if (producto.category === "Porciones") {
      return (gramosSeleccionados / 100) * 1; // Ajusta la fórmula según tus necesidades
    } else if (producto.category === "Bebidas" || producto.category === "Batidos") {
      const preciosPredeterminados = {
        pequeno: 5,
        mediano: 7,
      };
      return preciosPredeterminados[tamano];
    } else {
      return producto.price * cantidad;
    }
  };

  return {
    estaEnElCarrito,
    agregarAlCarrito,
    handleCantidadChange,
    handleTamanoChange,
    cantidadSeleccionada,
    tamanoSeleccionado,
    precioFinal,
  };
};

export default useProductoLogic;
