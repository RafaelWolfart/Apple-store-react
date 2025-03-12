import {   useState, useEffect } from 'react';
import {  createContext  } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(null);

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    // const addToCart = (product) => {
    //         setCart([...cart, product])
    //         console.log(cart)
    // }

    const addToCart = (prod) => {
        setCart((prevCart) => {
            let prodIndex = prevCart.findIndex((p) => p.id === prod.id);
    
            if (prodIndex < 0) {
                return [...prevCart, { ...prod, cantidad: 1 }];
            } else {
                return prevCart.map((p, index) =>
                    index === prodIndex ? { ...p, cantidad: p.cantidad + 1 } : p
                );
            }
        });
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