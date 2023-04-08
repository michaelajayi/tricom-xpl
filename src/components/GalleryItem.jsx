import React from "react";

const GalleryItem = ({ gallery }) => {
  return (
    <div
      className={`w-auto h-[532px] grid place-items-center px-5 lg:px-10 py-5 lg:py-10`}
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
