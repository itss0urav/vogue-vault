import React, { useContext, useState } from "react";
import Context from "../context/Context";
import Navbar from "./Navbar";

const UserProfile = () => {
  const { allUsers } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdateProfile = () => {
    // Implement your update profile logic here
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-xl shadow-md w-full sm:w-3/4 lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-center">User Profile</h2>
          <div className="flex justify-between">
            <label className="font-bold">Name:</label>
            <span>{allUsers[0].userName}</span>
          </div>
          <div className="flex justify-between">
            <label className="font-bold">Email:</label>
            <span>{allUsers[0].userEmail}</span>
          </div>
          <div className="flex justify-between items-center">
            <label className="font-bold">Password:</label>
            <span>{showPassword ? allUsers[0].userPassword : "******"}</span>
            <button
              onClick={handleShowPassword}
              className="text-sm text-blue-500 underline"
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>
          <button
            onClick={handleUpdateProfile}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
