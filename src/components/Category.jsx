import React, { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

const Category = () => {
  const { database } = useContext(Context);

  // filtering category

  const filtered = new Set(database.map((data) => data.category));
  const filteredArray = [...filtered];

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-3/4  text-sm flex justify-center md:gap-3 md:text-xl text-white bg-black  p-1 mb-4">
        {filteredArray.map((data, index) => (
          <Link
            key={index}
            to={`/${data}`}
            className="px-2 py-1 rounded-md hover:bg-cyan-700 transition duration-500 ease-in-out transform  hover:scale-105 no-underline text-white "
          >
            {data}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
