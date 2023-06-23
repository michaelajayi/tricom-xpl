import React from "react";

const OurPartnersSliderItem = ({ partner, index, totalLength }) => {
  return (
    <div
      className={`px-5 py-5  ${
        index === totalLength - 1 ? "border-r-0" : "border-r-1"
      } border-navy-blue h-full`}
    >
      <div className='grid place-items-center px-10 py-10'>
        <img src={partner.logo} alt='partner img' className="scale-[.75]"/>
      </div>
    </div>
  );
};

export default OurPartnersSliderItem;
