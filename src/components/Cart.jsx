import React, { useContext } from "react";
import Navbar from "./Navbar";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const nav = useNavigate();
  const { cart } = useContext(Context);

  const handleBuyNow = () => {
    nav("/Payment", { state: { totalPrice } });
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, data) => total + data.price, 0);

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
          <button
            onClick={handleBuyNow}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-600 focus:outline-none"
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cart.map((data, index) => (
            <div key={data.id} className="bg-white p-4 rounded shadow-lg">
              <img
                className="object-cover mb-2"
                src={data.imageUrl}
                alt={data.name}
              />
              <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
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
