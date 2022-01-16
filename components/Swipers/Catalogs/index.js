import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import ProductCard from "../../Cards/Product";
import catalogs from "../../../mockData/catalogs.json";

const SwiperCatalogs = () => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
    >
      {catalogs.map(product => 
        <SwiperSlide key={product.id}>
          <ProductCard previewImage={product.previewImage} title={product.title} category={product.category}/>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default SwiperCatalogs;
