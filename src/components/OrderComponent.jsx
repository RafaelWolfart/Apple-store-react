import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ButtonComponent from "./ButtonComponent";
import { addNewOrder } from "../firebase/firebase";

const OrderComponent = () => {
  const {cart, setCart} = useContext(CartContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [orderId, setOrderId] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();


    const newOrder = {
      name: values.name,
      email: values.email,
      number: values.number,
      date: new Date(),
      items: cart,
      total: total(),
    };


    try {
      const generatedOrder = await addNewOrder(newOrder);

      setValues({
        name: "",
        email: "",
        number: "",
      });

      setCart([]);

      setOrderId(generatedOrder);

    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const total = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <>
      <div className="CheckoutContainer">
        {orderId ? (
          <div>
            <h1 className="TextOrder1"> Gracias por su compra </h1>
            <h2 className="TextOrder2"> Su orden de compra es</h2> 
            <h3 className="OrderId">{orderId}</h3>
            <hr></hr>
            <ButtonComponent to="/" text="Al Inicio"></ButtonComponent>
          </div>
        ) : (
          <>
            <div className="FormContainer">
              <hr></hr>
              <div>
                <h3 className="TextOrder3">Productos en el carrito</h3>
                <ul>
                  {cart.map((product, index) => (
                    <li key={index}>
                      {product.title} $ {product.price} X1
                    </li>
                  ))}
                </ul>
              </div> 

              <span className="Total">Total:
              <p className="TotalPrice" >${total()}</p>
              </span>

              <hr></hr>
              
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="number">Number:</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={values.number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button className="SubmitButton" type="submit">
                  Enviar Orden
                </button>
              </form>
              <ButtonComponent
                className="GoBackButton"
                to="/cart"
                text="Volver al carrito"
              ></ButtonComponent>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderComponent;