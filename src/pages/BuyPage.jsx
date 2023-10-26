import React, { useState } from "react";

const BuyPage = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="container mx-auto p-4">
      <div className="">
        <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
        <img
          className="w-half h-1/4 object-cover mb-4"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
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
      <h3 className="text-lg font-semibold mb-2">Total Price: ${totalPrice}</h3>
      {/* Add a button to handle the purchase logic */}
      {/* Implement the logic to update the database with the new quantity */}
    </div>
  );
};

export default BuyPage;
