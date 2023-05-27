import React from "react";

import logo from "../assets/img/tricom-logo-transparent.png";

import { useSelector } from "react-redux";

import { selectLayout } from "../../app/features/layout/layoutSlice";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  // { name: "Meet the team", link: "/meet-the-team" },
  { name: "Services", link: "/services" },
  { name: "Contact Us", link: "/contact-us" },
];

const MobileMenu = () => {
  const { toggleHamburger } = useSelector(selectLayout);

  return (
    <div className='flex flex-col space-y-20 px-10 py-[10rem] items-start'>
      <a href='/'>
        <img src={logo} alt='logo' width={150} />
      </a>
      <div className='flex flex-col space-y-8'>
        {navLinks.map((link, index) => (
          <a
            href={link.link}
            key={index}
            data-count={index + 1}
            className='font-dm-sans hover:line-through transition-all duration-500 ease-in-out hover:translate-x-[10%] font-bold text-3xl text-white'
          >
            {link.name}
          </a>
        ))}
      </div>
      <div>
        <p className='text-white text-[14px] w-full text-center lg:text-start'>
          &copy; {new Date().getFullYear()} TricomXPL
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
