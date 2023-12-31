import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import logo from "../assets/VV-Transparent.png";
import Context from "../context/Context";

const SignUp = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const nav = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9]+$/;

  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setIsLoggedIn,
    setAllUsers,
  } = useContext(Context);

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!email || !username || !password || !confirmPassword) {
      setAlertMessage("Please fill out all fields");
      return;
    }

    // Check if the username contains only numbers and letters
    if (!usernameRegex.test(username)) {
      setAlertMessage("Username can only contain numbers and letters.");
      return;
    }

    // Check if it's the admin user
    if (
      username === "admin" &&
      email === "admin@gmail.com" &&
      password === "admin000"
    ) {
      // Navigate to /admin if admin credentials are provided
      setIsLoggedIn(true);
      nav("/admin");
      return;
    }

    // Check if the email is valid
    if (!emailRegex.test(email)) {
      setAlertMessage("Invalid email address");
      return;
    }

    // Check if passwords match and have a minimum length of 8 characters
    if (password.length >= 8 && password === confirmPassword) {
      const userInfo = {
        userName: username,
        userEmail: email,
        userPassword: password,
        role: "user",
      };

      // Update allUsers state
      setAllUsers((prevUsers) => [...prevUsers, userInfo]);

      // Set isLoggedIn to true and navigate to the desired page
      setIsLoggedIn(true);
      nav("/");
    } else {
      if (password.length < 8) {
        setAlertMessage("Choose a stronger password (at least 8 characters).");
      } else {
        setAlertMessage("Passwords don't match");
      }
    }
  };

  // console.log(
  //   `Email: ${email}, Password: ${password} , Confirm Password ${confirmPassword}.`
  // );

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="">
          <div className="max-w-md w-full space-y-8">
            <div className="flex justify-center">
              <img className=" w-1/4" src={logo} alt="logo" />
            </div>
            <div>
              <h2 className="  mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
              <div className="mt-6 text-center text-md font-extrabold text-red-500">
                {alertMessage}
              </div>
            </div>
            <div className=" mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Password
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between"></div>

              <div>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
