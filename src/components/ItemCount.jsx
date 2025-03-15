import { useState } from "react";
import PropTypes from 'prop-types';

export default function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(initial);

    const handleIncrease = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    };

    const handleDecrease = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleIncrease}>+</button>

            <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    );
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};