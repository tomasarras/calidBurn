import React from "react";
import Product from "../Product/Product";

const ProductList = (props) => {
  const { products } = props;
  return <section className="container">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4" >
    {products.map(product => 
      <div className="col mb-4" key={product.id}>
        <Product product={product}/>
      </div>
    )}
  </div>
  </section> ;
};

export default ProductList;
