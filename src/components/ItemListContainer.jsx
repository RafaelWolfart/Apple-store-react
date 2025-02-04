import {useState, useEffect} from 'react';
import { getCategory, getProducts } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import TitleComponent from "./TitleComponent";

export default function ItemListContainer() {

    const [products, setProducts] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            getProducts().then((response) => setProducts(response));
        } else {
            getCategory(categoryId).then((response) => setProducts(response));
        }
    }, [categoryId]);

    return (
        <>
            <TitleComponent name="iPhoneAR"/>

            <h1>Vista de {categoryId}</h1>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    )
}