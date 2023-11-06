import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { BsCartCheck, BsSearch } from "react-icons/bs";
import React, { useState, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { GiSelfLove } from "react-icons/gi";
import Context from "../context/Context";
import { Link } from "react-router-dom";
import logo from "../assets/VV.png";

const Navbar = () => {
  const {
    allUsers,
    // username,
    isLoggedIn,
    setIsLoggedIn,
    database,
  } = useContext(Context);

  // temp states

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInp, setSearchInp] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // to handle search

  const handleSearch = () => {
    const newfilteredData = database.filter((data) => {
      return data.name.toLowerCase().includes(searchInp.toLowerCase());
    });
    setFilteredData(newfilteredData);
  };

  // to toogle login and logout

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // to show updated name

  const updatedName =
    Array.isArray(allUsers) && allUsers.length > 0 && allUsers[0].userName
      ? allUsers[0].userName
      : "username";

  return (
    <div>
      <div className="bg-black text-white flex justify-between items-center p-4">
        <div className="flex text-2xl font-bold text-left items-center">
          <Link className="flex gap-1" to="/">
            <img className="w-8  rounded-sm" src={logo} alt="Vogue Vault" />
            <p className="hidden md:flex">Vogue Voult</p>
          </Link>
          <div className="flex ml-2 items-center">
            <input
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
              type="text"
              className="w-20 sm:w-60 text-sm h-8 text-center text-black rounded-sm"
              placeholder="Search here"
            />
            <BsSearch onClick={handleSearch} className="ml-2 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className=" sm:flex gap-5 items-center">
            <Link to="/admin">
              <GrUserAdmin className="hidden md:flex text-2xl bg-white rounded-md p-1" />
            </Link>
            <Link
              to="/UserProfile"
              className="hidden md:flex items-center text-cyan-300 text-lg font-medium"
            >
              <BiUserCircle className="text-2xl mt-0.5" />
              {updatedName}
            </Link>
            <p onClick={handleLoginToggle} className="text-3xl cursor-pointer">
              {isLoggedIn ? (
                <BiLogOutCircle />
              ) : (
                <Link to="/Login">
                  <BiLogInCircle />
                </Link>
              )}
            </p>
          </div>
          <div className="">
            <div
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AiOutlineMenu className="text-2xl" />
            </div>
            {menuOpen && (
              <div className="absolute flex flex-col items-center justify-center top-16 right-4 bg-black z-10 p-4 rounded shadow">
                <Link to="/admin">
                  <GrUserAdmin className="md:hidden flex text-2xl bg-white rounded-md p-1 mb-1" />
                </Link>
                <Link
                  to="/UserProfile"
                  className="mb-1 md:hidden flex items-center text-cyan-300 text-lg font-medium"
                >
                  <BiUserCircle className="text-2xl mt-0.5" />
                  {updatedName}
                </Link>
                <Link
                  to="/Cart"
                  className="block mb-2 hover:text-white hover:bg-gray-700 hover:rounded p-1 text-center"
                >
                  Cart <BsCartCheck className="inline-block ml-1 " />
                </Link>
                <Link
                  to="/Wishlist"
                  className="block mb-2 hover:text-white hover:bg-gray-700 hover:rounded p-1 text-center"
                >
                  Wishlist <GiSelfLove className="inline-block ml-1" />
                </Link>
                <Link
                  to="/Services"
                  className="block mb-2 hover:text-white hover:bg-gray-700 hover:rounded p-1 text-center"
                >
                  Services
                </Link>
                <Link
                  to="/Help"
                  className="block mb-2 hover:text-white hover:bg-gray-700 hover:rounded p-1 text-center"
                >
                  Help
                </Link>
                <Link
                  to="/Terms"
                  className="block mb-2 hover:text-white hover:bg-gray-700 hover:rounded p-1 text-center"
                >
                  Terms
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center ">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {item.name}
                </div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                  ₹{item.price}
                </p>
                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
