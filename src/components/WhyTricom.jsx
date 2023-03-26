import React from "react";

import arrowUpRightWhite from "../assets/img/arrow-up-right-white.svg";

const WhyTricom = () => {
  return (
    <div className='w-full flex justify-center py-10 bg-white'>
      <div className='lg:w-[90%] flex justify-between'>
        <div className='flex-flex-col space-y-5'>
          <p className='uppercase text-deep-blue leading-[21px] tracking-[.01em] text-[1rem] font-medium'>
            Why Tricom
          </p>
          <div className='flex items-center justify-between'>
            <div className='w-[50%]'>
              <h2 className='font-medium text-[40px] leading-[52px] -tracking-[.011em] text-deep-blue w-[70%]'>
                Offerings that give your company an unfair advantage
              </h2>
            </div>
            <div className='flex flex-col space-y-5 w-[50%]'>
              <p className='text-[#011D21] text-[18px] -tracking-[.011em] leading-[150%] w-[70%]'>
                Tricom is based on a deep understanding of the drivers of
                consumer passion and the creation of unusual solutions  -
                especially entertainment, sports, arts & culture, cause-related
                activities or user-generated content
              </p>
              <a className='flex space-x-1 items-center bg-theme-yellow px-10 py-3 max-w-max' href='/about-us'>
                <p className='text-white'>Learn More</p>
                <img src={arrowUpRightWhite} alt='arrow up right' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTricom;
