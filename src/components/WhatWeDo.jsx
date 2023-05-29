import React, { useState } from "react";

import { whatWeDo } from "../global/what-we-do";

const WhatWeDo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentCardTitle, setCurrentCardTitle] = useState("");

  const setHoveredState = (title) => {
    setIsHovered(true);
    setCurrentCardTitle(title);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between py-20 space-x-0 space-y-5 lg:space-y-0 lg:pr-20'>
      {whatWeDo.map((item, index) => (
        <div
          className={`flex flex-col items-start space-y-10 bg-white hover:bg-light-blue h-[460px] px-10 py-10 w-full lg:w-[290px] border border-1 border-l-1 ${
            item.isLastChild ? "lg:border-r-1" : "lg:border-r-0"
          } border-[#011D21] hover:border-light-blue transition-all duration-200 ease-in-out what-we-do-card cursor-pointer`}
          key={index}
          onMouseEnter={() => setHoveredState(item.title)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='circle-icon'>
            <img
              src={
                isHovered && item.title === currentCardTitle
                  ? item.hoveredIcon
                  : item.icon
              }
              alt={item.title}
            />
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
