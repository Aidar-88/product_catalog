import React from "react";
import ProductList from "../components/products/ProductList";
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to our Product Catalog!</h1>
                <p className={styles.text}>.................</p>
            </header>
            <ProductList />
        </div>
    );
}

export default HomePage;