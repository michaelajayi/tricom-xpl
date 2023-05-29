import React from "react";

import aboutUsVector from "../assets/img/about-us-vector.svg";

export const About = () => {
  return (
    <div className='flex justify-center w-screen h-auto relative overflow-x-hidden'>
      <img
        src={aboutUsVector}
        alt='about us vector'
        className='absolute top-[50px] left-0 w-full object-cover -z-[10]'
      />
      <div className='w-full lg:w-[90%] px-5 lg:px-0 flex flex-col space-y-5 pb-10 pt-20'>
        <h1 className='text-[32px] text-deep-blue -tracking-[.02em] leading-[44px]'>
          About Tricom
        </h1>
        <div className='flex flex-col space-y-8'>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            Our proposition is based on a deep understanding of the drivers of
            consumer passion and the creation of unusual solutions  - especially
            entertainment, sports, arts & culture, cause-related activities or
            user-generated content.
          </p>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            Our team brings skills and experience from diverse backgrounds
            covering Sales, Marketing, Consumer Engagement & Project Management.
          </p>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            We leverage consumer passions to deliver critical benefits to our
            clients, We work with clients to refine their engagement strategy
            and strengthen the target consumer bond that is vital to business
            success
          </p>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            We deliver end-to-end sponsorship solutions starting from
            conception, property selection, negotiation, and contracting through
            to activation and measurement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
