import { useState, useContext, useEffect } from "react";
import Context from "../context/Context";

const Carousel = () => {
  const { database } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((oldIndex) => {
        return oldIndex === database.length - 1 ? 0 : oldIndex + 1;
      });
    }, 3000); // Change index every 3 seconds

    // Clear interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, [database]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-md overflow-hidden rounded-lg shadow-lg animate-fade-in-down">
        <img
          className="w-full h-64 object-cover"
          src={database[activeIndex].imageUrl}
          alt={database[activeIndex].name}
        />
        <div className="px-6 py-4">
          <h2 className="text-xl text-center font-semibold text-gray-800">
            {database[activeIndex].name}
          </h2>
          {/* <p className="mt-2 text-sm text-gray-600">
            {database[activeIndex].description}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
