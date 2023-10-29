import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GrUserAdmin, GrServices } from "react-icons/gr";
import { GiSelfLove } from "react-icons/gi";
import { BiLike, BiDislike, BiUserCircle } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import Context from "../context/Context";

const Navbar = () => {
  const { database,allUsers, username, isLoggedIn, setIsLoggedIn } = useContext(Context);

  useEffect(() => {
 
  }, [isLoggedIn,username]);
  const updatedName=allUsers[0].userName;
  console.log("updated",updatedName)
  const handleLoginToggle = () => {
    
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
            <Link to="/Cart" className="flex items-center text-lg font-medium">
              Cart <BsCartCheck className="m-1" />
            </Link>
          </li>
          <li className="hover:text-gray-400">
            <Link
              to="/Wishlist"
              className="flex items-center text-lg font-medium"
            >
              Wishlist <GiSelfLove className="m-1" />
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
          <Link to="/UserProfile">
            <div className="flex gap-1">
              <BiUserCircle className=" text-2xl mt-0.5" />
              <li className="text-cyan-300 text-lg font-medium">{updatedName}</li>
            </div>
          </Link>
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
      
    </div>
  );
};

export default Navbar;
