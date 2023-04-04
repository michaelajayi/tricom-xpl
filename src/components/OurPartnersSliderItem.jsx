import React from "react";

const OurPartnersSliderItem = ({ partner, index, totalLength }) => {
  return (
    <div className='px-10 py-10'>
      <div className='grid place-items-center px-10 py-10 border border-navy-blue h-auto'>
        <img src={partner.logo} alt='partner img' />
      </div>
    </div>
  );
};

export default OurPartnersSliderItem;
