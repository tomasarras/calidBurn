import React, { useEffect, useState } from "react";
import ProductList from '../components/ProductList/ProductList'
import * as productService from "../services/ProductService";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newProducts = await productService.getAllByPageAndSize(0, 10);
      setProducts(newProducts);
    }

    fetchData();
  }, [])

  return (<>
    <ProductList products={products}/>
    </>
  )
}
