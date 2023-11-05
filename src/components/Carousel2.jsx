import React, { useState, useEffect } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
// import Carousel from "./Carousel";

const Carousel2 = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((currentImageIndex + 1) % 4);
        setIsFading(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="flex justify-center items-center  ">
      <img
        className={`w-3/4 rounded-sm object-cover transition-opacity duration-1000 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        src={images[currentImageIndex]}
        alt="carousel"
      />
      {/* <div className=" bg-white shadow-lg rounded-lg md:h-48 p-4">
        <Carousel />
      </div> */}
    </div>
  );
};

export default Carousel2;
