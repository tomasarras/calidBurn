import React, { useEffect, useState, useContext } from "react";
import ProductList from "../../components/ProductList/ProductList";
import UserContext from "../../contexts/UserContext";
import * as productService from "../../services/ProductService";

const MyPurchasedProducts = () => {
    const [products, setProducts] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                const newProducts = await productService.getPurchased(0, 10);
                setProducts(newProducts);
            }
            
            fetchData();
        }
    }, [token])

    return <ProductList products={products}/>;
};

export default MyPurchasedProducts;