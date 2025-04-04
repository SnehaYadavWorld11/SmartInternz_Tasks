import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gray-100">
      <h2 className="text-xl font-bold text-gray-900">{name}</h2>
      <p className="text-gray-700 text-lg">{email}</p>
    </div>
  );
};

export default UserCard;


