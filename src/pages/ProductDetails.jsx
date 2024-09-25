import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from '../data/productsData.json'
import styles from "./ProductDetails.module.css"

const ProductDetails = () => {

    const { productId } = useParams();
    const product = productsData.find(p => p.id === parseInt(productId));

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div className={styles.productDetails}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/">Back to products</Link>
        </div>
    );
}

export default ProductDetails;