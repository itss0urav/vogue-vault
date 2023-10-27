import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import Context from "../context/Context";
import Navbar from "./Navbar";

const Category = () => {
  const { database } = useContext(Context);
  const MyLocation = useLocation().pathname.split("/")[1];
  const productsFiltered = database.filter(
    (data) => data.category === MyLocation
  );
  console.log(productsFiltered);
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center m-4 text-3xl font-bold">  Products from {MyLocation}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsFiltered.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-lg m-2"
            >
              <h3 className="font-bold text-xl p-4">{product.name}</h3>
              <img
                className="w-full h-64 object-cover"
                src={product.imageUrl}
                alt={product.name}
              />
              <div className="p-4">
                <p className="font-bold text-lg">${product.price}</p>
                <p className="text-gray-700">Quantity: {product.quantity}</p>
                <p className="text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;