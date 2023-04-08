import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RoutesWithoutGallery from "./components/RoutesWithoutGallery";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import SingleTeam from "./pages/SingleTeam";

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Route>
      <Route path='' element={<RoutesWithoutGallery />}>
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/meet-the-team' element={<OurTeam />} />
        <Route path='/team/:id' element={<SingleTeam />} />
      </Route>
    </Routes>
  );
}

export default App;
