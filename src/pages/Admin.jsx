import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Context from "../context/Context";

const Admin = () => {
  const {
    isLoggedIn,
    allUsers,
    bannedUsers,
    setBannedUsers,
    database,
    setDatabase,
  } = useContext(Context);

  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    imageUrl: "",
    price: 0,
    quantity: 1,
    description: "",
  });

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    if (editProduct) {
      setNewProduct(editProduct);
    }
  }, [editProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (editProduct) {
      const updatedProducts = database.map((product) =>
        product.id === editProduct.id ? newProduct : product
      );
      setDatabase(updatedProducts);
      setAlertMessage("Product Updated");
    } else {
      setDatabase([...database, newProduct]);
      setAlertMessage("Product Added");
    }
    setNewProduct({
      id: "",
      name: "",
      category: "",
      imageUrl: "",
      price: 0,
      quantity: 1,
      description: "",
    });
    setEditProduct(null);
  };

  const handleBan = (userEmail) => {
    setBannedUsers([...bannedUsers, userEmail]);
  };

  const handleUnban = (userEmail) => {
    setBannedUsers(bannedUsers.filter((email) => email !== userEmail));
  };

  const [passwordChangeUser, setPasswordChangeUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  const handleChangePasswordClick = (userEmail) => {
    setPasswordChangeUser(userEmail);
  };

  const handleChangePasswordSubmit = () => {
    const user = allUsers.find((user) => user.userEmail === passwordChangeUser);
    user.userPassword = newPassword;
    setPasswordChangeUser(null);
    setNewPassword("");
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = database.filter(
      (product) => product.id !== productId
    );
    setDatabase(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h2 className="bg-gray-600 text-white text-center text-2xl font-bold mb-8 p-2 w-full sm:w-3/4 mx-auto">
          All Users
        </h2>
        <div className="overflow-x-auto w-full sm:w-3/4 mx-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 sm:w-1/6">Username</th>
                <th className="border px-4 py-2 sm:w-1/6">Email</th>
                <th className="border px-4 py-2 sm:w-1/6">Password</th>
                <th className="border px-4 py-2 sm:w-1/6">Status</th>
                <th className="border px-4 py-2 sm:w-1/3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2">{user.userName}</td>
                  <td className="border px-4 py-2">{user.userEmail}</td>
                  <td className="border px-4 py-2">{user.userPassword}</td>
                  <td className="border px-4 py-2">
                    {bannedUsers.includes(user.userEmail) ? "Banned" : "Active"}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-2 justify-center">
                      {bannedUsers.includes(user.userEmail) ? (
                        <button
                          className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                          onClick={() => handleUnban(user.userEmail)}
                        >
                          Unban
                        </button>
                      ) : (
                        <button
                          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                          onClick={() => handleBan(user.userEmail)}
                        >
                          Ban
                        </button>
                      )}
                      <button
                        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                        onClick={() =>
                          handleChangePasswordClick(user.userEmail)
                        }
                      >
                        Change Password
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-gray-400 rounded-sm mt-10">
            {passwordChangeUser && (
              <form className="flex flex-col items-center p-2 rounded-sm">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="mb-2 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={handleChangePasswordSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <h2 className="mt-12 bg-gray-600 text-white text-center text-2xl font-bold mb-4 p-2">
          All Products
        </h2>
        <div className="overflow-x-auto w-full sm:w-3/4 mx-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 sm:w-1/5">Name</th>
                <th className="border px-4 py-2 sm:w-1/5">Category</th>
                <th className="border px-4 py-2 sm:w-1/5">Price</th>
                <th className="border px-4 py-2 sm:w-1/5">Quantity</th>
                <th className="border px-4 py-2 sm:w-1/5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {database.map((product, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2">{product.price}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-2 justify-center">
                      <button
                        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-12 bg-gray-600 text-white text-center text-2xl font-bold mb-4 p-2">
          Add New Product
        </h2>
        <div className="text-center m-4 text-2xl text-cyan-600 font-bold">
          {alertMessage}
        </div>
        <div className="max-w-md mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product ID
              </label>
              <input
                type="text"
                name="id"
                value={newProduct.id}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product ID"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter category"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                value={newProduct.imageUrl}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter image URL"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter quantity"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                type="button"
                onClick={handleAddProduct}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {editProduct ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
