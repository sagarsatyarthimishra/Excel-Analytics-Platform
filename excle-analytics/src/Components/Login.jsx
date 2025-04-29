import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Login;
