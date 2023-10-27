import React, { useContext } from "react";
import Navbar from "./Navbar";
import Context from "../context/Context";

const Cart = () => {
  const { cart } = useContext(Context);
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cart.map((data, index) => (
            <div key={data.id} className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
              <img
                className="w-full h-1/2 object-cover mb-2"
                src={data.imageUrl}
                alt={data.name}
              />
              <div className="text-gray-700">
                <p className="mb-1">${data.price}</p>
                <p className="mb-1">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
