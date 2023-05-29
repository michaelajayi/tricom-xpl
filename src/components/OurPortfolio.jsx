import React from "react";

import arrowUpRightNavy from "../assets/img/arrow-up-right-navy.svg";
import LandingPortfolios from "./LandingPortfolios";

const OurPortfolio = () => {
  return (
    <div className='w-full bg-sky-blue py-20 flex justify-center'>
      <div className='lg:w-[90%] flex flex-col space-y-20 lg:space-x-0'>
        <div className='flex justify-between flex-col lg:flex-row px-5 lg:px-0 space-y-3 lg:space-y-0'>
          <div className='flex justify-between w-full lg:w-1/2'>
            <div className='w-full lg:w-[60%]'>
              <h2 className='text-navy-blue text-[30px] lg:text-[56px] -tracking-[.011em] leading-[35px] lg:leading-[73px]'>
                Our Portfolio of mission-driven Projects
              </h2>
            </div>
          </div>
          <div className='lg:w-1/2 w-full'>
            <div className='flex flex-col space-y-5 items-start w-full lg:w-[60%]'>
              <p>
                Our entrepreneurs are scaling new ideas, technologies, and
                business models across a number of frontier themes.{" "}
              </p>
              <div className='flex space-x-2 items-center text-navy-blue w-auto border border-b-1 border-t-0 border-l-0 border-r-0 border-navy-blue pb-2 cursor-pointer'>
                <a href='/about-us' className='text-[1rem] leading-[150%]'>
                  View all
                </a>
                <img
                  src={arrowUpRightNavy}
                  alt='arrow up right cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Our Portfolios */}
        <LandingPortfolios />
      </div>
    </div>
  );
};

export default OurPortfolio;
