import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Context from "../context/Context";
import Navbar from "./Navbar";
import Carousel from "../components/Carousel";
const Cart = () => {
  const { cart, setCart } = useContext(Context);

  const nav = useNavigate();

  // to handle quantity

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // to remove from cart

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //  to handle buy

  const handleBuyNow = () => {
    nav("/Payment", { state: { totalPrice } });
  };

  // Calculate total price

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-center text-2xl font-bold">Cart</div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="mt-2 text-gray-500 text-xl ">Your cart is empty</h2>
            <p className="text-gray-600">Check out fast selling products!</p>
            <div className="w-full max-w-md">
              <Carousel />
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Total Price: ₹{totalPrice.toFixed(2)}
              </h2>
              <button
                onClick={handleBuyNow}
                className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-600 focus:outline-none"
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {cart.map((item, index) => (
                <div key={item.id} className="bg-white p-4 rounded shadow-lg">
                  <img
                    className="object-cover mb-2"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <div className="text-gray-700">
                    <p className="mb-1">₹{item.price}</p>
                    <p className="mb-1">{item.description}</p>
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="mr-2 text-sm font-medium text-gray-600">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-16 h-10 border rounded px-3"
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(item.id, event)}
                    />
                  </div>
                  <button
                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
