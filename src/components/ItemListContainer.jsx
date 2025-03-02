import {useState, useEffect} from 'react';
import { getCategory, getProducts } from '../firebase/firebase';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import TitleComponent from "./TitleComponent";

export default function ItemListContainer() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            getProducts().then((response) => {
                setProducts(response);
                setLoading(false);
            });
        } else {
            getCategory(categoryId).then((response) => {
                setProducts(response)
                setLoading(false)
            })
        }
    }, [categoryId]);

    return (
        <>
            <TitleComponent name="iPhoneAR"/>

            <h1>Productos  de {categoryId}</h1>
            {loading ? (<p>Cargando...</p>) : (
                <section>
                {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
                </section>
            ) 
            }
        </>
    )
}