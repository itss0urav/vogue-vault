import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImageUrl from "../assets/admin-login.mp4";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "admin" && password === "admin000") {
      navigate("/adminhome");
    } else {
      setMsg("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
      >
        <source src={bgImageUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 z-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Admin Login
        </h2>
        <h2 className="text-xl font-semibold mb-6 text-center text-red-800">
        {msg}
        </h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
