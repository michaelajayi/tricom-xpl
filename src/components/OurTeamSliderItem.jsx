import React from "react";
import quote from "../assets/img/quote.svg";

import pagtionationNextBtn from "../assets/img/pagination-next-btn.svg";
import paginationPrevBtn from "../assets/img/pagination-prev-btn.svg";

const OurTeamSliderItem = ({ member }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between space-x-20'>
        <div className='w-full lg:w-1/2'>
          <div className='w-full lg:w-[410px] h-full lg:h-[637px] relative'>
            <img
              src={member.teamImg}
              className='absolute top-0 left-0 h-full w-full object-cover'
            />
            {/* slider arrows */}
            <div className='flex justify-between absolute top-1/2 b-1/2 my-auto left-0 z-10 w-full'>
              <img
                src={paginationPrevBtn}
                className='pagination-prev-btn cursor-pointer'
              />
              <img
                src={pagtionationNextBtn}
                className='pagination-next-btn cursor-pointer'
              />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col space-y-5 items-start'>
          {/* quote */}
          <img src={quote} alt='quote img' />
          <p className='text-navy-blue text-[20px] lg:text-[24px] font-bold leading-[150%]'>
            {member.name}
          </p>
          <p className='text-[16px] lg:text-[20px] leading-[30px] text-[#667085]'>
            {member.intro}
          </p>
          <ul className='pl-10'>
            {member.education.map((edu, index) => (
              <li className='list-disc list' key={index}>
                <p className='text-deep-blue text-[14px] lg:text-[16px] '>
                  {edu.degree}
                </p>
              </li>
            ))}
          </ul>
          <div className='flex flex-col space-y-5 py-5'>
            <p className='text-navy-blue text-[16px] lg:text-[20px] leading-[30px] font-semibold'>
              Brands/Projects Managed
            </p>
            <ul className='pl-10'>
              {member.projectsManaged.map((project, index) => (
                <li className='list-disc list' key={index}>
                  <p className='text-deep-blue text-[14px] lg:text-[16px] '>
                    {project.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSliderItem;
