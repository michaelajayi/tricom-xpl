import React from "react";
import HeaderBody from "./HeaderBody";
import Nav from "./Nav";

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
