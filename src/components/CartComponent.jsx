import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import NavBar from "./NavBar";
// import { Link } from "react-router-dom";
// import ButtonComponent from "./ButtonComponent";

export default function CartComponent() {
  const { cart } = useContext(CartContext);


  return (
      <div>
          <h2>Carrito de Compras</h2>
          {cart.length > 0 ? (
              cart.map((product) => (
                  <div key={product.id}>
                      <p>{product.title}</p>
                      <img src={product.image} alt={product?.title} />
                      <p>Cantidad: {product.cantidad}</p>
                      <p>Precio: ${product.price}</p>
                  </div>
              ))
          ) : (
              <p>El carrito está vacío</p>
          )}
      </div>
  );
}