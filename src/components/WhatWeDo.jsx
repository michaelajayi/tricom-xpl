import React from "react";

import brandActivation from "../assets/img/brand-activation.svg";
import exhibitions from "../assets/img/exhibitions.svg";
import marketing from "../assets/img/marketing.svg";
import sponsorship from "../assets/img/sponsorship.svg";

const WhatWeDo = () => {
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
    <div className='flex flex-col md:flex-row justify-between py-20 lg:space-x-10 space-x-0 space-y-5 lg:space-y-0'>
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
  );
};

export default WhatWeDo;
