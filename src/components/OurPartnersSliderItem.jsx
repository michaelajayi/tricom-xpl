import React from "react";

const OurPartnersSliderItem = ({ partner, index, totalLength }) => {
  return (
    <div
      className={`px-10 py-10 border border-t-0 border-b-0 border-l-0 ${
        index === totalLength - 1 ? "border-r-0" : "border-r-1"
      } border-navy-blue h-full`}
    >
      <div className='grid place-items-center px-10 py-10 border border-navy-blue'>
        <img src={partner.logo} alt='partner img' />
      </div>
    </div>
  );
};

export default OurPartnersSliderItem;
