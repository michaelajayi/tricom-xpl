import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <Outlet />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Layout;
