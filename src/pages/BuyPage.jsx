import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
const BuyPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [boughtUsers, setBoughtUsers] = useState(0);
  const [selectedSize, setSelectedSize] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const users = parseInt(Math.random() * 10000);
    setBoughtUsers(users);
    console.log(users);
  }, []);

  const nav = useNavigate();
  const { setCart, cartText, setCartText } = useContext(Context);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  // The 10 here is the radix.
  //It tells parseInt to convert the string into a decimal number.
  // This is necessary because some numbers could be interpreted as octal (base 8) or hexadecimal (base 16) values.
  //By specifying 10, we ensure that the value is always interpreted as a decimal number.

  const totalPrice = product.price * quantity;
  const handleBuyNow = () => {
    nav("/Payment", { state: { totalPrice } });
  };

  const addToCart = (event, product) => {
    event.stopPropagation();
    setCart((currentCart) => [...currentCart, product]);
    setCartText({ ...cartText, [product.id]: "Added to Cart" });
  };
  // const boughtUsers = parseInt(Math.random() * 10000);
  // console.log(boughtUsers);
  return (
    <div className="container mx-auto p-4 sm:p-2">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        {product.name}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center mb-8">
        <img
          className="h-1/4 object-cover mb-4 sm:mb-0 sm:mr-4"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="">
          <p className="text-gray-600 mb-4 w-auto text-sm sm:text-base">
            {product.description}
          </p>
          <p className="mb-2 text-xs sm:text-sm text-cyan-700 font-bold ">
            {boughtUsers} users bought this product
          </p>
          <div className="mb-4 flex items-center">
            <label className="mr-2 text-xs sm:text-sm font-medium text-gray-600">
              Quantity:
            </label>
            <input
              type="number"
              min="1"
              className="w-16 h-8 sm:h-10 border rounded px-3"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="mr-2 text-xs sm:text-sm font-medium text-gray-600">
              Size:
            </label>
            <select
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
              className="w-24 h-8 sm:h-10 border rounded px-3"
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Total Price: ₹{totalPrice.toFixed(2)}
          </h3>
          <div className=" flex items-center space-x-4">
            <button
              onClick={handleBuyNow}
              className="bg-blue-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Buy Now
            </button>
            <button
              onClick={(event) => addToCart(event, product)}
              className="bg-gray-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded hover:bg-gray-600 focus:outline-none"
            >
              {cartText[product.id] || "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
