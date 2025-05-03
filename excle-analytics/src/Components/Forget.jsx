import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Forget = () => {
  const Navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [otp, setOtp] = useState(false); // Initially hide OTP input
  const [para, setPara] = useState(false); // For OTP verification success
  const [generatedOtp, setGeneratedOtp] = useState(null); // State to store the generated OTP
  const [isDisabled, setIsDisabled] = useState(false); // Disable Username and Email fields
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState(""); // State for Confirm Password
  const handleSubmit = (e, min, max) => {
    e.preventDefault();
    const OTP = Math.floor(Math.random() * (max - min)) + min;
    setGeneratedOtp(OTP); // Store the generated OTP
    console.log("Generated OTP:", OTP);
    alert("OTP has been sent to your email!"); // Simulate OTP sent
    setOtp(true); // Show the OTP input field
    setIsDisabled(true); // Disable Username and Email fields
  };

  const handleVerify = () => {
    const num = Number(input);

    // Verify OTP when user clicks Verify button
    if (num === generatedOtp) {
      setPara(true); // OTP matched
      setOtp(false); // Hide OTP input field
      alert("OTP Verified Successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };
  const HandleChange = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert("Password Changed Successfully!");
      setUserName("");
      setEmail("");
      setInput("");
      setPassword(""); // Clear the password field
      setConfirmPassword(""); // Clear the confirm password field
      setGeneratedOtp(null); // Clear the generated OTP
      //setPara(false); // Reset para state
      setIsDisabled(false); // Enable Username and Email fields
      Navigate("/Login"); // Redirect to the home page after sending OTP
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };
  return (
    <div className="w-full h-screen bg-indigo-100 flex justify-center items-center p-10 md:items-start">
      <form
        className="w-fit h-fit p-4 flex flex-col bg-cyan-800 border-4 border-amber-50 rounded-2xl shadow-xl shadow-amber-50 gap-7 md:h-fit md:w-200 md:gap-4"
        onSubmit={(e) => {
          handleSubmit(e, 1000, 1010);
        }}
        method="post"
      >
        <h1 className="text-2xl font-bold mb-1 border-b-1 inline text-center md:mb-4">
          Forget Password
        </h1>
        <div>
          <label htmlFor="Username" className="text-2xl font-bold">
            Username:{" "}
          </label>
          <input
            type="text"
            id="Username"
            name="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className="border-1 border-amber-950 rounded-xl px-1 w-41 md:px-4 md:text-2xl md:w-fit"
            required
            disabled={isDisabled} // Disable when OTP is sent
          />
        </div>
        <div>
          <label htmlFor="Email" className="text-2xl font-bold">
            Email:{" "}
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-1 border-amber-950 rounded-xl ml-4 px-1 w-50 md:px-4 md:text-2xl md:ml-13 md:w-fit"
            required
            disabled={isDisabled} // Disable when OTP is sent
          />
        </div>
        {otp && (
          <div>
            <label htmlFor="OTP" className="text-2xl font-bold">
              Enter OTP:{" "}
            </label>
            <input
              type="text"
              name="OTP"
              id="OTP"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter OTP"
              className="border-1 border-amber-950 rounded-xl ml-4 px-1 w-37 md:px-4 md:text-2xl md:ml-1 md:w-fit"
            />
            <button
              type="button"
              onClick={handleVerify}
              className="border-2 w-fit px-4 py-1 rounded-2xl mx-22 mt-3 font-bold text-amber-50 hover:bg-indigo-200"
            >
              Verify OTP
            </button>
          </div>
        )}
        {!para && (
          <button
            type="submit"
            className="border-2 w-fit px-4 py-1 rounded-2xl mx-auto font-bold text-amber-50 hover:bg-indigo-200 md:m-auto"
          >
            Send OTP
          </button>
        )}
        {para && <hr className="border-b-2 border-amber-950" />}
        {para && (
          <div>
            <p className="font-bold text-center text-xl md:text-2xl">
              Account Verified
            </p>
            <div className="flex flex-col mt-2 gap-4 md:gap-5 md:mt-2">
              <div>
                <label
                  htmlFor="NewPassword"
                  className="text-xl font-bold md:text-2xl"
                >
                  New Password:{" "}
                </label>
                <input
                  type="password"
                  name="NewPassword"
                  id="NewPassword"
                  className="border-1 border-amber-950 rounded-xl px-1 w-36 md:px-4 md:text-2xl md:w-fit md:ml-10"
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="ConfirmPassword"
                  className="text-xl font-bold md:text-2xl"
                >
                  Confirm Password:{" "}
                </label>
                <input
                  type="password"
                  name="ConfirmPassword"
                  id="ConfirmPassword"
                  className="border-1 border-amber-950 rounded-xl px-1 w-26 md:px-4 md:text-2xl md:w-fit"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                className="border-2 w-fit px-4 py-1 rounded-2xl mx-auto font-bold text-amber-50 hover:bg-indigo-200 md:m-auto"
                onClick={HandleChange}
              >
                Change Password
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Forget;
