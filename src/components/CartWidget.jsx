
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const CartWidget = () => {
    const context = useContext(CartContext);

    const cart = context
    return (
        <>
            <div>
                <button>
                    <div className="cart-widget">
                        🛒{cart.length}
                    </div>
                </button>
            </div>
        </>
    )
}

export default CartWidget;