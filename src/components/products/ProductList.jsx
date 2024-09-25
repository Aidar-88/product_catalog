import React, { useState, useMemo } from "react";
import styles from "./ProductList.module.css"
import ProductCard from "./ProductCard";
import productsData from "../../data/productsData.json"



const ProductList = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState("");


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 14;

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name === 'searchTerm') setSearchTerm(value);
        if (name === 'minPrice') setMinPrice(value);
        if (name === 'maxPrice') setMaxPrice(value);
    };

    const filteredProducts = useMemo(() => {
        return productsData.filter((product) => {
            const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
            const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
            return matchesSearchTerm && matchesMinPrice && matchesMaxPrice;
        });
    }, [searchTerm, minPrice, maxPrice]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    return (
        <div className={styles.productList}>
            <h1>Product Catalog</h1>
            <div className={styles.filters}>
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleFilterChange}
                    className={styles.input}
                />
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min price..."
                    value={minPrice}
                    onChange={handleFilterChange}
                    className={styles.input}
                />
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max price..."
                    value={maxPrice}
                    onChange={handleFilterChange}
                    className={styles.input}
                />
            </div>

            <div className={styles.productGrid}>
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? styles.activePage : styles.pageButton}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductList;