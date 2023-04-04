import React from "react";

const GalleryItem = ({ gallery, index, totalLength }) => {
  return (
    <div
      className={`w-auto h-[532px] grid place-items-center px-5 ;lg:px-10 py-5 lg:py-10 border-[1.4px] border-t-1 border-b-1 border-l-1 ${
        index === totalLength - 1 ? "border-r-1" : "border-r-0"
      } border-navy-blue`}
    >
      <img
        src={gallery.img}
        alt='gallery'
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default GalleryItem;
