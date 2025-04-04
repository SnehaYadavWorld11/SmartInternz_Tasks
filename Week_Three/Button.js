import React from "react";

const Button = () => {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-lg shadow-md transition-all w-full"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

export default Button;