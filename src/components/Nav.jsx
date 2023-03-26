import React from "react";

import logo from "../assets/img/logo.svg";

const Nav = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Meet the team", link: "/meet-the-team" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  return (
    <div className='w-full h-auto flex justify-center bg-white'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-start py-[2rem] w-full lg:w-[90%]'>
        <a href='/'>
          <img src={logo} alt='logo' className="scale-[1.5] ml-[1.5rem]" />
        </a>
        <div className='space-x-20 hidden lg:flex'>
          {navLinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className='font-dm-sans text-light-blue font-medium hover:line-through transition-all duration-500 ease-in-out hover:translate-x-[10%]'
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
