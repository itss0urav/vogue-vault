import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Navbar from "../components/Navbar";

const Admin = () => {
  const { isLoggedIn, allUsers, bannedUsers, setBannedUsers } =
    useContext(Context);
  console.log(bannedUsers);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleBan = (userEmail) => {
    setBannedUsers([...bannedUsers, userEmail]);
    // setBannedUsers(true);
  };

  const handleUnban = (userEmail) => {
    setBannedUsers(bannedUsers.filter((email) => email !== userEmail));
    // setBannedUsers(false);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
          All Users
        </h2>
        <div className="flex flex-col items-center">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Password</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {user.userName}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {user.userEmail}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {user.userPassword}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {bannedUsers.includes(user.userEmail) ? "Banned" : "Active"}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {bannedUsers.includes(user.userEmail) ? (
                      <button
                        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                        // className="bg-green-600 text-white pl-2 pr-2 rounded-md"
                        onClick={() => handleUnban(user.userEmail)}
                      >
                        Unban
                      </button>
                    ) : (
                      <button
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                        // className="bg-red-600 text-white pl-2 pr-2 rounded-md"
                        onClick={() => handleBan(user.userEmail)}
                      >
                        Ban
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
