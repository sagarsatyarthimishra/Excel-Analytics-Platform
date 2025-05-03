import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-amber-800 text-xl text-white rounded shadow-md w-96 h-90 text-center flex flex-col px-4  pb-2pt-4 pb-2 justify-between hover:scale-110"
        onSubmit={(e) => {e.preventDefault(); setPassword(""); setUsername("");}}
      >
        <h1 className="text-2xl font-bold mb-4 border-b-1 inline">Login</h1>
        <div className="flex flex-col gap-4 mb-4">
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="border-2 rounded-s hover:bg-amber-700"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border-2 rounded-s ml-1.5 hover:bg-amber-700"
              required
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-5  items-center group">
            <button
              type="submit"
              className="border-2 px-4 py-0.5 cursor-pointer bg-amber-700 border-amber-200 hover:bg-cyan-700 focus:bg-green-900"
            >
              Login
            </button>
            <button
              type="reset"
              className="text-blue-500 cursor-pointer border-b-1 border-blue-500"
              onClick={()=>{navigate('/Forget')}} 
            >
              Forget Password?
            </button>
          </div>
          <p className="text-base mt-1" href='./Register.jsx'>Create new Account <span onClick={()=>{navigate('/Register')}} className="text-blue-500 cursor-pointer border-b-1 border-blue-500">Register here</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
