import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Context from "../context/Context";
import Navbar from "./Navbar";
import Category from "./Category";

const CategoryProducts = () => {
  const { database, setCart, setCartText, cartText } = useContext(Context);

  const navigate = useNavigate();

  // filtering category products

  const MyLocation = useLocation().pathname.split("/")[1];

  const productsFiltered = database.filter(
    (data) => data.category === MyLocation
  );

  // to handle buy

  const handleProductClick = (product) => {
    navigate(`/buy/${product.id}`);
  };

  // for cart manangement

  const addToCart = (event, product) => {
    event.stopPropagation();
    setCart((currentCart) => [...currentCart, product]);
    setCartText({ ...cartText, [product.id]: "Added to Cart" });
  };

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-4">
        <Category />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center m-4 text-3xl font-bold">
            Products from {MyLocation}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {productsFiltered.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-lg m-2 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <h3 className="font-bold text-xl p-4">{product.name}</h3>
                <img
                  className="mb-4 object-cover p-2"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="p-4">
                  <p className="font-bold text-lg">₹{product.price}</p>
                  <p className="mb-1 text-xl text-red-700 line-through">
                    ₹{product.price + 60}
                  </p>
                  {/* <p className="text-gray-700">Quantity: {product.quantity}</p> */}
                  <p className="text-gray-500">{product.description}</p>
                </div>
                <div className="flex justify-center  gap-2 mt-2">
                  <button
                    onClick={(event) => addToCart(event, product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
                  >
                    {cartText[product.id] || "Add to Cart"}
                  </button>
                  {/* <button
                    onClick={(event) => addToWishlist(event, product)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {wishlistText[product.id] || "Add to Wishlist"}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
