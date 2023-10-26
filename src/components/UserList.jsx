import React from "react";

const UserList = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
          All Users
        </h2>
        <div className="flex flex-col items-center">
          {/* Map through allUsers state and display each user */}
          {allUsers.map((user, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">Username:</span> {user.userName},
              <span className="font-bold"> Email:</span> {user.userEmail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
