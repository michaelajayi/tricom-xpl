import React from "react";

import arrowUpRight from "../assets/img/arrow-up-right.svg";
import floatingArrowDown from "../assets/img/floating-arrow-down.svg";

const HeaderBody = () => {
  return (
    <div className='h-full flex items-end'>
      <div className='w-full py-[6rem] bg-header-body-vector bg-no-repeat bg-cover bg-top-center flex justify-center relative bg-white h-auto'>
        <img
          src={floatingArrowDown}
          alt='floating arrow down'
          className='absolute right-[10%] bottom-[32%] cursor-pointer'
        />
        <div className='w-full lg:w-[90%]'>
          <div className='w-[55%] flex flex-col items-start space-y-10'>
            <h1 className='font-dm-sans font-medium text-[56px] leading-[73px] -tracking-[.011em] text-theme-yellow'>
              We Leverage Consumers Passion To Deliver Key Benefits To Our
              clients
            </h1>
            <div className='flex space-x-2 items-center text-light-blue w-auto border border-b-1 border-t-0 border-l-0 border-r-0 border-light-blue pb-2 cursor-pointer'>
              <a href='/about-us' className='text-[1rem] leading-[150%]'>
                Learn more about us
              </a>
              <img src={arrowUpRight} alt='arrow up right cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
