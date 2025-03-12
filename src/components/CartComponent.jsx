import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

export default function CartComponent() {
    const [cart, setCart] = useContext(CartContext)

    const total = () => {
        return cart.reduce((acc, product) => acc + product.price * product.cantidad, 0);
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <>
        <NavBar />
        <section className="CartTextContainer">
        {cart.length === 0 ? (
          <main className="emptyCartContainer">
            <h1 className="h1EmptyCart">Your Cart is Empty!</h1>
            <ButtonComponent text="Go back to the store" to="/" />
          </main>
        ) : (
          <div className="cartItems">
            <h1 className="h1CartList">Cart</h1>
            <h2>Items in your Cart: {cart.length}</h2>
            <hr />
            {cart.map((product, index) => (
              <div key={index} className="cartItemCard">

                <div className="cartItemImageContainer">
                  <Link to={`/category/${product.category }`} >
                  <img src={product.image} alt={product.title} className="productCartImage" />
                  </Link>
                </div>

                <div className="cartItemDetails">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))}
             <hr />
             
             <div className="TotalContainer">
             <h3 >Total:</h3>
            <p className="PTotal"> ${total()}</p>
            </div>

            <button className="CartButton" onClick={emptyCart}>
              Empty Cart
            </button>

            
            <ButtonComponent text="Continue with the purchase" className="CartButton" to="/checkout" />
          </div>
        )}
      </section>
        </>
    )
}