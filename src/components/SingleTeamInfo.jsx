import React from "react";

import quote from "../assets/img/quote.svg";

const SingleTeamInfo = ({ member }) => {

  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col lg:flex-row space-y-0 lg:space-y-0 lg:justify-between justify-start items-center space-x-0 md:space-x-10'>
        <div className='w-full lg:w-1/2 h-auto'>
          <div className='h-[700px] w-full relative'>
            <img
              src={member[0].teamImg}
              className='absolute top-0 left-0 h-full w-full object-contain'
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col space-y-5 items-start px-0 md:px-0'>
          {/* quote */}
          <img src={quote} alt='quote img' />
          <p className='text-navy-blue text-[20px] lg:text-[24px] font-bold leading-[150%]'>
            {member[0].name}
          </p>
          <p className='text-[16px] lg:text-[20px] leading-[30px] text-[#667085]'>
            {member[0].intro}
          </p>
          <ul className='pl-10'>
            {member[0].education.map((edu, index) => (
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
              {member[0].projectsManaged.map((project, index) => (
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

export default SingleTeamInfo;
