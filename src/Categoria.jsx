import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddToCartIcon } from "./Icons";
import NavBar from "./NavBar";
import { useCarrito } from "./CarritoContext";
import { useNavigate } from "react-router-dom";

const Categoria = ({ category, products }) => {
  const { agregarProductoAlCarrito } = useCarrito();
  const navigate = useNavigate();
  const productosCategoria = products.filter(
    (producto) => producto.category === category
  );

  const [cantidadesSeleccionadas, setCantidadesSeleccionadas] = useState({});

  const estaEnElCarrito = (producto) => {
    return producto.some(
      (item) => item.id === producto.id && item.category === "porciones"
    );
  };

  const agregarAlCarrito = (producto) => {
    const productoConTamano = {
      ...producto,
      tamano: producto.unidadMedida === "gramos" ? "pequeno" : undefined,
      cantidad: cantidadesSeleccionadas[producto.id] || 1,
    };
    agregarProductoAlCarrito(productoConTamano);
    navigate("/cesta");
  };

  const handleCantidadChange = (producto, cantidad) => {
    setCantidadesSeleccionadas({
      ...cantidadesSeleccionadas,
      [producto.id]: cantidad,
    });
  };

  return (
    <div>
      <NavBar />
      <h2 className="titulo22">{category}</h2>
      <div className="fotos-productos">
        <div className="primera-fila">
          {productosCategoria.map((producto) => (
            <div key={producto.id} className="producto">
              {producto.images && producto.images.length > 0 && (
                <img src={producto.images[0]} alt={producto.title} />
              )}
              <p>{producto.title}</p>
              <p>Precio: ${producto.price}</p>
              {category === "Porciones" && (
                <div>
                  {producto.unidadMedida === "gramos" && (
                    <div>
                      <label>Cantidad en gramos: </label>
                      <input
                        type="range"
                        min={100}
                        max={500}
                        step={100}
                        value={cantidadesSeleccionadas[producto.id] || 100}
                        onChange={(e) =>
                          handleCantidadChange(
                            producto,
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <p>
                        {cantidadesSeleccionadas[producto.id] || 100} gramos
                      </p>
                    </div>
                  )}
                  {producto.title === "Papa asada" && (
                    <div>
                      <label>Cantidad de papas: </label>
                      <select
                        value={cantidadesSeleccionadas[producto.id] || 1}
                        onChange={(e) =>
                          handleCantidadChange(
                            producto,
                            parseInt(e.target.value)
                          )
                        }
                      >
                        {[...Array(9)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}
              <div>
                <button
                  className="carrito"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <AddToCartIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/productos">Volver a todos los productos</Link>
    </div>
  );
};

export default Categoria;
