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
    <div className='w-full flex justify-center py-20 bg-white'>
      <div className='lg:w-[90%] flex h-[485px] justify-between '>
        {aboutCards.map((card, index) => (
          <div
            className='flex flex-col space-y-1 w-[30%] px-5 py-10 relative'
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

        {/* <div className='flex justify-between w-full'>
          {aboutCards.map((card, index) => (
            <img src={card.img} alt={card.title} key={index}></img>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AboutCards;
