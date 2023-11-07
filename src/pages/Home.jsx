import React, { useEffect, useContext } from "react";
// import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Context from "../context/Context";
import Body from "../components/Body";

const Home = () => {
  const { isLoggedIn, bannedUsers } = useContext(Context);
  
  const navigate = useNavigate();

  //navigate to login or signup if user not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login") || navigate("/signup");
    }
  }, [isLoggedIn, navigate]);

  // console.log("from home", bannedUsers);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Carousel2 />
      </div>
      <Body />
    </div>
  );
};

export default Home;
