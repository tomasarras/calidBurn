import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import ProductCard from "../../Cards/Product";
import { getAllByPageAndSize } from "../../../services/ProductService";
const SwiperOffers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllByPageAndSize(0, 99);
      setProducts(products);
    };
    fetchProducts();
  }, []);
  

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
    >
      {products.map(product => 
        <SwiperSlide key={product.id}>
          <ProductCard previewImage={product.path} title={product.name} category={product.description}/>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default SwiperOffers;
