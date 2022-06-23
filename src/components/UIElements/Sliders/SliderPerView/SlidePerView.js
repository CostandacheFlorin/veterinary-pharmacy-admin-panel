import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SlidesPerView.css";
import { Pagination } from "swiper";

export default function App({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          
          <SwiperSlide key={image.id}><img style={{width:'100%'}}     src={image.picture} alt={image.id} /></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
