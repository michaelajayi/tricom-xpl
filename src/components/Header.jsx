import React from "react";
import HeaderBody from "./HeaderBody";

const Header = () => {
  return (
    <div className='h-screen w-screen flex justify-center'>
      <div className='flex flex-col'>
        <HeaderBody />
      </div>
    </div>
  );
};

export default Header;
