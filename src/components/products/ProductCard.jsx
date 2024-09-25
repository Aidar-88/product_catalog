import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css"
import PropTypes from "prop-types"

const ProductCard = ({ product }) => {
    console.log(product.image);


    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>${product.price}</p>
            <Link to={`/products/${product.id}`} className={styles.productLink}>
                View Details
            </Link>
        </div>
    );

};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired
}


export default ProductCard;