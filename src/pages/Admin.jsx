import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Navbar from "../components/Navbar";

const Admin = () => {
  const { isLoggedIn, allUsers } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

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
