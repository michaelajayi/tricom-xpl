import React from "react";

import aboutUsVector from "../assets/img/about-us-vector.svg";
import AboutCards from "../components/AboutCards";

import WhatWeDo from "../components/WhatWeDo";

const Services = () => {
  return (
    <div className='flex justify-center w-screen h-auto relative overflow-x-hidden'>
      <img
        src={aboutUsVector}
        alt='about us vector'
        className='absolute top-[100px] left-0 w-full object-cover -z-[10]'
      />
      <div className='w-full lg:w-[90%] px-5 lg:px-0 flex flex-col space-y-5 lg:pb-10 pt-20'>
        <h1 className='text-[32px] text-deep-blue -tracking-[.02em] leading-[44px]'>
          What We Do
        </h1>
        <div className='flex flex-col space-y-8'>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            Tricom Experimental Projects Limited is a marketing and events
            agency that specialises in creating memorable brand experiences for
            clients. With a team of experienced professionals, the company
            offers a wide range of services, including rights negotiation,
            concept ideation, cause-related marketing, merchandising, and asset
            valuation. Through these services, Tricom works with clients to
            develop and execute marketing campaigns that resonate with their
            target audience.
          </p>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            In addition to these foundational services, Tricom also offers brand
            activation, experiential activation, event management, and product
            launch services. These services help clients create an immersive
            brand experience that engages customers and creates a lasting
            impression. The company also offers internal engagement and
            activation management services to help clients engage their
            employees, partners, and stakeholders.
          </p>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            Tricom's field and retail marketing services include product
            sampling, brand ambassadors, POS deployment, mystery shopping,
            merchandising, data collection, and market research. These services
            are designed to help clients better understand their customers'
            needs and preferences, and to develop effective marketing campaigns
            that meet those needs. Finally, the company offers exhibition, trade
            show, and conference support services to help clients maximise their
            presence at industry events and connect with potential customers and
            partners. Overall, Tricom is a one-stop-shop for clients looking to
            create effective marketing campaigns and memorable brand
            experiences.
          </p>
          <p className='text-[#667085] leading-[32px] lg:leading-[40px] text-[1rem] lg:text-[20px]'>
            We deliver end-to-end sponsorship solutions starting from
            conception, property selection, negotiation, and contracting through
            to activation and measurement.
          </p>
        </div>
        
        {/* What we do cards */}
        <WhatWeDo />
      </div>
    </div>
  );
};

export default Services;
