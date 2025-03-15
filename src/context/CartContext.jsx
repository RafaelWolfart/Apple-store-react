import {   useState, useEffect } from 'react';
import {  createContext  } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(null);

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
            setCart([...cart, product])
    }


    useEffect(() => {
        console.log("Carrito actualizado:", cart);
    }, [cart]);

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <CartContext.Provider value={{cart, setCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}