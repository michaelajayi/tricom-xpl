import React from "react";
import OurPartnersSliderItem from "./OurPartnersSliderItem";

import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper";

import danone from "../assets/img/companies/danone.svg";
import funtime from "../assets/img/companies/funtime.svg";
import jansen from "../assets/img/companies/jansen.svg";
import mtn from "../assets/img/companies/mtn.svg";
import oceanCity from "../assets/img/companies/ocean-city.svg";
import roche from "../assets/img/companies/roche.svg";
import sanofi from "../assets/img/companies/sanofi.svg";
import shoprite from "../assets/img/companies/shoprite.svg";
import uacFoods from "../assets/img/companies/uac-foods.svg";

const OurPartnersSlider = () => {
  const ourPartners = [
    {
      name: "Sanofi",
      logo: sanofi,
    },
    {
      name: "Shoprite",
      logo: shoprite,
    },
    {
      name: "Jansen",
      logo: jansen,
    },
    {
      name: "MTN",
      logo: mtn,
    },
    {
      name: "Danone",
      logo: danone,
    },
    {
      name: "Ocean City",
      logo: oceanCity,
    },
    {
      name: "Funtime",
      logo: funtime,
    },
    {
      name: "Roche",
      logo: roche,
    },
    {
      name: "UAC Foods",
      logo: uacFoods,
    },
  ];
  return (
    <div className='w-full space-y-10'>
      <div className='bg-white flex items-center justify-center border border-navy-blue'>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          className='mySwiper'
          // freeMode={true}
          navigation={{
            prevEl: ".prev-arrow-our-partners",
            nextEl: ".next-arrow-our-partners",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {ourPartners.map((partner, index) => (
            <SwiperSlide key={index}>
              <OurPartnersSliderItem
                partner={partner}
                totalLength={ourPartners.length}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex justify-start my-5'>
        <div className='flex items-center space-x-4'>
          <img
            src={arrowLeft}
            alt='arrow-left'
            className='prev-arrow-our-partners cursor-pointer scale-[1.3]'
          />
          <div className='tracking-wide landing-portfolio-pagination text-[#D59962]'></div>
          <img
            src={arrowRight}
            alt='arrow-right'
            className='next-arrow-our-partners cursor-pointer scale-[1.3]'
          />
        </div>
      </div>
    </div>
  );
};

export default OurPartnersSlider;
