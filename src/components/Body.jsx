import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import Context from "../context/Context";
import BuyPage from "../pages/BuyPage";
import Category from "./Category";

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

  // const filtered = new Set(database.map((data) => data.category));
  // const filteredArray = [...filtered];


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // add to cart
  const addToCart = (event, product) => {
    event.stopPropagation();
    setCart((currentCart) => [...currentCart, product]);
    setCartText({ ...cartText, [product.id]: "Added to Cart" });
  };

  // add to wishlist
  const addToWishlist = (event, product) => {
    event.stopPropagation();
    setWishlist((currentWishlist) => [...currentWishlist, product]);
    setWishlistText({ ...wishlistText, [product.id]: "Added to Wishlist" });
  };

  return (
    <div className=" ">
        <Category />
      <div className="mx-auto p-4">

        {selectedProduct ? (
          <BuyPage product={selectedProduct} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {database.map((product) => {
              const minPrice = 3000;
              const maxPrice = 20500;
              const randomPrice = Math.floor(
                Math.random() * (maxPrice - minPrice + 1) + minPrice
              );

              return (
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
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <div className="text-gray-700">
                      <p className="mb-1 text-xl text-green-700">
                        ₹{product.price}
                      </p>
                      <p className="mb-1 text-xl text-red-700 line-through">
                        ₹{randomPrice}
                      </p>

                      <p className="mb-1">{product.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
