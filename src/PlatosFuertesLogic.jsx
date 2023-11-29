// PlatosFuertesLogic.jsx
import { useState, useEffect } from "react";

const usePlatosFuertesLogic = (
  producto,
  agregarProductoAlCarrito
) => {
  const [gramosSeleccionados, setGramosSeleccionados] = useState(100);
  const [cantidadEsparragos, setCantidadEsparragos] = useState(0);
  const precioPor100g = 3; // Ajusta este valor según tus necesidades
  const [precioFinal, setPrecioFinal] = useState(producto.price);
  const [cantidadVerduras, setCantidadVerduras] = useState(0);



  useEffect(() => {
      const precioActualizado = (
        ((gramosSeleccionados / 100) * (gramosSeleccionados == 100 ? 0 : precioPor100g)) + producto.price
      ).toFixed(2);
      console.log(gramosSeleccionados, producto);
      setPrecioFinal(parseFloat(precioActualizado));
  }, [gramosSeleccionados, producto]);

  const handleGramosChange = (gramos) => {
    setGramosSeleccionados(gramos);
  };

  const handleCantidadEsparragosChange = (cantidad) => {
    setCantidadEsparragos(cantidad);
  };

  const handleCantidadVerdurasChange = (cantidad) => {
    setCantidadVerduras(cantidad);
  };

  const agregarAlCarrito = () => {
    agregarProductoAlCarrito({
      ...producto,
      cantidad: gramosSeleccionados,
      // Otras propiedades del producto que quieras agregar al carrito
    });
  };

  return {
    gramosSeleccionados,
    cantidadEsparragos,
    cantidadVerduras,
    handleGramosChange,
    handleCantidadEsparragosChange,
    handleCantidadVerdurasChange,
    precioFinal,
    agregarAlCarrito,
  };
};

export default usePlatosFuertesLogic;

























