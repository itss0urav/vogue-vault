import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import BuyPage from "../pages/BuyPage";

const Body = () => {
  const { database } = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = new Set(database.map((data) => data.category));
  const filteredArray = [...filtered];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="pt-1 pb-1 flex justify-center gap-3 text-xl text-white bg-gray-700">
        {filteredArray.map((data, index) => (
          <div className="hover:bg-gray-600 hover:rounded-md pl-2 pr-2 ">
            <Link to={`/${data}`}>
              {data}
            </Link>
          </div>
        ))}
      </div>
      <div className="container mx-auto p-4">
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
                  className="w-full h-1/2 object-cover mb-2"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="text-gray-700">
                  <p className="mb-1">${product.price}</p>
                  <p className="mb-1">Quantity: {product.quantity}</p>
                  <p className="mb-1">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
