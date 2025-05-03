import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Forget from "./Components/Forget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forget" element={<Forget />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
