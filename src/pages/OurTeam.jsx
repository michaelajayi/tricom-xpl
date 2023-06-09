import React from "react";

import aboutUsVector from "../assets/img/about-us-vector.svg";
import OurTeamGrid from "../components/OurTeamGrid";
import OurTeamSlider from "../components/OurTeamSlider";

const OurTeam = () => {
  return (
    <div className='flex flex-col space-y-10 items-center justify-center w-screen h-auto relative py-0 lg:py-10'>
      <div className='w-full px-5 lg:px-0 flex flex-col space-y-5 pb-0 lg:pb-10 pt-0 lg:pt-10 justify-center items-center'>
        <img
          src={aboutUsVector}
          alt='about us vector'
          className='absolute top-[80px] left-0 w-full object-cover -z-[10]'
        />
        <div className='flex flex-col space-y-5 w-full md:w-[80%] lg:w-[90%]'>
          <div className='flex flex-col space-y-5'>
            <h1 className='text-[32px] text-deep-blue -tracking-[.02em] leading-[44px]'>
              Meet The Team
            </h1>
            <p className='lg:text-[20px] leading-[35px] lg:leading-[40px] text text-[#667085]'>
              We work with clients to refine their engagement strategy and
              strengthen the target consumer bond that is vital to business
              success  We deliver end-to-end sponsorship solutions starting from
              conception, property selection, negotiation, and contracting
              through to activation and measurement.
            </p>
          </div>
          {/* our team slider */}
          <div className='py-5 lg:py-20 w-full md:w-[100%] px-0 md:px-0'>
            <OurTeamGrid />
            {/* <OurTeamSlider /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
