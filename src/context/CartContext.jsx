import {   useState, useEffect } from 'react';
import {  createContext  } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(null);

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, cantidad) => {
        const existingProduct = cart.find((p) => p.id === product.id);
    
        if (existingProduct) {
            const updatedCart = cart.map((p) =>
                p.id === product.id ? { ...p, cantidad: p.cantidad + cantidad } : p
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, cantidad }]);
        }
    };


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