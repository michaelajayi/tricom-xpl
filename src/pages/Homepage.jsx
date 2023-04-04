import React from "react";
import AboutCards from "../components/AboutCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetTheTeam from "../components/MeetTheTeam";
import OurPartners from "../components/OurPartners";
import OurPortfolio from "../components/OurPortfolio";
import Parallax from "../components/Parallax";
import WhyTricom from "../components/WhyTricom";

const Homepage = () => {
  return (
    <div className='bg-long-img h-auto w-screen bg-cover bg-top-right lg:bg-cover bg-no-repeat bg-fixed long-img'>
      <Header />
      <WhyTricom />
      <AboutCards />
      <MeetTheTeam />
      <OurPartners />
      <Parallax />
      <OurPortfolio />
    </div>
  );
};

export default Homepage;
