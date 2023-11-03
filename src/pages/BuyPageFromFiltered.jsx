import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const BuyPageFromFiltered = () => {
  const [quantity, setQuantity] = useState(1);
  const [boughtUsers, setBoughtUsers] = useState(0);
  const nav = useNavigate();
  const { database } = useContext(Context);

  const myLoc = parseInt(useLocation().pathname.split("/")[2]);
  console.log(myLoc);

  useEffect(() => {
    const users = parseInt(Math.random() * 10000);
    setBoughtUsers(users);
    console.log(users);
  }, []);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const product = database.find((data) => data.id === myLoc);
  console.log("this the id", myLoc);
  console.log("this the product", product);

  const totalPrice = product.price * quantity;

  const handleBuyNow = () => {
    nav("/Payment", { state: { totalPrice } });
  };

  return (
    <div className="">
      <Navbar/>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
        <div className="flex  justify-center mb-8">
          <img
            className="h-1/4 object-cover mb-4"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="">
            <p className="text-gray-600 mb-4 w-auto">{product.description}</p>
            <div className="mb-4 flex items-center">
              <label className="mr-2 text-sm font-medium text-gray-600">
                Quantity:
              </label>
              <input
                type="number"
                min="1"
                className="w-16 h-10 border rounded px-3"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <p className="mb-1 text-sm text-cyan-700 font-bold ">
              {boughtUsers} users bought this product
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Total Price: ₹{totalPrice.toFixed(2)}
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBuyNow}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPageFromFiltered;
