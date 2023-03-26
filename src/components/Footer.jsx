import React from "react";

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
      value: "0806 449 6980, 0805 129 4887, 0701 916 6666",
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
    <footer className='w-full bg-white flex justify-center py-20 relative'>
      <div className='lg:w-[90%] flex flex-col space-y-20 py-[6rem]'>
        <div className='bg-light-blue flex justify-between px-10 py-10 items-start'>
          <div className='w-1/2'>
            <p className='text-white text-[32px] -tracking-[.011em] leading-[42px] w-[70%]'>
              Let's discuss the future of your brand
            </p>
          </div>
          <div className='flex items-center justify-center w-auto bg-white px-8 py-3 space-x-2'>
            <a href='/about-us' className='text-[1rem] leading-[150%]'>
              Pitch us
            </a>
            <img src={arrowUpRightNavy} alt='arrow up right cursor-pointer' />
          </div>
        </div>
        {/* footer links */}
        <div className='flex space-x-60'>
          <div className='flex flex-col space-y-5'>
            <img src={logo} alt='logo' />
            <p className='text-navy-blue text-[14px]'>
              &copy; {new Date().getFullYear()} Tricom
            </p>
          </div>
          <div className='flex space-x-20'>
            <div className='flex flex-col space-y-5'>
              <p className='text-navy-blue text-[20px]'>Contact</p>
              <ul className='flex flex-col space-y-5'>
                {socialLinks.map((link, index) => (
                  <li
                    key={index}
                    className='text-navy-blue text-[1rem] leading-[150%]'
                  >{`${link.title}: ${link.value}`}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col space-y-5'>
              <p className='text-navy-blue text-[20px]'>About</p>
              <ul className='flex flex-col space-y-5'>
                {aboutUsLinks.map((item, index) => (
                  <li
                    key={index}
                    className='text-navy-blue text-[1rem] leading-[150%]'
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-between pt-10 border border-t-1 border-b-0 border-l-0 border-r-0 border-navy-blue'>
          <div className='flex space-x-5'>
            <p className='text-navy-blue text-[1rem]'>Copyright</p>
            <a href='/terms-of-use' className='text-[1rem] text-navy-blue'>
              Terms of use
            </a>
            <a href='/privacy-policy' className='text-navy-blue text-[1rem]'>
              Privacy policy
            </a>
          </div>
          <div className='flex space-x-5'>
            <p className='text-navy-blue text-[14px]'>Connect with us</p>
            {/* social icons */}
            <div className='flex space-x-5 items-center'>
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
      <div className='absolute bottom-0 left-0 w-full'>
        <img
          src={madeInAfrica}
          alt='footer pattern'
          className='w-full object-cover'
        />
      </div>
    </footer>
  );
};

export default Footer;
