import {  useState, useEffect  } from 'react';
import {  useParams  } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import ButtonComponent from './ButtonComponent';
import ItemCount from './ItemCount';

export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(getProduct(id));
    }, [id]);

    return (
        <>
            <h1>Detalle de producto {id}</h1>
            <h3>Nombre: {product?.title}</h3>
            <img src="{product?.image}" alt={product?.title} />
            <p>Descripcion: {product?.description}</p>
            <p>Categoria: {product?.category}</p>
            <p>Precio: ${product?.price}</p>
            <ItemCount />
            <ButtonComponent text="Agregar al carrito"/>
        </>
    );
}