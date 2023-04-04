import React from "react";
import { gallery } from "../global/gallery";
import GalleryItem from "./GalleryItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div className='w-screen'>
      <Swiper
        slidesPerView='auto'
        // spaceBetween={0}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        className='mySwiper-gallery'
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Keyboard, FreeMode, Pagination, Navigation]}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <GalleryItem
              gallery={item}
              totalLength={gallery.length}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
