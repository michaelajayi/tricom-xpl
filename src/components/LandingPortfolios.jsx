import React from "react";
import LandingPortfolioItems from "../components/LandingPortfolioItem";

import { portfolios } from "../global/portfolios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper";

import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";

const LandingPortfolios = () => {
  return (
    <div className='w-screen space-y-10'>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        className='mySwiper-landingPortfolio'
        freeMode={true}
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
        // pagination={{
        //   el: ".landing-portfolio-pagination",
        //   type: "fraction",
        //   clickable: true,
        //   renderFraction: function (currentClass, totalClass) {
        //     return (
        //       '<span class="' +
        //       currentClass +
        //       '"></span>' +
        //       "<span> / </span> " +
        //       '<span class="' +
        //       totalClass +
        //       '"></span>'
        //     );
        //   },
        // }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Keyboard, FreeMode, Pagination, Navigation]}
      >
        {portfolios.map((portfolio, index) => (
          <SwiperSlide key={index}>
            <LandingPortfolioItems portfolio={portfolio} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-start my-5'>
        <div className='flex items-center space-x-4'>
          <img
            src={arrowLeft}
            alt='arrow-left'
            className='prev-arrow cursor-pointer scale-[1.3]'
          />
          <div className='tracking-wide landing-portfolio-pagination text-[#D59962]'></div>
          <img
            src={arrowRight}
            alt='arrow-right'
            className='next-arrow cursor-pointer scale-[1.3]'
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPortfolios;
