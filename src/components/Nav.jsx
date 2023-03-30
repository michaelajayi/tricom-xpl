import React, { useState } from "react";

import { CgClose, CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";

import logo from "../assets/img/logo.svg";

const Nav = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Meet the team", link: "/meet-the-team" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className='w-full h-auto flex justify-center bg-white'>
      <div className='flex lg:flex-row justify-between lg:items-start items-center py-[2rem] w-full lg:w-[90%] px-5 lg:px-0'>
        <a href='/'>
          <img src={logo} alt='logo' className='scale-[1.5] ml-[1.5rem]' />
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
        {/* toggle mobile menu */}
        <div className='cursor-pointer block lg:hidden'>
          {openMobileMenu ? (
            <CgClose
              size={30}
              className='text-theme-yellow'
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            />
          ) : (
            <CgMenuRight
              size={30}
              className='text-theme-yellow'
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
