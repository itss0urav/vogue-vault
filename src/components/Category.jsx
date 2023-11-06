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
      <div className="text-sm flex justify-center md:gap-3 md:text-xl text-white bg-gray-700  p-1 mb-4">
        {filteredArray.map((data, index) => (
          <Link
            to={`/${data}`}
            className="px-2 py-1 rounded-md hover:bg-gray-800 transition duration-500 ease-in-out transform  hover:scale-105 no-underline text-white "
          >
            {data}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
