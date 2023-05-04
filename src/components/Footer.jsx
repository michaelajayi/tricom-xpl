import React from "react";

import Gallery from "./Gallery";

import arrowUpRightNavy from "../assets/img/arrow-up-right-navy.svg";
import madeInAfrica from "../assets/img/footer-pattern.svg";

import logo from "../assets/img/logo.svg";

import facebook from "../assets/img/social-icons/facebook.svg";
import instagram from "../assets/img/social-icons/instagram.svg";
import linkedin from "../assets/img/social-icons/linkedin.svg";
import twitter from "../assets/img/social-icons/twitter.svg";
import youtube from "../assets/img/social-icons/youtube.svg";

const Footer = () => {
  const socialIcons = [
    {
      title: "Facebook",
      icon: facebook,
      link: "https://facebook.com/tricomxpl",
    },
    {
      title: "Twitter",
      icon: twitter,
      link: "https://twitter.com/tricomxpl",
    },
    {
      title: "Instagram",
      icon: instagram,
      link: "https://instagram.com/tricomxpl",
    },
    {
      title: "LinkedIn",
      icon: linkedin,
      link: "https://linkedin.com/tricomxpl",
    },
    {
      title: "Youtube",
      icon: youtube,
      link: "https://youtube.com/tricomxpl",
    },
  ];

  const socialLinks = [
    {
      title: "Office",
      value: "6, Oluwole Omole St, Off Toyin St.",
    },
    {
      title: "Address",
      value: "Ikeja, Lagos, Nigeria",
    },
    {
      title: "E-mail",
      value: "info@tricomxpl.com",
    },
    {
      title: "Website",
      value: "www.tricomxpl.com",
    },
    {
      title: "Tel",
      value: "08064496980, 08051294887",
    },
  ];

  const aboutUsLinks = [
    {
      title: "Why Tricom",
      link: "/why-tricom",
    },
    {
      title: "Team",
      link: "/team",
    },
    {
      title: "Events",
      link: "/events",
    },
  ];
  return (
    <footer className='w-full bg-white flex-col flex justify-center py-0 lg:py-0 relative items-center overflow-x-hidden h-auto'>
      <div className='lg:w-[90%] w-full flex flex-col space-y-20 lg:py-[6rem]'>
        {/* let's discuss the future of your brand */}
        <div className='flex flex-col lg:flex-row justify-between px-10 py-10 lg:items-start items-center space-y-5 bg-light-blue'>
          <div className='w-full lg:w-1/2'>
            <p className='text-white text-[32px] -tracking-[.011em] leading-[42px] w-full lg:w-[70%] text-center lg:text-start'>
              Let's discuss the future of your brand
            </p>
          </div>
          <div className='flex items-center justify-center w-auto bg-white px-8 py-3 space-x-2'>
            <a href='/contact-us' className='text-[1rem] leading-[150%]'>
              Pitch us
            </a>
            <img src={arrowUpRightNavy} alt='arrow up right cursor-pointer' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row space-x-0 space-y-20 lg:space-y-0 lg:space-x-40 lg:items-start justify-center items-center lg:justify-start'>
          {/* copyright information */}
          <div className='flex flex-col space-y-5'>
            <img src={logo} alt='tricom logo' width={150} />
            <p className='text-navy-blue text-[14px] w-full text-center lg:text-start'>
              &copy; {new Date().getFullYear()} Tricom
            </p>
          </div>

          {/* contact */}
          <div className='flex flex-col items-center lg:items-start justify-start lg:justify-center space-y-5'>
            <p className='text-navy-blue text-[20px] text-center font-medium'>
              Contact
            </p>
            <ul className='flex flex-col space-y-4 lg:space-y-5'>
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className='text-navy-blue text-[1rem] leading-[150%] text-center lg:text-start'
                >{`${link.title}: ${link.value}`}</li>
              ))}
            </ul>
          </div>

          {/* about */}
          <div className='flex flex-col space-y-5'>
            <p className='text-navy-blue text-[20px] text-center lg:text-start font-medium'>
              About
            </p>
            <ul className='flex flex-col space-y-4 lg:space-y-5'>
              {aboutUsLinks.map((item, index) => (
                <li
                  key={index}
                  className='text-navy-blue text-[1rem] leading-[150%] text-center lg:text-start'
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className='flex pt-10 justify-between border border-t-1 border-b-0 border-l-0 border-r-0 border-navy-blue flex-col lg:flex-row space-y-10 lg:space-y-0'>
          <div className='flex space-x-0 flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-5 items-center'>
            <p className='text-navy-blue text-[1rem] text-center lg:text-start'>
              Copyright
            </p>
            <a
              href='/terms-of-use'
              className='text-[1rem] text-navy-blue text-center lg:text-start'
            >
              Terms of use
            </a>
            <a
              href='/privacy-policy'
              className='text-navy-blue text-[1rem] text-center lg:text-start'
            >
              Privacy policy
            </a>
          </div>
          <div className='flex space-x-0 flex-col lg:flex-row space-y-2 items-center lg:space-x-5'>
            <p className='text-navy-blue text-[14px] text-center text-lg:start'>
              Connect with us
            </p>
            {/* social icons */}
            <div className='flex space-x-5 items-center pb-10 lg:pb-0'>
              {socialIcons.map((icon) => (
                <a href={icon.link} key={icon.title}>
                  <img
                    src={icon.icon}
                    alt={icon.title}
                    className='scale-[0.85]'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* made in africa */}
      <div className='w-screen overflow-y-hidden'>
        <img
          src={madeInAfrica}
          alt='footer pattern'
          className='w-full object-cover scale-[2.5] lg:scale-[1]'
        />
      </div>
    </footer>
  );
};

export default Footer;
