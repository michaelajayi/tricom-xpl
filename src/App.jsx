import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/meet-the-team' element={<OurTeam />} />
      </Route>
    </Routes>
  );
}

export default App;
