import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import BuyPage from "../pages/BuyPage";

const Body = () => {
  const { database, setCart, setWishlist } = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = new Set(database.map((data) => data.category));
  const filteredArray = [...filtered];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((currentWishlist) => [...currentWishlist, product]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center gap-3 text-xl text-white bg-gray-700 rounded-md p-1 mb-4">
        {filteredArray.map((data, index) => (
          <Link
            to={`/${data}`}
            className="px-2 py-1 rounded-md hover:bg-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 no-underline text-white hover:text-cyan-200"
          >
            {data}
          </Link>
        ))}
      </div>

      {selectedProduct ? (
        <BuyPage product={selectedProduct} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {database.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow-lg cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <img
                className="w-full h-1/3 object-cover mb-2"
                src={product.imageUrl}
                alt={product.name}
              />
              <div className="text-gray-700">
                <p className="mb-1">${product.price}</p>
                <p className="mb-1">Quantity: {product.quantity}</p>
                <p className="mb-1">{product.description}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(product)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
