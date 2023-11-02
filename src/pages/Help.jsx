import React from "react";
import Navbar from "../components/Navbar";

const Help = () => {
  return (
    <div className="">
      <Navbar />

      <div className="help-content mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Need Help?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            If you have any questions or need further assistance, please don't
            hesitate to contact us.
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            Email us at:{" "}
            <a
              href="mailto:souravhacks987@gmail.com"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              souravhacks987@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
