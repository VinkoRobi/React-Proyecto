// Categoria.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useCarritoContext } from "./CarritoContext";
import useProductoLogic from "./useProductoLogic";
import { useNavigate } from "react-router-dom";
import { AddToCartIcon } from "./Icons";
import usePlatosFuertesLogic from "./PlatosFuertesLogic";

const Categoria = ({ category, products }) => {
  const { agregarProductoAlCarrito } = useCarritoContext();
  const navigate = useNavigate();
  const productosCategoria = products.filter(
    (producto) => producto.category === category
  );

  return (
    <div>
      <NavBar />
      <h2 className="titulo22">{category}</h2>
      <div className="fotos-productos">
        <div className="primera-fila">
          {productosCategoria.map((producto) => {
            const productoLogic =
              category === "Platos Fuertes"
                ? usePlatosFuertesLogic(
                    producto,
                    agregarProductoAlCarrito,
                    navigate
                  )
                : useProductoLogic(
                    producto,
                    category,
                    agregarProductoAlCarrito,
                    navigate
                  );

            const {
              estaEnElCarrito,
              agregarAlCarrito,
              gramosSeleccionados,
              cantidadEsparragos,
              cantidadVerduras,
              handleGramosChange,
              handleCantidadEsparragosChange,
              handleCantidadVerdurasChange,
              cantidadSeleccionada,
              precioFinal,
              handleCantidadChange,
            } = productoLogic;

            return (
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
                          value={cantidadSeleccionada}
                          onChange={(e) =>
                            handleCantidadChange(
                              parseInt(e.target.value)
                            )
                          }
                        />
                        <p>{cantidadSeleccionada} gramos</p>
                      </div>
                    )}
                    {producto.title === "Papa asada" && (
                      <div>
                        <label>Cantidad de papas: </label>
                        <select
                          value={cantidadSeleccionada}
                          onChange={(e) =>
                            handleCantidadChange(
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

                {category === "Platos Fuertes" && (
                  <div>
                    <label>Cantidad en gramos: </label>
                    <input
                      type="range"
                      min={100}
                      max={500}
                      step={100}
                      value={gramosSeleccionados}
                      onChange={(e) =>
                        handleGramosChange(parseInt(e.target.value))
                      }
                    />
                    <p>{gramosSeleccionados} gramos</p>
                  </div>
                )}

                {category === "Platos Fuertes" &&
                  producto.Extra === "Esparragos" && (
                    <div>
                      <label>Cantidad de Espárragos: </label>
                      <select
                        value={cantidadEsparragos}
                        onChange={(e) =>
                          handleCantidadEsparragosChange(
                            parseInt(e.target.value)
                          )
                        }
                      >
                        {[...Array(5)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                {category === "Platos Fuertes" &&
                  producto.Extra === "Verduras" && (
                    <div>
                      <label>Cantidad de Verduras: </label>
                      <select
                        value={cantidadVerduras}
                        onChange={(e) =>
                          handleCantidadVerdurasChange(
                            parseInt(e.target.value)
                          )
                        }
                      >
                        {[...Array(5)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                <div>
                  <button
                    className={`carrito${
                      producto.title === "Papa asada"
                        ? " papa-asada-button"
                        : ""
                    }`}
                    onClick={() => agregarAlCarrito()}
                  >
                    <AddToCartIcon />
                  </button>
                </div>
                <p className="precio-final">Precio Final: ${precioFinal}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/productos">Volver a todos los productos</Link>
    </div>
  );
};

export default Categoria;
