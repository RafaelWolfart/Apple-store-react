/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ProductCard ({ product }) {
    return (
        <>
            <article className="product-card">
                <h3>
                    {product.title}
                </h3>
                <img src={product.image} alt={product.title} />
                <p>${product.price}</p>
                <button>
                    <Link to={`/product/${product.id}`}>Ver detalle</Link>
                </button>
            </article>
        </>
    )
}