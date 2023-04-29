import React from "react";

import creationOfSolution from "../assets/img/creation-of-solution.svg";
import customerDriven from "../assets/img/customer-driven.svg";
import understanding from "../assets/img/understanding.svg";

const AboutCards = () => {
  const aboutCards = [
    {
      number: "01",
      title: "Understanding",
      img: understanding,
    },
    {
      number: "02",
      title: "Customer driven",
      img: customerDriven,
    },
    {
      number: "03",
      title: "Creation of solution",
      img: creationOfSolution,
    },
  ];
  return (
    <div className='w-full flex justify-center py-10 lg:py-20 bg-white'>
      <div className='w-full lg:w-[90%] flex flex-col lg:flex-row h-full space-y-5 lg:space-y-0 lg:h-[485px] lg:space-x-10 px-5 lg:px-0'>
        {aboutCards.map((card, index) => (
          <div
            className='flex flex-col space-y-1 w-full lg:w-[30%] px-5 py-10 relative'
            key={index}
          >
            <img
              src={card.img}
              alt={card.title}
              className='absolute top-0 left-0 h-full w-full object-cover'
            />
            <div className='flex flex-col space-y-1 z-[2]'>
              <p className='font-medium text-white text-[12px]'>
                {card.number}
              </p>
              <p className='text-[32px] text-white font-medium'>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
