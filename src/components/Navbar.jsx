import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { BiLike, BiDislike } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import Context from "../context/Context";

const Navbar = () => {
  const { username, isLoggedIn, setIsLoggedIn } = useContext(Context);
  // Use useEffect to react to changes in the login state
  useEffect(() => {
    // console.log("Login state changed: ", isLoggedIn);
  }, [isLoggedIn]);

  const handleLoginToggle = () => {
    // Toggle the login state when the login/logout button is clicked
    setIsLoggedIn(!isLoggedIn);
  };
  const [searchInp, searchInpNew] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  // console.log(searchInp);

  const handleSearch = () => {
    // const filteredData = arts.filter((art) => {
    //   return art.names.toLowerCase().includes(searchInp.toLowerCase());
    // });
    // setFilteredData(filteredData);
    // console.log(filteredData);
  };

  return (
    <div>
      <div className="bg-black flex justify-between text-gray-100 p-4">
        <div className="flex text-2xl font-bold text-left">
          <Link to="/">Vogue Vault</Link>
          <div className="flex ml-12 items-center">
            <input
              // value={searchInp}
              onChange={(e) => searchInpNew(e.target.value)}
              type=" text"
              className="text-center text-black rounded-md "
            />
            <BsSearch onClick={handleSearch} className="ml-3" />
          </div>
        </div>
        <ul className="flex gap-5">
          <li className=" hover:text-gray-400">
            <Link to="/Buy" className="flex items-center text-lg font-medium">
              Cart <BsCartCheck className="m-1" />
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/Services" className="text-lg font-medium">
              Services
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/Help" className="text-lg font-medium">
              Help
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/Terms" className="text-lg font-medium">
              Terms
            </Link>
          </li>
          <li className="text-2xl hover:text-gray-400 mt-1">
            <Link to="/admin">
              <GrUserAdmin className="bg-white rounded-md p-1 " />
            </Link>
          </li>
          <li className="text-cyan-300 text-lg font-medium">{username}</li>
          <li className="text-3xl">
            <p onClick={handleLoginToggle}>
              {isLoggedIn ? (
                <Link>
                  <BiLogOutCircle />
                </Link>
              ) : (
                <Link to="/Login">
                  <BiLogInCircle />
                </Link>
              )}
            </p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex justify-center  w-96 gap-4">
          {filteredData.map((data, index) => (
            <div key={index}>
              {data.names}
              <img className="rounded-md" src={data.imageUrl} alt="" />
              <div className="flex gap-1 place-items-center">
                {data.likes} <BiLike />
                {data.dislikes} <BiDislike />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
