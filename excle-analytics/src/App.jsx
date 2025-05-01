import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
