import React, { useState, useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
const BuyPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
        <img
          className="w-1/2 object-cover mb-4"
          src={product.imageUrl}
          alt={product.name}
        />
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
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
        <button
          onClick={(event) => addToCart(event, product)}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 focus:outline-none"
        >
          {cartText[product.id] || "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
