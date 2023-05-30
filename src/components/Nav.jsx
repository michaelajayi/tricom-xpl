import React, { useState } from "react";

import logo from "../assets/img/logo.svg";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

import { useSelector } from "react-redux";

import { selectLayout } from "../../app/features/layout/layoutSlice";

const Nav = () => {
  const { toggleHamburger } = useSelector(selectLayout);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    // { name: "Meet the team", link: "/meet-the-team" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className='w-full h-auto flex justify-center navbar'>
      <div className='nav flex lg:flex-row justify-between lg:items-start items-center py-[2rem] w-full lg:w-[90%] px-5 lg:px-0'>
        <a href='/'>
          <img src={logo} alt='logo' width={150} />
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
        <div className='lg:hidden z-40'>
          <Hamburger />
        </div>
        <div
          className={`absolute ${
            toggleHamburger ? "h-full opacity-1" : "h-0 opacity-0"
          } w-screen top-0 left-0 bg-gray-900 z-30 transition-all duration-[400ms] ease-in-out lg:hidden`}
        >
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
