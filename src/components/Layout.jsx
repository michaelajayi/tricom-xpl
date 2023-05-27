import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Nav from "./Nav";

import { useSelector } from "react-redux";

import { selectLayout } from "../../app/features/layout/layoutSlice";

const Layout = () => {
  const { toggleHamburger } = useSelector(selectLayout);

  return (
    <div
      className={`${toggleHamburger ? "h-screen overflow-y-hidden" : "h-auto overflow-y-scroll"} overflow-x-hidden`}
    >
      <Nav />
      <Outlet />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Layout;
