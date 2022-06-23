import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../SliderPerView/SlidesPerView.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App({images}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image) => (
          
          <SwiperSlide  key={image.id}><img  src={image.picture} alt={image.id} /></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
