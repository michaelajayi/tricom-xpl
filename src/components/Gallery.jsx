import React from "react";
import { gallery } from "../global/gallery";
import GalleryItem from "./GalleryItem";

import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div className='w-screen flex flex-col space-y-10 justify-center items-center py-5 lg:py-20'>
      <div className='lg:w-[90%] w-full px-5 lg:px-0 justify-center '>
        <h1 className='text-[32px] leading-[42px] -tracking-[.011em] text-navy-blue'>
          Our Gallery
        </h1>
      </div>
      <div className='w-full lg:w-[90%]'>
        <Swiper
          slidesPerView='auto'
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          className='mySwiper-gallery border-[1.4px] border-t-1 border-b-1 border-l-1 w-screen border-navy-blue'
          // freeMode={true}
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
          navigation={{
            prevEl: ".prev-arrow-our-gallery",
            nextEl: ".next-arrow-our-gallery",
          }}
          pagination={{
            el: ".landing-portfolio-pagination",
            type: "fraction",
            clickable: true,
            renderFraction: function (currentClass, totalClass) {
              return (
                '<span class="' +
                currentClass +
                '"></span>' +
                "<span> / </span> " +
                '<span class="' +
                totalClass +
                '"></span>'
              );
            },
          }}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {gallery.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`border-navy-blue border-l-0 border-t-0 border-b-0 border-[1.4px] border-r-1`}
            >
              <GalleryItem gallery={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-start my-10'>
          <div className='flex items-center space-x-4'>
            <img
              src={arrowLeft}
              alt='arrow-left'
              className='prev-arrow-our-gallery cursor-pointer scale-[1.3]'
            />
            <div className='tracking-wide landing-portfolio-pagination text-[#D59962]'></div>
            <img
              src={arrowRight}
              alt='arrow-right'
              className='next-arrow-our-gallery cursor-pointer scale-[1.3]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
