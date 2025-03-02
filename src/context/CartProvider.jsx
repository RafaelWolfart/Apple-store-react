import {  useState  } from 'react';
import { CartContext } from './CartContext';
import PropTypes from 'prop-types';

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (prod) => {
            let prodIndex = cart.findIndex((p) => p.id == prod.id);
        
            if (prodIndex < 0) {
                return setCart([...cart, { ...prod, cantidad: 1 }]);
            }

            cart[prodIndex].cantidad += 1;

            setCart(cart);
    }

    const removeProd = (prod) => {
        const prodIndex = cart.findIndex((p) => p.id == prod.id);
    
        if (prodIndex >= 0 && cart[prodIndex]?.cantidad == 1) {
            const newCart = cart.filter((p) => p.id != prod.id);
            return setCart(newCart);
        }
    
        if (prodIndex >= 0 && cart[prodIndex]?.cantidad > 1) {
            cart[prodIndex].cantidad -= 1;
            return setCart(cart);
        }
    
        return alert('Carrito vacío!');
        };

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeProd}}>
            {children}
        </CartContext.Provider>
    )
}