import React, { useState, useEffect } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const Carousel2 = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="flex justify-center items-center ">
      <img
        className="w-3/4 rounded-sm  object-cover"
        src={images[currentImageIndex]}
        alt="carousel"
      />
    </div>
  );
};

export default Carousel2;
