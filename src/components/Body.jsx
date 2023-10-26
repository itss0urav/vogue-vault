import React, { useContext } from "react";
import Context from "../context/Context";

const Body = () => {
  const { database } = useContext(Context);
  const categories = Array.from(new Set(database.map((item) => item.category)));
  console.log(categories)
  return (
    <div className="container mx-auto p-4">
      {categories.map(category => (
        <div key={category} className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {database
              .filter(item => item.category === category)
              .map((data, index) => (
                <div key={data.id} className="bg-white p-4 rounded shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
                  <img className="w-full h-1/2 object-cover mb-2" src={data.imageUrl} alt={data.name} />
                  <div className="text-gray-700">
                    <p className="mb-1">${data.price}</p>
                    <p className="mb-1">Quantity: {data.quantity}</p>
                    <p className="mb-1">{data.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
