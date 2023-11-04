import React, { useContext, useState } from "react";
import Context from "../context/Context";
import Navbar from "./Navbar";

const UserProfile = () => {
  const { allUsers, setAllUsers } = useContext(Context);

   // temporary states for updating user data

   const [showPassword, setShowPassword] = useState(false);
   const [name, setName] = useState(allUsers && allUsers[0] ? allUsers[0].userName : "");
   const [email, setEmail] = useState(allUsers && allUsers[0] ? allUsers[0].userEmail : "");
   const [password, setPassword] = useState(allUsers && allUsers[0] ? allUsers[0].userPassword : "");
   const [error, setError] = useState(null);
 
   // set password hidden as default for privacy

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

   // manages input values

  const handleInputChange = (e) => {
    setError(null); // Clear any previous errors
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // for handling profile updation

  const handleUpdateProfile = () => {
    // Validate input
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Update user profile
    setAllUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[0] = { ...updatedUsers[0], userName: name, userEmail: email, userPassword: password };
      return updatedUsers;
    });

    setError(null); // Clear any previous errors
  };

  console.log("updated allUsers",allUsers)

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-xl shadow-md w-full sm:w-3/4 lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-center">User Profile</h2>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="flex justify-between">
            <label className="font-bold">Name:</label>
            <input
              className="text-end"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <label className="font-bold">Email:</label>
            <input
              className="text-end"
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-bold">Password:</label>
            {showPassword ? (
              <input
              className="text-center"
                type="text"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            ) : (
              "******"
            )}
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
