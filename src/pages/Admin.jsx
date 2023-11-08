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
    addProduct,
    // database,
  } = useContext(Context);

  const [alertMessage, setAlertMessage] = useState("");
  // console.log(bannedUsers);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // add product

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    imageUrl: "",
    price: 0,
    quantity: 1,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    // Validate new product data here if necessary
    setAlertMessage("Product Added");
    // Call addProduct function from context to add the new product
    addProduct(newProduct);

    // Clear the form after adding the product
    setNewProduct({
      id: "",
      name: "",
      category: "",
      imageUrl: "",
      price: 0,
      quantity: 1,
      description: "",
    });
  };

  // user management

  const handleBan = (userEmail) => {
    setBannedUsers([...bannedUsers, userEmail]);
  };

  const handleUnban = (userEmail) => {
    setBannedUsers(bannedUsers.filter((email) => email !== userEmail));
  };

  //updates

  const [passwordChangeUser, setPasswordChangeUser] = useState(null);
  // const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // This function will be called when the 'Change Password' button is clicked
  const handleChangePasswordClick = (userEmail) => {
    setPasswordChangeUser(userEmail);
  };

  // This function will be called when the 'Submit' button in the password change form is clicked
  const handleChangePasswordSubmit = () => {
    // Find the user in your 'allUsers' array
    const user = allUsers.find((user) => user.userEmail === passwordChangeUser);

    // Validate the current password
    // if (user.userPassword !== currentPassword) {
    //   alert("Current password is incorrect");
    //   return;
    // }

    // Validate the new password here if necessary

    // Then update the user's password in your database
    user.userPassword = newPassword;

    // Finally, clear the form and close it
    setPasswordChangeUser(null);
    // setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h2 className=" border bg-gray-600 text-white text-center text-2xl font-bold  mb-8">
          All Users
        </h2>
        <div className="flex flex-col items-center">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Password</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {user.userName}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {user.userEmail}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {user.userPassword}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    {bannedUsers.includes(user.userEmail) ? "Banned" : "Active"}
                  </td>
                  <td className="border text-center border-gray-300 px-4 py-2">
                    <div className="flex gap-2">
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
          <div className="bg-gray-400 p-2 mt-10">
            {/* Add a form for changing the password that is displayed when a
            user is selected */}
            {passwordChangeUser && (
              <form>
                {/* <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current password"
                /> */}
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                />
                <button type="button" onClick={handleChangePasswordSubmit}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <h2 className="mt-12 border bg-gray-600 text-white text-center text-2xl font-bold  mb-4">
          Add New Product
        </h2>
        <div className="max-w-md mx-auto">
          <div className="text-center text-blue-500">{alertMessage}</div>
          <form>
            <div className="mb-4">
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
