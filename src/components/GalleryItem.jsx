import React from "react";

const GalleryItem = ({ gallery }) => {
  return (
    <div
      className={`w-auto h-[532px] grid place-items-center px-2 lg:px-4 py-2 lg:py-4`}
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
