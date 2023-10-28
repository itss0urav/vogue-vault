import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import BuyPage from "../pages/BuyPage";

const Body = () => {
  const {
    database,
    setCart,
    setWishlist,
    cartText,
    setCartText,
    wishlistText,
    setWishlistText,
  } = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = new Set(database.map((data) => data.category));
  const filteredArray = [...filtered];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (event, product) => {
    event.stopPropagation();
    setCart((currentCart) => [...currentCart, product]);
    setCartText({ ...cartText, [product.id]: "Added to Cart" });
  };

  const addToWishlist = (event, product) => {
    event.stopPropagation();
    setWishlist((currentWishlist) => [...currentWishlist, product]);
    setWishlistText({ ...wishlistText, [product.id]: "Added to Wishlist" });
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
    className="bg-white p-4 rounded shadow-lg cursor-pointer flex flex-col"
    onClick={() => handleProductClick(product)}
  >
    <div className="flex-grow">
      <img
        className="object-cover mb-4"
        src={product.imageUrl}
        alt={product.name}
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <div className="text-gray-700">
        <p className="mb-1">₹{product.price}</p>
        <p className="mb-1">Quantity: {product.quantity}</p>
        <p className="mb-1">{product.description}</p>
      </div>
    </div>
    <div className="flex  gap-2 mt-2">
      <button
        onClick={(event) => addToCart(event, product)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {cartText[product.id] || "Add to Cart"}
      </button>
      <button
        onClick={(event) => addToWishlist(event, product)}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {wishlistText[product.id] || "Add to Wishlist"}
      </button>
    </div>
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default Body;
