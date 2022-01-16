import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

const SwiperHome = () => {
  return (
    <Swiper
      styles={{'--swiper-navigation-color': '#fff'}}
      modules={[Navigation]}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <img src="./slider.png" alt="slider" className="w-100"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./slider.png" alt="slider" className="w-100"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./slider.png" alt="slider" className="w-100"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./slider.png" alt="slider" className="w-100"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHome;
