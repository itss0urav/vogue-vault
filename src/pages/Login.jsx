import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import React, { useContext, useState } from "react";

const Login = () => {
  const [alertMessage, setAlertMessage] = useState("");

  const nav = useNavigate();
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoggedIn,
    setIsLoggedIn,
    allUsers,
    setAllUsers,
  } = useContext(Context);

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!email || !username || !password || !confirmPassword) {
      setAlertMessage("Please fill out all fields");
      return;
    }

    // Check if passwords match and have a minimum length of 8 characters
    if (password.length >= 8 && password === confirmPassword) {
      const userInfo = {
        userName: username,
        userEmail: email,
        userPassword: password,
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
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <div className="mt-6 text-center text-md font-extrabold text-red-500">
              {alertMessage}
            </div>
          </div>
          <div className="mt-8 space-y-6">
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
      </div>
      <div>
        <div className="flex justify-center text-black">
          The Email is: {email} <br />
          The Password is: {password} <br />
          The Confirm Password is: {confirmPassword} <br />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
          All Users
        </h2>
        <div className="flex flex-col items-center">
          {/* Map through allUsers state and display each user */}
          {allUsers.map((user, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">Username:</span> {user.userName},
              <span className="font-bold"> Email:</span> {user.userEmail}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Login;
