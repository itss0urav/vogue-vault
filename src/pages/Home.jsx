import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Body from "../components/Body";

const Home = () => {
  const { isLoggedIn, bannedUsers } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login") || navigate("/signup");
    }
  }, [isLoggedIn, navigate]);
  console.log("from home", bannedUsers);
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default Home;
