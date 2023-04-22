import React, { useEffect } from "react";

import aboutUsVector from "../assets/img/about-us-vector.svg";
import arrowUpRightWhite from "../assets/img/arrow-up-right-white.svg";

import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <div className='flex flex-col space-y-10 items-center justify-center w-screen h-auto relative py-3 lg:py-10'>
      <div className='w-full lg:w-[90%] px-5 lg:px-0 flex flex-col space-y-0 lg:space-y-5 pb-0 lg:pb-10 pt-0 lg:pt-10 justify-center items-center'>
        <img
          src={aboutUsVector}
          alt='about us vector'
          className='absolute top-[80px] left-0 w-full object-cover -z-[10]'
        />
        <div className='flex flex-col space-y-1 lg:space-y-5'>
          <h1 className='text-[32px] text-deep-blue -tracking-[.02em] leading-[44px] text-center'>
            Pitch Us
          </h1>
          <p className='text-[20px] lg:leading-[40px] text-center text-[#667085]'>
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
      </div>
      {/* contact us form */}

      <div className='px-5 lg:px-0 md:w-[80%] lg:w-[40%]'>
        <form className='flex justify-center lg:py-10 py-0'>
          <div className='flex flex-col space-y-5 lg:space-y-10 w-full'>
            {/* first and last name */}
            <div className='flex flex-col md:flex-row justify-between items-center w-full space-x-0 md:space-x-5 space-y-5 md:space-y-0'>
              <div className='flex flex-col lg:space-y-2 w-full md:w-1/2'>
                <p className='text-[#1E1D24] text-[1rem] leading-[24px]'>
                  First Name <span className='text-[#E52053]'>*</span>
                </p>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Enter name'
                  className='px-[16px] py-[12px] border border-[#D9D9D9] focus:border-[#1E1D24] rounded-[4px] placeholder:text-[#98A2B3] placeholder:text-[14px] w-full outline-none text-[#1E1D24]'
                />
              </div>
              <div className='flex flex-col lg:space-y-2 w-full md:w-1/2'>
                <p className='text-[#1E1D24] text-[1rem] leading-=[24px]'>
                  Last Name <span className='text-[#E52053]'>*</span>
                </p>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Enter name'
                  className='px-[16px] py-[12px] border border-[#D9D9D9] focus:border-[#1E1D24] rounded-[4px] placeholder:text-[#98A2B3] placeholder:text-[14px] w-full outline-none text-[#1E1D24]'
                />
              </div>
            </div>
            {/* email and phone */}
            <div className='flex flex-col md:flex-row justify-between items-center w-full space-x-0 md:space-x-5 space-y-5 md:space-y-0'>
              <div className='flex flex-col space-y-2 w-full lg:w-1/2'>
                <p className='text-[#1E1D24] text-[1rem] leading-[24px]'>
                  Email <span className='text-[#E52053]'>*</span>
                </p>
                <input
                  type='email'
                  name='email'
                  placeholder='you@company.com'
                  className='px-[16px] py-[12px] border border-[#D9D9D9] focus:border-[#1E1D24] rounded-[4px] placeholder:text-[#98A2B3] placeholder:text-[14px] w-full outline-none text-[#1E1D24]'
                />
              </div>
              <div className='flex flex-col space-y-2 w-full lg:w-1/2'>
                <p className='text-[#1E1D24] text-[1rem] leading-=[24px]'>
                  Phone number <span className='text-[#E52053]'>*</span>
                </p>
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Phone number'
                  className='px-[16px] py-[12px] border border-[#D9D9D9] focus:border-[#1E1D24] rounded-[4px] placeholder:text-[#98A2B3] placeholder:text-[14px] w-full outline-none text-[#1E1D24]'
                />
              </div>
            </div>
            {/* message */}
            <div className='flex justify-between items-center w-full space-x-5'>
              <div className='flex flex-col lg:space-y-2 w-full'>
                <p className='text-[#1E1D24] text-[1rem] leading-=[24px]'>
                  Message <span className='text-[#E52053]'>*</span>
                </p>
                <textarea
                  name='message'
                  cols='50'
                  rows='4'
                  className='px-[16px] py-[12px] border border-[#D9D9D9] focus:border-[#1E1D24] rounded-[4px] placeholder:text-[#98A2B3] placeholder:text-[14px] w-full outline-none text-[#1E1D24]'
                  placeholder='Enter description'
                />
              </div>
            </div>

            {/* submit btn */}
            <div className='flex space-x-1 items-center cursor-pointer bg-light-blue px-10 py-3 max-w-max'>
              <p className='text-white'>Get in touch</p>
              <img src={arrowUpRightWhite} alt='arrow up right' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
