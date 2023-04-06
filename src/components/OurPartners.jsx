import React from "react";
import arrowUpRightNavy from "../assets/img/arrow-up-right-navy.svg";

import OurPartnersSlider from "./OurPartnersSlider";
import WhatWeDo from "./WhatWeDo";

const OurPartners = () => {
  return (
    <div className='w-full bg-sky-blue h-auto flex justify-center py-20'>
      <div className='lg:w-[90%] w-full flex flex-col justify-center space-y-20'>
        {/* Partner with us */}
        <div className='flex flex-col space-y-5 mx-auto border border-b-1 border-t-0 border-l-0 border-r-0 border-navy-blue pb-20'>
          <p className='text-navy text-[1rem] leading-[21px] tracking-[.01em] uppercase text-center lg:text-start'>
            Our Partners
          </p>
          <div className='flex justify-between flex-col lg:flex-row space-y-3 lg:space-y-0'>
            <div className='w-full'>
              <h1 className='text-[35px] lg:text-[56px] font-medium leading-[45px] lg:leading-[73px] -tracking-[.011em] text-navy w-full lg:w-[65%] text-center lg:text-start'>
                Global partnership through thick and thin
              </h1>
            </div>
            <div className='flex flex-col lg:items-start items-center lg:w-[50%] space-y-5 w-full px-5 lg:px-0'>
              <p className='text-[18px] leading-[150%] lg:leading-[150%] -tracking-[.011em] text-navy text-center lg:text-start'>
                Some brief summary of partners go here to lead website visitors
                to the partners’ page
              </p>
              <div className='flex space-x-2 items-center w-auto border border-b-1 border-t-0 border-l-0 border-r-0 border-navy-blue pb-2 cursor-pointer'>
                <a
                  href='/about-us#our-partners'
                  className='text-[1rem] leading-[150%] -tracking-[.011em] text-navy]'
                >
                  Partner with us
                </a>
                <img
                  src={arrowUpRightNavy}
                  alt='arrow up right cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>

        {/* our partners logos */}
        <div>
          <OurPartnersSlider />
        </div>

        {/* What We Do */}
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full lg:w-1/2 flex flex-col space-y-1 justify-center items-center'>
            <h2 className='font-medium text-[35px] lg:text-[50px] tracking-[.01em] text-center lg:text-start'>
              What We Do
            </h2>
            <p className='text-[#011D21] text-[1rem] leading-[28px] text-center w-[86%]'>
              Tricom Experimental Projects Limited is a marketing and events
              agency that specialises in creating memorable brand experiences
              for clients.
            </p>
          </div>

          {/* What we do cards */}
          <WhatWeDo />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
