import React from "react";

const LandingPortfolioItem = ({ portfolio }) => {
  return (
    <div className='flex flex-col space-y-5 items-start justify-start bg-light-blue px-10 py-10 w-auto lg:w-[398px] h-[430px] lg:h-[471px]'>
      <div className='w-auto h-auto'>
        {/* <img src={portfolio.logo} className='w-full h-full object-cover' /> */}
      </div>
      <p className='text-white text-[28px] font-medium'>{portfolio.name}</p>
      <img src={portfolio.img} alt='portfolio' />
      <p className='text-white text-[14px] leading-[20px] w-[90%]'>
        {portfolio.brief}
      </p>
    </div>
  );
};

export default LandingPortfolioItem;
