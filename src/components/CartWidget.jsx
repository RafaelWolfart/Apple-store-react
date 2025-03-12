import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


export default function CartWidget() {
    const { cart } = useContext(CartContext);


    return (
        <>

        {cart?.length > 0 ? <Link to="/cartWidget">
        <button className="cartWidget"> 
            <div>{cart.length}</div>
            <img className='cart-img' src="/public/img/carrito-de-compras.png" alt="Cart" />
        </button>
        </Link> : null}

        </>
    );
}