import React, { useState } from "react";

const BuyPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const totalPrice = product.price * quantity;

  const handleBuyNow = () => {
    // Implement logic for handling the "Buy Now" action, e.g., adding the product to the cart, processing the purchase, etc.
    // You can add your logic here.
  };

  const handleAddToCart = () => {
    // Implement logic for handling the "Add to Cart" action, e.g., adding the product to the cart state.
    // You can add your logic here.
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
        <img className="w-1/2 object-cover mb-4" src={product.imageUrl} alt={product.name} />
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
      <div className="mb-4 flex items-center">
        <label className="mr-2 text-sm font-medium text-gray-600">Quantity:</label>
        <input
          type="number"
          min="1"
          className="w-16 h-10 border rounded px-3"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Total Price: ${totalPrice.toFixed(2)}</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleBuyNow}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 focus:outline-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
