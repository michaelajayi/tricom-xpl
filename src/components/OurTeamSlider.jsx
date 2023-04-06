import React from "react";
import { team } from "../global/team";
import OurTeamSliderItem from "./OurTeamSliderItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

const OurTeamSlider = () => {
  return (
    <Swiper
      slidesPerView='auto'
      // spaceBetween={0}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      className='mySwiper-our-team'
      navigation={{
        prevEl: ".pagination-prev-btn",
        nextEl: ".pagination-next-btn",
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }}
      modules={[Keyboard, Pagination, Navigation]}
    >
      {team.map((item, index) => (
        <SwiperSlide key={index}>
          <OurTeamSliderItem member={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OurTeamSlider;
