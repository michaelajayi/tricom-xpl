import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Gallery from "./Gallery";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Gallery />
      <Footer />
    </>
  );
};

export default Layout;
