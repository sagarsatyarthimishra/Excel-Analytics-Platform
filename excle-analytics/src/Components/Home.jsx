
import { Navigate, useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div  className="flex justify-end gap-2 px-4 py-1">
      <button
        onClick={() => Navigate("/Login")}
        className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300"
      >
        Login
      </button>
      <button onClick={()=>Navigate('/Register')} className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300">
        Sign Up
      </button>
    </div>
  );
};

export default Home;
