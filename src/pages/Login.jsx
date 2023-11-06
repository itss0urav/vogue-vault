import { Link, useNavigate } from "react-router-dom";
import Context from "../context/Context";
import React, { useContext, useState } from "react";
import logo from "../assets/VV-Transparent.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { allUsers, setIsLoggedIn, bannedUsers } = useContext(Context);

  const handleLogin = () => {
    const user = allUsers.find(
      (user) =>
        user.userEmail === loginInfo.email &&
        user.userPassword === loginInfo.password
    );
    if (user) {
      if (bannedUsers.includes(user.userEmail)) {
        setErrorMessage("Your account has been banned.");
      } else {
        setIsLoggedIn(true);
        navigate("/");
      }
    } else {
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <img className=" w-1/4" src={logo} alt="logo" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          {errorMessage && (
            <p className="mt-2 text-center text-red-500">{errorMessage}</p>
          )}
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={loginInfo.email}
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
                }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={loginInfo.password}
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
