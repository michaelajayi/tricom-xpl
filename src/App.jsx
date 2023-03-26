import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/why-tricom' element={<Events />} />
    </Routes>
  );
}

export default App;
