// PlatosFuertesLogic.jsx
import { useState, useEffect } from "react";

const usePlatosFuertesLogic = (
  producto,
  agregarProductoAlCarrito,
  navigate
) => {
  const [gramosSeleccionados, setGramosSeleccionados] = useState(100);
  const [cantidadEsparragos, setCantidadEsparragos] = useState(0);
  const [cantidadVerduras, setCantidadVerduras] = useState(0);
  const precioPor100g = 3; // Ajusta este valor según tus necesidades
  const [precioFinal, setPrecioFinal] = useState(0);

  useEffect(() => {
    // Actualiza el precio final cuando cambian los gramos seleccionados
    const precioActualizado = (
      (gramosSeleccionados / 100) * precioPor100g
    ).toFixed(2);
    setPrecioFinal(parseFloat(precioActualizado));
  }, [gramosSeleccionados]);

  const handleGramosChange = (gramos) => {
    setGramosSeleccionados(gramos);
    // Realiza otras actualizaciones según sea necesario
  };

  const handleCantidadEsparragosChange = (cantidad) => {
    setCantidadEsparragos(cantidad);
    // Implementa otras actualizaciones según sea necesario
  };

  const handleCantidadVerdurasChange = (cantidad) => {
    setCantidadVerduras(cantidad);
    // Implementa otras actualizaciones según sea necesario
  };

  const agregarAlCarrito = () => {
    // Implementa la lógica para agregar el producto al carrito
    agregarProductoAlCarrito({
      ...producto,
      cantidad: gramosSeleccionados, // O la propiedad que desees, ajusta según tus necesidades
      // Otras propiedades del producto que quieras agregar al carrito
    });
  };

  // ... Resto del código ...

  return {
    gramosSeleccionados,
    cantidadEsparragos,
    cantidadVerduras,
    handleGramosChange,
    handleCantidadEsparragosChange,
    handleCantidadVerdurasChange,
    precioFinal,
    agregarAlCarrito, // Asegúrate de incluir agregarAlCarrito en el objeto de retorno
  };
};

export default usePlatosFuertesLogic;
