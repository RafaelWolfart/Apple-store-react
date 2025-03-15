import {  useState, useEffect, useContext } from 'react';
import {  useParams  } from 'react-router-dom';
import { getProduct } from '../firebase/firebase';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);


    useEffect(() => {
        async function prodList() {
            const prodData = await getProduct(id);
            setProduct(prodData);
            setLoading(false);
        }
        prodList();
    }, [id]);

    const handleAddToCart = (cantidad) => {
        if (product) {
            addToCart(product, cantidad);
        }
    }

    return (
        <div>
            {product ? (
        <>
            <h1>Detalle de producto</h1>
            <h3>Nombre: {product?.title}</h3>
            <img src={product.image} alt={product?.title} />
            <p>Descripcion: {product?.description}</p>
            <p>Categoria: {product?.category}</p>
            <p>Precio: ${product?.price}</p>
            <ItemCount stock={10} initial={1} onAdd={handleAddToCart}/>
        </>
            ) : (
                loading && <p>Cargando...</p>
            )}
        </div>
    );
}
