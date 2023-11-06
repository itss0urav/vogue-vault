import React, { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

const Category = () => {
  const { database } = useContext(Context);

  // filtering category
  
  const filtered = new Set(database.map((data) => data.category));
  const filteredArray = [...filtered];

  return (
    <div>
      <div className="text-sm flex justify-center gap-3 md:text-xl text-white bg-gray-700  p-1 mb-4">
        {filteredArray.map((data, index) => (
          <Link
            to={`/${data}`}
            className="px-2 py-1 rounded-md hover:bg-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 no-underline text-white hover:text-cyan-200"
          >
            {data}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
