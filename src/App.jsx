import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
