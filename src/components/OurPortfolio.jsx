import React from "react";

import arrowUpRightNavy from "../assets/img/arrow-up-right-navy.svg";
import HomepagePortfolios from "./LandingPortfolios";

const OurPortfolio = () => {
  return (
    <div className='w-full bg-sky-blue py-20 flex justify-center'>
      <div className='lg:w-[90%] flex flex-col space-y-20'>
        <div className='flex justify-between'>
          <div className='flex justify-between w-1/2'>
            <div className='w-[60%]'>
              <h2 className='text-navy-blue text-[56px] -leading-[.011em] leading-[73px]'>
                Our Portfolio of mission-driven Projects
              </h2>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex flex-col space-y-5 items-start w-[60%]'>
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
              <HomepagePortfolios />
      </div>
    </div>
  );
};

export default OurPortfolio;
