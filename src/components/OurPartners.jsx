import React from "react";
import arrowUpRightNavy from "../assets/img/arrow-up-right-navy.svg";

import brandActivation from "../assets/img/brand-activation.svg";
import exhibitions from "../assets/img/exhibitions.svg";
import marketing from "../assets/img/marketing.svg";
import sponsorship from "../assets/img/sponsorship.svg";

const OurPartners = () => {
  const whatWeDo = [
    {
      title: "Brand Activation",
      desc: "We are highly specialized in producing a quality user experience for a given digital product",
      icon: brandActivation,
      list: [
        {
          title: "Experimental Activation",
        },
        {
          title: "Event Management",
        },
        {
          title: "Product Launch",
        },
        {
          title: "Internal Engagement",
        },
        {
          title: "Activation Management",
        },
        {
          title: "Award Management",
        },
        {
          title: "Support Services",
        },
      ],
    },
    {
      title: "Sponsorship",
      desc: "Our in-house frontend development team brings your digital experiences to life accurately",
      icon: sponsorship,
      list: [
        {
          title: "Right Negotation",
        },
        {
          title: "Concept Ideation",
        },
        {
          title: "Cause-related Marketing",
        },
        {
          title: "Merchandising & Asset Valuation",
        },
      ],
    },
    {
      title: "Field & Retail Marketing",
      desc: "Communicate your uniqueness, your voice and your values in a way that is visually appealing",
      icon: marketing,
      list: [
        {
          title: "Product Sampling",
        },
        {
          title: "Brand Ambassadors",
        },
        {
          title: "POS Deployment",
        },
        {
          title: "Mystery Shopping",
        },
        {
          title: "Merchandising",
        },
        {
          title: "Data Collection/Analysis",
        },
        {
          title: "Market Research",
        },
      ],
    },
    {
      title: "Exhibitions",
      desc: "Access highly skilled motion designers giving you access to modern, fast-turnaround, awesome video content",
      icon: exhibitions,
      list: [
        {
          title: "Trade Shows",
        },
        {
          title: "Conferences",
        },
        {
          title: "Support Services",
        },
      ],
    },
  ];
  return (
    <div className='w-full bg-sky-blue h-auto flex justify-center py-20'>
      <div className='lg:w-[90%] w-full flex flex-col justify-center space-y-20'>
        {/* Partner with us */}
        <div className='flex flex-col space-y-5 mx-auto border border-b-1 border-t-0 border-l-0 border-r-0 border-navy-blue pb-20'>
          <p className='text-navy text-[1rem] leading-[21px] tracking-[.01em] uppercase text-center lg:text-start'>
            Our Partners
          </p>
          <div className='flex justify-between flex-col lg:flex-row space-y-3 lg:space-y-0'>
            <div className='w-full'>
              <h1 className='text-[35px] lg:text-[56px] font-medium leading-[45px] lg:leading-[73px] -tracking-[.011em] text-navy w-full lg:w-[65%] text-center lg:text-start'>
                Global partnership through thick and thin
              </h1>
            </div>
            <div className='flex flex-col lg:items-start items-center lg:w-[50%] space-y-5 w-full px-5 lg:px-0'>
              <p className='text-[18px] leading-[150%] lg:leading-[150%] -tracking-[.011em] text-navy text-center lg:text-start'>
                Some brief summary of partners go here to lead website visitors
                to the partners’ page
              </p>
              <div className='flex space-x-2 items-center w-auto border border-b-1 border-t-0 border-l-0 border-r-0 border-navy-blue pb-2 cursor-pointer'>
                <a
                  href='/about-us#our-partners'
                  className='text-[1rem] leading-[150%] -tracking-[.011em] text-navy]'
                >
                  Partner with us
                </a>
                <img
                  src={arrowUpRightNavy}
                  alt='arrow up right cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full lg:w-1/2 flex flex-col space-y-1 justify-center items-center'>
            <h2 className='font-medium text-[35px] lg:text-[50px] tracking-[.01em] text-center lg:text-start'>
              What We Do
            </h2>
            <p className='text-[#011D21] text-[1rem] leading-[28px] text-center w-[86%]'>
              Tricom Experimental Projects Limited is a marketing and events
              agency that specialises in creating memorable brand experiences
              for clients.
            </p>
          </div>

          {/* What we do cards */}
          <div className='flex flex-col md:flex-row justify-between my-10 lg:space-x-10 space-x-0 space-y-5 lg:space-y-0'>
            {whatWeDo.map((item, index) => (
              <div
                className='flex flex-col items-start space-y-10 bg-white hover:bg-light-blue h-[460px] px-10 py-10 w-full lg:w-[290px] border border-1 border-[#011D21] hover:border-light-blue transition-all duration-200 ease-in-out what-we-do-card cursor-pointer'
                key={index}
              >
                <div className='circle-icon'>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className='text-[#0D1111] text-[16.7038px] font-medium what-we-do-title'>
                  {item.title}
                </p>
                <ul className='pl-5 list-items'>
                  {item.list.map((iterator, index) => (
                    <li
                      key={index}
                      className='text-[#747681] text-[14px] leading-[30px] list-disc list-outside'
                    >
                      {iterator.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
